import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./connectToDb";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";


const login = async (credentials) => {
    try {
        connectToDb();
        const user = await User.findOne({username: credentials.username})

        if(!user){
            throw new Error("Username or password is incorrect!")
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if(!isPasswordValid){
            throw new Error("Username or password is incorrect!")
        }

        return user;

    }catch(err){
        console.log(err)
        throw new Error("Failed to login!")
    }
}

export const {
    handlers: { GET, POST}, 
    auth, 
    signIn, 
    signOut,
} = NextAuth({
    ...authConfig,
     providers: [
        Github ({
            clientId:process.env.GITHUB_ID, 
            clientSecret:process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    return user;
                }catch(err){
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile}) {

            if(account.provider === "github"){
                connectToDb()
                try{

                    const user = await User.findOne({email: profile.email})

                    if(!user){
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });

                        await newUser.save();
                    }

                }catch(err){
                    console.log(err);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
});