import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
      <section className='about' id='about'>
          <div className="container">
              <div className="banner">
                  <div className="top">
                      <h1 className="heading">ABOUT US</h1>
                      <p>The only thing we're serious about is food.</p>
                  </div>
                  <p className="mid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, fuga sapiente. Expedita dicta, consequuntur asperiores placeat delectus culpa ratione repudiandae enim a soluta est ut sed, aperiam quasi voluptatum nihil laborum optio magni dolore odit alias. Corrupti eum commodi debitis error voluptatem, autem, praesentium quos alias cumque, suscipit in a?
                  </p>
                  <Link to={"/"}>Explore Menu{" "}<span>
                  <HiOutlineArrowNarrowRight/>
                  </span></Link>
              </div>
              <div className="banner">
                  <img src="/about.png" alt="about" />
              </div>
          </div>
    </section>
  )
}

export default About