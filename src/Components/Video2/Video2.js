import { Fragment } from "react";
import pravoo from "./videoplayback_3";

const Video2 = ({ video }) => {
  return (
    <Fragment>
      {" "}
      <video src={pravoo} width="1000" height="500" autoPlay={true} />
    </Fragment>
  );
};

export default Video2;
