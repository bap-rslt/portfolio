import React from "react";

const Navbar = ({setPage}) => {
  return (
      <div className="navbar">
        <button className="button-navbar" onClick={()=>setPage(1)}>
          <text className="text-button-navbar">Home</text>
        </button>
        <button className="button-navbar" onClick={()=>setPage(2)}>
          <text className="text-button-navbar" >Projects</text>
        </button>
        <button className="button-navbar" onClick={()=>setPage(3)}>
          <text className="text-button-navbar" >Experience</text>
        </button>
        <button className="button-navbar" onClick={()=>setPage(4)}>
          <text className="text-button-navbar">Skills</text>
        </button>
      </div>
  );
};

export default Navbar;