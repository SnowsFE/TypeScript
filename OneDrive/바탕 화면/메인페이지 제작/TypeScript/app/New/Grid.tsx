import React from "react";

const Grid = () => {
  return (
    <div className="container1">
      <div className="header1">Header</div>
      <div className="sidebar1">
        <div className="sidebar-item">Profile</div>
        <div className="sidebar-item">Friends List</div>
        <div className="sidebar-item">Notifications</div>
      </div>
      <div className="main1">
        <div className="post">Post 1</div>
        <div className="post">Post 2</div>
        <div className="post">Post 3</div>
      </div>
      <div className="footer1">Footer</div>
    </div>
  );
};

export default Grid;
