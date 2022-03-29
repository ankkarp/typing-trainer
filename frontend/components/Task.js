import cl from "../styles/Task.module.css";

/**
 * Окно задания
 */
const Task = ({ task }) => {
  return <div id={cl.task}>{task}</div>;
};

export default Task;
