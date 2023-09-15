import React, { useState } from 'react'
import './SideBarMenu.css'
import iconUser from '../Assets/iconUser.png'
import iconExperience from '../Assets/iconExperience.png'
import iconProyects from '../Assets/iconProyects.png'
import iconSocialNetwork from '../Assets/iconSocialNetwork.png'
import menuSideBarImg from '../Assets/menuSideBar.png';


const SideBar = () => {
    const [sideBar, setSideBar] = useState(false);
    const [displaySpan, setDisplaySpan] = useState(false);
    const toogleClassMenuBtnBar =() =>{
        setSideBar(!sideBar);
        const toogleClassDisplay =()=>{
            setDisplaySpan(!displaySpan);
        }
        setTimeout(toogleClassDisplay,200);
        

    };
    const ClassElementSideBar = sideBar ? ' ': ' close';
    const ClassElementSpan = displaySpan ? ' ' : ' dissapear '  



    return (
    <div>
        <aside className={`sideBar ${ClassElementSideBar}`}>
            <section className='menuBotton' >
                    <img className='menuSideBar' src={menuSideBarImg} onClick={toogleClassMenuBtnBar}></img>
            </section>
            <ul className='navLink'>
                <li>
                    <a href='#'>
                        <img src={iconUser} ></img>
                        <span className={`linkExperience ${ClassElementSpan}`}>Profile</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={iconExperience} ></img>
                        <span className={`linkExperience ${ClassElementSpan}`}>Experience</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={iconProyects} ></img>
                        <span className={`linkProyect ${ClassElementSpan}`}>Proyects</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={iconSocialNetwork} ></img>
                        <span className={`linkNetwork ${ClassElementSpan}`}>SocialNetwork</span>
                    </a>
                </li>
            </ul>
        </aside>
    </div>
  )
}

export default SideBar
