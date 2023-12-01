import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MbIcon5 from "../../images/mb5.png";

const MobileHamburger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <img src={MbIcon5} alt="" onClick={toggleDrawer} />

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="bla bla bla"
      >
        {/* inline css applicable */}
        <div style={{ margin: "20px auto" }}>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
        </div>
        {/* 
        code goes here */}
      </Drawer>
    </div>
  );
};

export default MobileHamburger;
