"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {

    // const title = formData.get("title");
    // const description = formData.get("desc");
    // const slug = formData.get("slug");

    const { title, desc, slug, userId} = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
        console.log("Post saved successfully!");
        revalidatePath("/blog");
    }catch (error) {
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export const deletePost = async (formData) => {

    const {id} = Object.fromEntries(formData);
    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted successfully!");
        revalidatePath("/blog");
    }catch (error) {
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github");
  };

  export const handleLogout = async () => {
    "use server"
    await signOut();
  };

  export const register = async (formData) => {
    "use server"
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
      return "Passwords do not match!";
    }

    try {
      connectToDb();

        const user = await User.findOne({username});

        if (user) {
            return "User already exists!";
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
    } catch (error) {
      console.log(error);
      return { error: "Something went wrong!" };
    }
  }