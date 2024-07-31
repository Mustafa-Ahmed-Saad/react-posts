import classes from "./Post.module.css"


const Post = ({ author, body }) => {
  return (
    <li className={classes.post}>
      <h2 className={classes.author}>{author}</h2>
      <p className={classes.text}>{body}</p>
    </li>
  );
};

export default Post;
