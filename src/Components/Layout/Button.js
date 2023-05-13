import { Fragment } from "react";
import styles from "./Layout.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button
        className={styles.btn}
        type={`${props.type ? props.type : "button"}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Fragment>
  );
};

export default Button;
