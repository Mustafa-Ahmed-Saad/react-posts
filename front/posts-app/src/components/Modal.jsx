import classes from "./Modal.module.css";

const Modal = ({onClose,children}) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>{ children}</dialog>
    </>
  );
};

export default Modal;
