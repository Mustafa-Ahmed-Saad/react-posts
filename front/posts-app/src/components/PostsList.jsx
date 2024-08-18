import { useEffect, useState } from "react"
import NewPost from "../routes/NewPost"
import Modal from "./Modal"
import Post from "./Post"
import classes from "./PostsList.module.css"
import { useLoaderData } from "react-router-dom"

const PostsList = () => {
    // const [posts, setPosts] = useState([])
    const  posts = useLoaderData()

    

    async function addPostHandler(postData) {
        try {
            const res = await fetch("http://localhost:8080/posts", {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) throw new Error("Failed to add post")
            const data = await res.json()
            setPosts((prevPosts) => [postData, ...prevPosts])
            return data
        } catch (e) {
            console.log(e)
        }
        // or
        // const posts = await fetch("http://localhost:8080/posts", {
        //     method: "POST",
        //     body: JSON.stringify(postData),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then(async (res) => {
        //         setPosts((prevPosts) => [postData, ...prevPosts])
        //         const resJson = await res.json()
        //         return resJson
        //     })
        //     .catch((e) => console.log(e))
    }

    

    return (
        <>
            { posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, i) => (
                        <Post key={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            { posts.length === 0 && <p>No posts yet!</p>}
        </>
    )
}

export default PostsList
