import { Fragment } from "react";
import styles from "./Card.module.css";
import pin from "./assest/Daco_4422566.png";
import fram from "./assest/NicePng_doodle-frames-png_3000958.png";
import Card from "../Card/Card.js";

const Cardlist = ({ tasklist, handelerDelete, handelerDelete2 }) => {
  const cards = tasklist.map(({ id, ...otherprops }) => {
    return (
      <Card
        key={id}
        id={id}
        {...otherprops}
        handelerDelete={handelerDelete}
        handelerDelete2={handelerDelete2}
      />
    );
  });

  return <Fragment>{cards}</Fragment>;
};

export default Cardlist;
