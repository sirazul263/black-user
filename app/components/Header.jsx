"use client";

import MenuBar from "./MenuBar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div>
      <TopBar />
      <div className="d-none d-md-block">
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
