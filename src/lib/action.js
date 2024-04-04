"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";

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