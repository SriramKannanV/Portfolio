
const Hero = () => {
  return (
    <div id='home'>
      <div className='container p-yaxis-10 text-center hero-section'>
        <h1 className='mb-0'>SRIRAM KANNAN</h1>
        <h3 className='fs-1 w-100 fw-bold mb-4'>Full Stack Developer</h3>
        <p className='mb-4'>Building responsive and scalable web applications using  modern technologies.</p>

        <div className='d-flex justify-content-center gap-4 flex-column flex-lg-row w-md-100 w-50 mx-auto'>
          <button onClick={() => document.getElementById("project").scrollIntoView({behavior: "smooth"})}>View Project</button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({behavior: "smooth"})}>Contact</button>
          <button><a href="/Sriram_Kannan_Resume.pdf" target='_blank' rel="noopener noreferrer" style={{color: "var(--text)"}}>Resume</a></button>
        </div>
      </div>

      <div className='hero-element'></div>
      <div className='hero-element green'></div>
    </div>
  )
}

export default Hero
