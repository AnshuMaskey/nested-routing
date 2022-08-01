import React from 'react'
import {Link,Outlet}from 'react-router-dom';
const About = () => {
  return (
    <div>
    <Outlet/>
        <h1>About</h1>
        <Link to="/aboutdegree" className='btn btn-success'>About my Degree</Link>
        <Link to="/aboutme" className='btn btn-primary'>Amout Me</Link>

    </div>

  )
}

export default About