import React, { useEffect, useState } from 'react'
import './hero.css'
import heroImage from "../../assets/GQ_Grooming-Gurus_002.webp";
import "animate.css";

const Hero = () => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3
      }
    )
    
    const heroSection = document.getElementById('hero')
    if (heroSection) observer.observe(heroSection)
    
    return ()=> observer.disconnect()
  },[])
  return (
    <section
  id="hero"
  className="hero py-5 text-center d-flex align-items-center justify-content-center text-white position-relative"
>
  <div className={`container-fluid ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
    {/* Background Overlay */}
    <div className="hero-overlay"></div>

    <div className="container">
      <div className="row align-items-center justify-content-center">
        {/* Left Side - Text */}
        <div className="col-12 col-lg-5 text-center text-lg-start hero-text">
          <h1 className="display-4 fw-bold text-gold">Elevate Your Grooming Game</h1>
          <p className="lead text-light">Premium skincare and beard care for the modern man.</p>
          <button className="btn btn-primary mt-3 btn-glow">Shop Now</button>
        </div>

        {/* Right Side - Image */}
        <div className="col-12 col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
          <img src={heroImage} alt="Grooming Products" className="hero-img img-fluid w-100" />
        </div>
      </div>
    </div>
  </div>
</section>


  );
}

export default Hero
