import { useState } from "react";
import logo from "../logo.png";
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="Header">
      <div className="cont">
        <a href="/" className="logo-wrap">
          <img src={logo} alt="Logo" />
        </a>
        <div
          onClick={() => {
            setMenuIsOpen((prevState) => !prevState);
          }}
          className={
            menuIsOpen ? "button_container active" : "button_container"
          }
          id="toggle"
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
      </div>
      <div className={menuIsOpen ? "overlay open" : "overlay"} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Current Weather</a>
            </li>
            <li>
              <a href="/">Weather Forecast</a>
            </li>
            <li>
              <a href="/">Open Weather Map</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
