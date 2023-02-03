import Header from "../header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout_wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
