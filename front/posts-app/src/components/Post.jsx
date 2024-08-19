import { Link } from "react-router-dom";
import classes from "./Post.module.css";

const Post = ({ id, author, body }) => {
  return (
    <li className={classes.post}>
      <Link to={id} className={classes.link}>
        <h2 className={classes.author}>{author}</h2>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
