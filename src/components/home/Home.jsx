import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import Hero from "./Home Heading/Hero"
import Hprice from "./Hprice"
import Testimonal from "../home/Testimonials/Testimonal"
import OnlineCourses from "../All Services/OnlineCourses"
import Registration from "./Registration"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <OnlineCourses/>
      <Testimonal />
      <Registration/>
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
