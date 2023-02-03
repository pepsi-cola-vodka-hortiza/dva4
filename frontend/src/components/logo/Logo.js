import { BookOutlined } from "@ant-design/icons";
import "./Logo.css";

const Logo = () => {
  const logoStyle = {
    color: "#EEFBFB",
    fontSize: "32px",
  };

  return (
    <div className="logo_wrapper">
      <BookOutlined style={logoStyle} />
      <div className="logo_text">Двач 2.0</div>
    </div>
  );
};

export default Logo;
