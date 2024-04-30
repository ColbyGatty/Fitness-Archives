"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {

  const { title, img, desc, link, userId, } = Object.fromEntries(formData);

  // Convert title to slug
  const slug = titleToSlug(title);

  try {
      connectToDb();
      const newPost = new Post({
          title,
          img,
          desc,
          slug,
          link,
          userId
      });

      await newPost.save();
      console.log("Post saved successfully!");
      revalidatePath("/blog");
      revalidatePath("/admin");
  } catch (error) {
      console.log(error);
      return {error: "Something went wrong!"}
  }
}

// Function to convert title to slug
function titleToSlug(title) {
return title
  .toLowerCase()
  .replace(/ /g,'-')
  .replace(/[^\w-]+/g,'');
}

//Previous slug method rquires user to put slug name in the form
// export const addPost = async (prevState, formData) => {

//     // const title = formData.get("title");
//     // const description = formData.get("desc");
//     // const slug = formData.get("slug");

//     const { title, desc, slug, userId} = Object.fromEntries(formData);
//     try {
//         connectToDb();
//         const newPost = new Post({
//             title,
//             desc,
//             slug,
//             userId
//         });

//         await newPost.save();
//         console.log("Post saved successfully!");
//         revalidatePath("/blog");
//         revalidatePath("/admin");
//     }catch (error) {
//         console.log(error);
//         return {error: "Something went wrong!"}
//     }
// }

export const deletePost = async (formData) => {

    const {id} = Object.fromEntries(formData);
    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted successfully!");
        revalidatePath("/blog");
        revalidatePath("/admin");
    }catch (error) {
        console.log(error);
        return {error: "Something went wrong!"}
    }
};

export const addUser = async (prevState, formData) => {

  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);
  try {
      connectToDb();
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username, 
        email, 
        password: hashedPassword, 
        img, 
        isAdmin
      });

      if (isAdmin == "true") {
        newUser.isAdmin = true;
      };
     if (isAdmin == "false") {
        newUser.isAdmin = false;
      };
      
      await newUser.save();
      console.log("Post saved successfully!");
      revalidatePath("/blog");
  }catch (error) {
      console.log(error);
      return {error: "Something went wrong!"}
  }
}

export const deleteUser = async (formData) => {

  const {id} = Object.fromEntries(formData);
  try {
      connectToDb();

      await Post.deleteMany({userId: id});
      await User.findByIdAndDelete(id);
      console.log("deleted successfully!");
      revalidatePath("/admin");
  }catch (error) {
      console.log(error);
      return {error: "Something went wrong!"}
  }
};

export const handleGoogleLogin = async () => {
    "use server"
    await signIn("google");
  };

  export const handleLogout = async () => {
    "use server"
    await signOut();
  };

  export const register = async (previousState, formData) => {
    "use server"
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
      return { error: "Passwords do not match!"};
    }

    try {
      connectToDb();

        const user = await User.findOne({username});

        if (user) {
            return { error: "Username already exists!"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });


      await newUser.save();
      console.log("User saved successfully!");

        return { success: true };
    } catch (error) {
      console.log(error);
      return { error: "Something went wrong!" };
    }
  };

  export const login= async (prevState, formData) => {
    "use server"
    const { username, password } = Object.fromEntries(formData);

    try {
      await signIn("credentials", {
        username,
        password,
      });
    } catch (error) {
      console.log(error);

      if(error.message.includes("CredentialsSignin")){
        return { error: "Username or password is incorrect!"};
      }
      throw error;
    }
  };

