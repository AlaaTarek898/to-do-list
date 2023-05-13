import { Fragment } from "react";
import styles from "./Layout.module.css";

import Modal from "../Modal/Modal";
const Form = (props) => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

const Controller = (props) => {
  return (
    <Fragment>
      <div className={styles.controls}>{props.children}</div>
    </Fragment>
  );
};
Form.Controller = Controller;
export default Form;
