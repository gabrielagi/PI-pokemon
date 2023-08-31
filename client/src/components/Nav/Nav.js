import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/home" className="home">
          Home
        </Link>
        <Link to="/formulario" className="home">
          Create
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            src="http://img08.deviantart.net/860a/i/2012/308/0/b/__hd___pokemon_logo___hd___by_peetzaahhh2010-d5k08gz.png"
            alt="picapica"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
