import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Icon0 from "../../images/icon0.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <img src={Icon0} alt="" onClick={toggleDrawer} />

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        {/* inline css applicable */}
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
