import Post from "./Post";
import classes from "./PostsList.module.css"
import NewPost from './NewPost';

const PostsList = () => {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="mustafa" body="react.js is awesome1" />
      <Post author="osama" body="react.js is awesome2" />
    </ul>
    </>
  );
};

export default PostsList;
