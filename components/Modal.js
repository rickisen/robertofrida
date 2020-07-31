import React from "react";
import styles from "../styles/modal.module.css";

export default function Modal({ open, setOpen, children }) {
  const close = e => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      onClick={close}
      className={
        open
          ? styles.wrapper + " " + styles.show
          : styles.wrapper + " " + styles.hidden
      }
    >
      <div className={open ? styles.modal + " " + styles.show : styles.modal}>
        <button onClick={() => setOpen(false)} className={styles.close}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
