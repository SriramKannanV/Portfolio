import React from 'react'

const Footer = () => {
  return (
    <div className='footer-section mt-5 pt-5'>
      <div className='container'>
        <div className='row footer-links'>
          <div className='col-md-6'>
            <h6 className='fw-bold'>SRIRAM KANNAN</h6>
            <h6 className='fs-6 fw-normal footer-desc'>Frontend & Full Stack Developer. <br /> Building scalable web apps.</h6>
          </div>

          <div className='col-md-3 mt-4 mt-md-0'>
            <h6 className='fw-bold'>Quick Links</h6>
            <a href='#home'>Home</a><br />
            <a href='#about'>About</a><br />
            <a href='#skills'>Skills</a><br />
            <a href='#project'>Project</a><br />
          </div>

          <div className='col-md-3 mt-4 mt-md-0'>
            <h6 className='fw-bold'>Connect</h6>
            <a href='https://github.com/SriramKannanV' target='_blank' rel='noopener noreferre'>GitHub</a><br />
            <a href='https://www.linkedin.com/in/sriram-kannan-v-11jan2005/' target='_blank' rel='noopener noreferre'>LinkedIn</a><br />
            <a href='mailto:sriramkannanv@gmail.com?subject=Reaching out from your Portfolio!'>Email</a><br />
          </div>
        </div>

        <div className='py-4'>
          <p className='mb-0 text-center fw-semibold fs-5'>© 2026 Sriram Kannan. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
