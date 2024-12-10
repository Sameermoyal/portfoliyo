import React from 'react'
import resume from "../../assets/resume/sameerResumeReact (1).pdf"
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <div className='Home-page'>
        <div className="upper">
             <h1>  Empowering Ideas Through Code.</h1>
             <h2>As a skilled Frontend developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in web development.</h2></div>
             <a href={resume} download>
                <button className='resume-button'>My Resume</button>
             </a>
    </div>
  )
}

export default Home