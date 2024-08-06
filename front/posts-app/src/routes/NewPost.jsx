import { useState } from "react"
import classes from "./NewPost.module.css"
import Modal from "../components/Modal"
import { Link } from "react-router-dom"

const NewPost = ({ onAddPost }) => {
    const [enteredBody, setEnteredBody] = useState("")
    const [enteredAuthor, setEnteredAuthor] = useState("")

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value)
    }
    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        const postData = {
            author: enteredAuthor,
            body: enteredBody,
            id: Math.random().toString(),
        }
        onAddPost(postData)
        // onCancel()
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={onSubmit}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
                </p>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" required onChange={authorChangeHandler} />
                </p>
                <p className={classes.actions}>
                    <Link to="/" type="button">
                        cancel
                    </Link>
                    <button type="submit">submit</button>
                </p>
            </form>
        </Modal>
    )
}

export default NewPost
