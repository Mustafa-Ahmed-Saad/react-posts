import Post from "./Post"
import classes from "./PostsList.module.css"
import NewPost from "./NewPost"
import Modal from "./Modal"
import { useEffect, useState } from "react"

const PostsList = ({ isPosting, onStopPosting }) => {
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    async function getPosts(postData) {
        setIsFetching(true)

        try {
            const res = await fetch("http://localhost:8080/posts", {
                method: "GET",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) throw new Error("Failed to add post")
            const data = await res.json()
            setPosts(data.posts)
            setIsFetching(false)
            return data
        } catch (e) {
          setIsFetching(false)
            console.log(e)
        }
    }

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

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, i) => (
                        <Post key={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {!isFetching && posts.length === 0 && <p>No posts yet!</p>}
            {isFetching && <div>loading...</div>}
        </>
    )
}

export default PostsList
