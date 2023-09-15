import React from 'react'
import './SideBarDecoration.css'
import SideBar from './SideBarMenu'

const Profile = () => {
  return (
    <div>
      <section className='containerProfile'>
        <div className='containerRadius'>
        <div className='containerSolar'>
          <div className='sun'></div>
          <div className='mercury'></div>
          <div className='venus'></div>
          <div className='earth'>
            <div className='moon'></div>
          </div>
          <div className='mars'></div>
          <div className='jupiter'></div>
          <div className='saturn'></div>
          <div className='uranus'></div>
          </div>
        </div>
      </section>
      <SideBar></SideBar>
      
    </div>
  )
}

export default Profile