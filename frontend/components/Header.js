import cl from "../styles/Header.module.css";

const Header = ({ theme }) => {
  return (
    <header id={cl.header}>
      <h1>{theme}</h1>
    </header>
  );
};

export default Header;
