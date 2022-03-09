import cl from "../styles/SideBar.module.css";

const SideBar = ({ themes, setCur, data }) => {
  return (
    <div id={cl.sidebar}>
      <select id={cl.ide}>
        <option>VS2021</option>
        <option>VSCode</option>
        <option>PyCharm</option>
        <option>IntelliJ IDEA</option>
      </select>
      <ul className={cl.list}>
        {themes.map((theme, index) => (
          <li>
            <a
              onClick={(e) =>
                setCur(
                  data.filter(
                    (el) =>
                      el.theme ===
                      e.target.text.slice(e.target.text.indexOf(" ") + 1)
                  )[0]
                )
              }
            >
              {index + 1}. {theme}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
