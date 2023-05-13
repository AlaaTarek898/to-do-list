import { Fragment, useState } from "react";
import "./App.css";
import decor from "./—Pngtree—cartoon christmas decoration icon_4421677.png";
import CardList from "../Components/CardList/CardList.js";
import Video from "../Components/Video/Video.js";
import Video2 from "../Components/Video2/Video2.js";
import Modal from "../Components/Modal/Modal.js";
import Button from "../Components/Layout/Button.js";
import AddTask from "../Components/AddTask/AddTask.js";

const App = () => {
  const [video, setvideo] = useState("false");
  const [video2, setvideo2] = useState("false");
  const [modal, setmodal] = useState(false);
  const [task, settask] = useState([
    {
      id: 1,
      title: "tips for my first task",
      task: "One of the secrets of getting more done is to make a TO-DO List every day, keep it visible, and use it as a guide to action as you go through the day.",
    },
  ]);
  const addtaskrHandeller = (task) => {
    settask((prevState) => [...prevState, task]);
  };
  const handelerDelete = (e, clickedid) => {
    const detletOperation = task.filter((el) => clickedid !== el.id);

    settask(detletOperation);
    console.log(detletOperation, clickedid);

    setvideo("true");
    setTimeout(() => {
      setvideo("false");
    }, 5000);
  };
  const handelerDelete2 = (e, clickedindex) => {
    setvideo2("true");
    setTimeout(() => {
      setvideo2("false");
    }, 5000);
  };
  const closeModal = () => setmodal(false);
  return (
    <Fragment>
      <div className="decor">
        <img src={decor} alt="decor" />
      </div>
      <div className="decor2">
        <img src={decor} alt="decor" />
      </div>
      <div className="btn-div">
        <Button
          onClick={() => {
            setmodal(true);
          }}
        >
          Add new task
        </Button>
      </div>
      <div className="wrapper">
        <CardList
          tasklist={task}
          handelerDelete={handelerDelete}
          handelerDelete2={handelerDelete2}
        />
      </div>
      <div className="video">{video === "true" ? <Video /> : null}</div>
      <div className="video">{video2 === "true" ? <Video2 /> : null}</div>

      <div>
        <Modal showModal={modal} closeModal={() => setmodal(false)}>
          {" "}
          <AddTask
            addtaskrHandeller={addtaskrHandeller}
            closeModal={closeModal}
          />
        </Modal>
      </div>
    </Fragment>
  );
};

export default App;
