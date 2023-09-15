import React from 'react'
import './Main.css'
import imgHtml from '../Assets/Html.png'
import imgJavaScript from '../Assets/JavaScript.png'
import imgCss from '../Assets/Css.png'
import { FormatItalic } from '@mui/icons-material'
import imgPag1 from '../Assets/PhotoPag1.1.png'
import imgPag12 from '../Assets/PhotoPag1.1.png'
import imgFacebookIcon from '../Assets/iconFacebookFoteer.png'
import imgInstagramIcon from '../Assets/iconInstagramFooter.png'
import imgLinkedinIcon from '../Assets/iconLinkedinFooter.png'

const Main = () => {
  return (
    <div>
      <main className='introduction'>
        <section className='introProfile'>
            <article className='profile'>
              <h1 className='tittle'> About me:</h1>
              <section className='imgWriteMachine'>
                <img src='https://th.bing.com/th/id/R.c33ac08a363c790fa0075a12bd4aa7d6?rik=ZpbsDzG3tYHsBA&pid=ImgRaw&r=0' className='imgProfile'></img>
                <h2><span className='machineWrite'>Carlos Developer Web</span></h2>
              </section>
            </article>
            <p className='parragrahAbouteMe'>I am a person dedicated to web development, seeking the implementation and acquisition of knowledge to improve my skills and help me move forward. Nice to meet you. Sincerely, Carlos Nieto :D</p>
        </section>  
        <section className='experience'>
            <article className='listExperience'>
              <img src={imgHtml} className='imgExperience'></img>
              <p>"My experience in HTML lies in the implementation and design of web pages, which, through online courses as well as in-person classes, have helped me develop a more semantic and organized architecture." </p>
            </article>
            <article className='listExperience'>
              <img src={imgCss} className='imgExperience'></img>
              <p>"CSS design is one of my strengths when creating interactive content with the user, as I always strive for it to be visually appealing." </p>
            </article>
            <article className='listExperience'>
              <img src={imgJavaScript} className='imgExperience'></img>
              <p>"My greatest strength lies in JavaScript, the language I use to bring the elements of my webpage to life."</p>
            </article>
        </section>
        <section className='proyects'>
          <h2 style={{fontSize:50}}>proyects</h2>
          <section className='proyect1'>
            <p>"This page is aimed at creating a musical learning path for individuals who want to delve into music and acquire knowledge but don't have a clear guide on where to begin."</p>
            <div className='photosPag'>
              <img src={imgPag1} className='imgPhotoPag1'></img>
              <img src={imgPag12} className='imgPhotoPag1'></img>
            </div>
            <div className='btnPag1'>Click to View</div>
          </section>
        </section>
      </main>
      <footer className='footerContainer'>
        <img className='imgSocialNetwork' src={imgFacebookIcon}></img>
        <img className='imgSocialNetwork' src={imgInstagramIcon}></img>
        <img className='imgSocialNetwork' src={imgLinkedinIcon}></img>
      </footer>
    </div>
  )
}

export default Main