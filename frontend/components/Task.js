import cl from "../styles/Task.module.css";

const Task = ({ task }) => {
  return <div id={cl.task}>{task}</div>;
};

export default Task;
