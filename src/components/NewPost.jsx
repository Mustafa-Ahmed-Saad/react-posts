import classes from "./NewPost.module.css";

const NewPost = ({onAuthorChange,onBodyChange,onCancel}) => {
  
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={onBodyChange}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>cancel</button>
        <button>submit</button>
      </p>
    </form>
  );
};

export default NewPost;
