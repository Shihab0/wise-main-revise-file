import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Icon0 from "../../images/icon0.png";
import { IoCloseSharp } from "react-icons/io5";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img src={Icon0} alt="" onClick={toggleDrawer} />

      <Drawer
        style={{ backgroundColor: "#f0f0f0" }}
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={250}
        className="bla bla bla"
      >
        {/* inline css applicable */}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "20px",
            fontSize: "30px",
          }}
        >
          <IoCloseSharp onClick={closeDrawer} />
        </div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        {/* 
        code goes here */}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
