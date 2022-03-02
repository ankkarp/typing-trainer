import cl from "../styles/SideBar.module.css";

const SideBar = () => {
  return (
    <div id={cl.sidebar}>
      <select id={cl.ide}>
        <option>VSCode</option>
        <option>PyCharm</option>
        <option>VisualStudio</option>
        <option>IntelliJ IDEA</option>
      </select>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default SideBar;
