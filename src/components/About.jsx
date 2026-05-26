import React from 'react'

const About = () => {
  return (
    <div className='container' id='about'>
      <div>
        <h3 className='fw-bold text-center'>About Me</h3>

        <div className='row mt-5'>
          <div className='col-lg-6 text-center'>
            <img className='about-img' src="/profile.jpeg" alt="Profile-photo" />
          </div>

          <div className='col-lg-6 mt-3 mt-lg-0'>
            <p className='about-p px-3 px-md-0'>Hello! I'm Sriram Kannan, a passionate Full Stack Developer specializing in the MERN stack. <br/><br/> I focus on building responsive, 
              scalable, and visually engaging web applications. With a strong foundation in React.js, I love translating complex problems into 
              clean, interactive, and user-friendly frontend interfaces while ensuring the backend runs smoothly. <br/><br/> Whether it's designing a sleek 
              glassmorphism UI for a task manager, building dynamic data dashboards, or architecting robust backend APIs, I thrive on bringing 
              modern digital experiences to life from the ground up. <br/><br/> Here are a few technologies I've been working with:</p>
            
            <div className='d-flex gap-5 justify-content-center about-point'>
              <div>
                <p className='mb-2'>MongoDB</p>
                <p className='mb-2'>React.Js</p>
              </div>

              <div>
                <p className='mb-2'>Express.Js</p>
                <p className='mb-2'>Node.Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
