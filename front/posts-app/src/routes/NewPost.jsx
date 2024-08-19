import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const NewPost = () => {
  const data = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("first ddd",data)
    if (data?.post) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <Modal>
      <Form className={classes.form} method="POST">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            cancel
          </Link>
          <button type="submit">submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  const formData = await request?.formData();
  const postData = Object.fromEntries(formData); // {author:"", body:""}
  console.log(postData);

  try {
    const res = await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to add post");
    const data = await res.json();
    // return redirect("/") // if u want to use useNavigate() you can't besause it is hook so we can use redirect() instead of useNavigate
    return data; // if we return data here we can recive it using  useActionData()
  } catch (e) {
    console.log(e);
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
