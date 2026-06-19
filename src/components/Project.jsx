import React from 'react'

const Project = () => {
  return (
    <div className='container m-top' id='project'>
      <div className='project-wrapper'>
        <h3 className='text-center fw-bold'>Projects</h3>

        <div className='row mt-5'>
          <div className='col-lg-6 project-img text-center'>
            <img src="/pro1.png" alt="Project1" />
          </div>

          <div className='col-lg-6 align-content-center mt-4 mt-lg-0'>
            <h4 className='fw-medium px-3 px-md-0'>Translator App</h4>
            <p className='project-p px-3 px-md-0'>A modern, fully responsive text translation application built during my Frontend Development 
              internship. The project converts English text into multiple global languages in real-time by integrating an external translation 
              engine via RapidAPI.</p>

            <div className='d-flex gap-3 project-tag'>
              <p className='text-center align-content-center fs-7'>React.js</p>
              <p className='text-center align-content-center fs-7'>Tailwind Css</p>
              <p className='text-center align-content-center fs-7'>Rapid API</p>
            </div>

            <div className='d-flex gap-3'>
              <button><a style={{color: "var(--text)"}} href='https://translatorapp-sriram.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a></button>
              <button><a style={{color: "var(--text)"}} href='https://github.com/SriramKannanV/Translator-App' target='_blank' rel='noopener noreferrer'>GitHub</a></button>
            </div>
          </div>
        </div>

        <div className='row mt-5 flex-row-reverse'>
          <div className='col-lg-6 project-img text-center'>
            <img src="/pro2.png" alt="Project1" />
          </div>

          <div className='col-lg-6 align-content-center mt-4 mt-lg-0'>
            <h4 className='fw-medium text-start text-lg-end px-3 px-md-0'>String Generator</h4>
            <p className='project-p text-start text-lg-end px-3 px-md-0'>A modern, responsive random string and password generator built using 
              React, Vite, and Tailwind CSS. Implements optimized state management with core React hooks (useState, useCallback, useEffect), 
              UI context state persistence, and clean CSS-in-JS customization.</p>

            <div className='d-flex gap-3 project-tag justify-content-start justify-content-lg-end'>
              <p className='text-center align-content-center fs-7'>React.js</p>
              <p className='text-center align-content-center fs-7'>Tailwind Css</p>
              <p className='text-center align-content-center fs-7'>Local Storage</p>
            </div>

            <div className='d-flex gap-lg-3 justify-content-start justify-content-lg-end'>
              <button><a style={{color: "var(--text)"}} href='https://sriram-string-generator.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a></button>
              <button><a style={{color: "var(--text)"}} href='https://github.com/SriramKannanV/String-Generator' target='_blank' rel='noopener noreferrer'>GitHub</a></button>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-lg-6 project-img text-center'>
            <img src="/pro3.jpg" alt="Project1" />
          </div>

          <div className='col-lg-6 align-content-center mt-4 mt-lg-0'>
            <h4 className='fw-medium px-3 px-md-0'>Leafy</h4>
            <p className='project-p px-3 px-md-0'>A modern, high-performance plant e-commerce application built with React, Vite, and Redux 
              Toolkit. Features smooth clientside dynamic routing, an elegant glassmorphic UI layout, responsive real-time search filtering, 
              and state-persistent global shopping cart actions.</p>

            <div className='d-flex gap-3 project-tag'>
              <p className='text-center align-content-center fs-7'>React.js</p>
              <p className='text-center align-content-center fs-7'>Tailwind Css</p>
              <p className='text-center align-content-center fs-7'>Redux</p>
            </div>

            <div className='d-flex gap-3'>
              <button><a style={{color: "var(--text)"}} href='https://leafy-ecommerce.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a></button>
              <button><a style={{color: "var(--text)"}} href='https://github.com/SriramKannanV/Leafy' target='_blank' rel='noopener noreferrer'>GitHub</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
