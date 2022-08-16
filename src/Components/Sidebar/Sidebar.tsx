import React, {FC} from "react";
import './Sidebar.scss';




const Sidebar: FC = () => {
    window.onload = () => {
        fullNameResize();
    };

    // handles nav scroll to element
    const scrollTo = (target: string) => (document.getElementById(target) as HTMLFormElement).scrollIntoView();

    // resizes name on window resize
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
            <a className="nav-link" id='nav-bio' onClick={() => scrollTo('bio')} href="#">Bio</a>
            <a className="nav-link" id='nav-port' href="#">Portfolio</a>
            <a className="nav-link" id='nav-perf' onClick={() => scrollTo('performance-videos')} href="#">Performance Videos</a>
            <a className="nav-link" id='nav-misc' href="#">Sound Design</a>
        </ul>
    </div>
  )
}

export default Sidebar;