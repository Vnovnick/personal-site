import React, {FC} from "react";
import './Sidebar.scss';
import Nav from "react-bootstrap";

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
        <ul className="nav flex-column">
            <a className="nav-link" href="#">Bio</a>
            <a className="nav-link" href="#">Portfolio</a>
            <a className="nav-link" href="#">Performance Videos</a>
            <a className="nav-link" href="#">Misc</a>
        </ul>
    </div>
  )
}

export default Sidebar;