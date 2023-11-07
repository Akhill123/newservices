import React from "react"
import Heading from "../../HomeSection/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO OUR SERVICES' title='Get Best Expertise Services' />
            <p>Search And Explore All Kind Of Services All Over Bharat</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW ALL SERVICES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
