import React, {FC} from "react";
import './Sidebar.scss';




const Sidebar: FC = () => {
    window.onload = () => {
        fullNameResize();
    };
    const fullNameResize = () => {
        let winWidth: number = window.innerWidth;
        if (winWidth < 1100){
            (document.getElementById('fullName') as HTMLFormElement).innerHTML = 'Nick S.';
        }else if (winWidth >= 1101){
            (document.getElementById('fullName') as HTMLFormElement).innerHTML = 'Nicholas Safonov';
        }
    };

    window.addEventListener('resize', () => {
        fullNameResize();
    })
  return (
    <div className="sidebar">
        <h3 id="fullName">Nicholas Safonov</h3>
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