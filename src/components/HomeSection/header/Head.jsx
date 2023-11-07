import React from "react"
import logo from "../header/image/logo1.png"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <img src={logo} alt="" width={120}></img>

          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
