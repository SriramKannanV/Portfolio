import React from 'react'

const NavBar = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if(section){
      section.scrollIntoView({behavior: "smooth"});
    }

    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }

  return (
    <div className='nav-section align-content-center fixed-top'>
      <nav className="navbar navbar-expand-md mx-md-5 mx-2"> 
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bolder" href="#">S<span className='fs-5 fw-normal'>RIRAM</span> K<span className='fs-5 fw-normal'>ANNAN</span></a>
          <button className="navbar-toggler bg-light menu-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-1 gap-lg-5">
              <li className="nav-item" style={{cursor: "pointer"}}>
                <a className="nav-link fw-medium" onClick={() => handleScroll("home")}>Home</a>
              </li>
              <li className="nav-item" style={{cursor: "pointer"}}>
                <a className="nav-link fw-medium" onClick={() => handleScroll("about")}>About Me</a>
              </li>
              <li className="nav-item" style={{cursor: "pointer"}}>
                <a className="nav-link fw-medium" onClick={() => handleScroll("skills")}>Skills</a>
              </li>
              <li className="nav-item" style={{cursor: "pointer"}}>
                <a className="nav-link fw-medium" onClick={() => handleScroll("project")}>Project</a>
              </li>
              <li className="nav-item" style={{cursor: "pointer"}}>
                <a className="nav-link fw-medium" onClick={() => handleScroll("contact")}>Contact Me</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
