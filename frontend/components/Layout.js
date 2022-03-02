import CodeInput from "./CodeInput";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <CodeInput />
      {children}
    </>
  );
};

export default Layout;
