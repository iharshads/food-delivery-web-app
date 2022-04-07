import React from 'react'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg shadow-sm  mb-5 bg-body ">
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="#">XOMATO</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="#"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></a>
        </li>
      </ul>
    </div>
  </div>
</nav>  )
}

export default Navbar