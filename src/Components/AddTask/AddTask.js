import { Fragment, useState } from "react";
import Form from "../Layout/Form.js";
import Button from "../Layout/Button.js";
import sad from "./images.jpg";
import happy from "./happy.jpg";
import fram from "./—Pngtree—cute cartoon dividing line_8537651 (1).png";
import styles from "./addtask.module.css";

const AddTask = ({ addtaskrHandeller, closeModal }) => {
  const [title, settitle] = useState("");
  const [task, settask] = useState("");
  const onSubmitHandeller = (e) => {
    e.preventDefault();
    addtaskrHandeller({
      id: Math.round(Math.random() * 30),
      title,
      task,
    });
    settitle("");
    settask("");
    console.log(title, task);
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmitHandeller}>
        <Form.Controller>
          <label htmlFor="title"> Task title </label>
          <input
            type="text"
            placeholder="The Task"
            id="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          ></input>
        </Form.Controller>
        <Form.Controller>
          <label>Your mission details</label>
          <textarea
            id="task"
            value={task}
            placeholder="try to Break each task into smaller chunks here as steps"
            onChange={(e) => settask(e.target.value)}
          ></textarea>
        </Form.Controller>
        <div className={styles.qoute}>
          <span className={styles.text1}>Time Flies</span>
          <div className={styles.img1}>
            <img style={{ borderRadius: "50%" }} src={sad} alt="sad" />
          </div>
          <span className={styles.text2}>But You’re The Pilot</span>
          <div className={styles.img2}>
            <img style={{ borderRadius: "50%" }} src={happy} alt="happy" />
          </div>
        </div>
        <div className={styles.btn}>
          <Button
            className={styles.btn}
            type="submit"
            onClick={() => closeModal()}
          >
            Add
          </Button>
        </div>
      </Form>

      <img className={styles.fram} src={fram} alt="fram" />
    </Fragment>
  );
};

export default AddTask;
