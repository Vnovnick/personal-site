import React, {FC} from "react";
import './Sidebar.scss';




const Sidebar: FC = () => {
    window.onload = () => {
        fullNameResize();
    };

    // const selectSection = (target: string): void => {
    //     const section = document.getElementById(target) as HTMLFormElement;
    //     section.classList.toggle('selected');     
    // };

    const fullNameResize = (): void => {
        let winWidth: number = window.innerWidth;
        if (winWidth < 1270){
            (document.getElementById('fullName') as HTMLFormElement).innerHTML = 'Nick S.';
        }else if (winWidth >= 1271){
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
            <a className="nav-link" id='nav-bio' href="#">Bio</a>
            <a className="nav-link" id='nav-port' href="#">Portfolio</a>
            <a className="nav-link" id='nav-perf' href="#">Performance Videos</a>
            <a className="nav-link" id='nav-misc' href="#">Misc</a>
        </ul>
    </div>
  )
}

export default Sidebar;