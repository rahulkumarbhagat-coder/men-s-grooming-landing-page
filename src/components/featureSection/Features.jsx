import React, { useEffect, useState } from 'react'
import 'animate.css'
import './feature.css'

const Feature = () => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      const featureSection = document.getElementById("features");
      if (featureSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])


  return (
    <section id="features" className="features py-5">
  <div className="container text-center">
    <h2 className="feature-title">Why Choose Us?</h2>
    <div className="row mt-4">
      {/** Feature 1 */}
      <div className="col-12 col-md-4 mb-4 mb-md-0">
        <div className={`feature-card ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
          <i className="fas fa-star feature-icon"></i>
          <h3 className="feature-heading">Luxury Formulations</h3>
          <p className="feature-text">Crafted with premium ingredients for the best results.</p>
        </div>
      </div>
      {/** Feature 2 */}
      <div className="col-12 col-md-4 mb-4 mb-md-0">
        <div className={`feature-card ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
          <i className="fas fa-clock feature-icon"></i>
          <h3 className="feature-heading">Long-Lasting Impact</h3>
          <p className="feature-text">Stay fresh and stylish all day with long-lasting effects.</p>
        </div>
      </div>
      {/** Feature 3 */}
      <div className="col-12 col-md-4">
        <div className={`feature-card ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>
          <i className="fas fa-leaf feature-icon"></i>
          <h3 className="feature-heading">Eco-Friendly & Safe</h3>
          <p className="feature-text">Sustainable, cruelty-free, and skin-friendly ingredients.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Feature
