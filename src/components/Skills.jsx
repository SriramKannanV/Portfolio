import React from 'react'

const Skills = () => {
  return (
    <div className='container m-top' id='skills'>
      <div>
        <h3 className='text-center fw-bold'>Skills</h3>

        <div className='mt-5 skills'>
          <div className='d-flex justify-content-center gap-4 mb-4 flex-wrap'>
            <p className='text-center align-content-center'>React.Js</p>
            <p className='text-center align-content-center'>Node.Js</p>
            <p className='text-center align-content-center'>MongoDB</p>
            <p className='text-center align-content-center'>Express.Js</p>
          </div>

          <div className='d-flex justify-content-center gap-4 mb-4 flex-wrap'>
            <p className='text-center align-content-center'>JavaScript</p>
            <p className='text-center align-content-center'>HTML5 & CSS3</p>
            <p className='text-center align-content-center'>Bootstrap</p>
            <p className='text-center align-content-center'>UI/UX Principles</p>
          </div>

          <div className='d-flex justify-content-center gap-4 mb-4 flex-wrap'>
            <p className='text-center align-content-center'>Git & GitHub</p>
            <p className='text-center align-content-center'>Figma</p>
            <p className='text-center align-content-center'>RESTful APIs</p>
            <p className='text-center align-content-center'>Tailwind Css</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
