import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../HomeSection/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading  title='OUR TOP SERVICES' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h4 style={{fontFamily: "verdana", fontWeight: "bold", marginTop: "10px"}}>{val.courseName}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
