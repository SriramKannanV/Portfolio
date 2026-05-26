import React from 'react'

const Project = () => {
  return (
    <div className='container m-top' id='project'>
      <div className='project-wrapper'>
        <h3 className='text-center fw-bold'>Projects</h3>

        <div className='row mt-5'>
          <div className='col-lg-6 project-img text-center'>
            <img src="src/assets/pro1.png" alt="Project1" />
          </div>

          <div className='col-lg-6 align-content-center mt-4 mt-lg-0'>
            <h4 className='fw-medium'>Zenith Task</h4>
            <p className='project-p'>A sleek, interactive task management application featuring a modern glassmorphism UI. Built to handle dynamic state filtering and 
              persistent local storage, ensuring a seamless user experience.</p>

            <div className='d-flex gap-3 project-tag'>
              <p className='text-center align-content-center fs-7'>React.js</p>
              <p className='text-center align-content-center fs-7'>Bootstrap</p>
              <p className='text-center align-content-center fs-7'>Local Storage</p>
            </div>

            <div className='d-flex gap-3'>
              <button><a style={{color: "var(--text)"}} href='https://reacttodolist-sriram.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a></button>
              <button><a style={{color: "var(--text)"}} href='https://github.com/SriramKannanV/React-To-Do-List' target='_blank' rel='noopener noreferrer'>GitHub</a></button>
            </div>
          </div>
        </div>

        <div className='row mt-5 flex-row-reverse'>
          <div className='col-lg-6 project-img text-center'>
            <img src="src/assets/pro2.png" alt="Project1" />
          </div>

          <div className='col-lg-6 align-content-center mt-4 mt-lg-0'>
            <h4 className='fw-medium text-start text-lg-end'>FinTrack</h4>
            <p className='project-p text-start text-lg-end'>A comprehensive financial tracking dashboard. It processes complex data to visualize income, 
              expenses, and category-wise spending trends dynamically through interactive charts and clean data tables.</p>

            <div className='d-flex gap-3 project-tag justify-content-start justify-content-end'>
              <p className='text-center align-content-center fs-7'>React.js</p>
              <p className='text-center align-content-center fs-7'>Bootstrap</p>
              <p className='text-center align-content-center fs-7'>Chart.Js</p>
            </div>

            <div className='d-flex gap-lg-3 justify-content-start justify-content-end'>
              <button><a style={{color: "var(--text)"}} href='https://sriram-fintrack.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a></button>
              <button><a style={{color: "var(--text)"}} href='https://github.com/SriramKannanV/FinTrack' target='_blank' rel='noopener noreferrer'>GitHub</a></button>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-lg-6 project-img text-center'>
            <img src="src/assets/pro3.png" alt="Project1" />
          </div>

          <div className='col-lg-6 align-content-center mt-4 mt-lg-0'>
            <h4 className='fw-medium'>API Data Explorer</h4>
            <p className='project-p'>A robust frontend interface built to efficiently consume, route, and display complex RESTful data. It 
              seamlessly renders and organizes dynamic posts, user profiles, comments, and to-do lists from API.</p>

            <div className='d-flex gap-3 project-tag'>
              <p className='text-center align-content-center fs-7'>React.js</p>
              <p className='text-center align-content-center fs-7'>Bootstrap</p>
              <p className='text-center align-content-center fs-7'>RESTful API</p>
            </div>

            <div className='d-flex gap-3'>
              <button><a style={{color: "var(--text)"}} href='https://dummyapis.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a></button>
              <button><a style={{color: "var(--text)"}} href='https://github.com/SriramKannanV/APIs' target='_blank' rel='noopener noreferrer'>GitHub</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
