import { useEffect, useState } from "react";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  // const [posts, setPosts] = useState([])
  const posts = useLoaderData();

  if (!posts) return <div>no posts</div>;

  return (
    <>
      {posts?.length > 0 && (
        <ul className={classes.posts}>
          {posts?.map((post, i) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts?.length === 0 && <p>No posts yet!</p>}
    </>
  );
};

export default PostsList;
