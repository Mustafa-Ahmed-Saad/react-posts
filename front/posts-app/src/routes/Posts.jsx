import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  // return fetch("http://localhost:8080/posts")

  try {
    const res = await fetch("http://localhost:8080/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to add post");
    const data = await res.json();
    return data?.posts;
  } catch (e) {
    console.log(e);
  }

  return null;
}
