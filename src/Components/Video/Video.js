import { Fragment } from "react";
import pravoo from "./action.mp4";

const Video = ({ video }) => {
  return (
    <Fragment>
      {" "}
      <video src={pravoo} width="1000" height="500" autoPlay={true} />
    </Fragment>
  );
};

export default Video;
