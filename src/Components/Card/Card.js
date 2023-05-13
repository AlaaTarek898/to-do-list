import { Fragment } from "react";
import pin from "./assest/Daco_4422566.png";
import fram from "./assest/NicePng_doodle-frames-png_3000958.png";
import styles from "./Card.module.css";

const Card = ({ id, title, task, handelerDelete, handelerDelete2 }) => {
  return (
    <Fragment>
      <div className={styles.card1}>
        <img className={styles.pin} src={pin} alt="pin" />
        <img className={styles.fram} src={fram} alt="pin" />
        <div className={styles.title}>{title}</div>
        <div className={styles.task}>
          {task}
          <div className={styles.btnwrap}>
            <button
              className={styles.btn}
              onClick={(e) => handelerDelete(e, id)}
            >
              ✔ خلصته
            </button>
            <button
              className={styles.btn}
              onClick={(e) => handelerDelete2(e, id)}
            >
              ❌مش قادر
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
