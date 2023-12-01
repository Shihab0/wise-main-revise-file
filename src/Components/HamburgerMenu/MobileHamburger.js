import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MbIcon5 from "../../images/mb5.png";
import { IoCloseSharp } from "react-icons/io5";

const MobileHamburger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img src={MbIcon5} alt="" onClick={toggleDrawer} />

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        size={500}
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
          <IoCloseSharp onClick={closeDrawer} style={{ cursor: "pointer" }} />
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

export default MobileHamburger;
