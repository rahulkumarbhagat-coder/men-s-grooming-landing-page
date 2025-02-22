import React, { useEffect, useState } from 'react'
import './pricing.css'

const Pricing = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="pricing" className="pricing py-5">
  <div className="container text-center">
    <h2 className="pricing-title">Choose Your Plan</h2>
    <div className="row mt-4">
      {/** Basic Plan */}
      <div className="col-12 col-md-4 mb-4 mb-md-0">
        <div className={`pricing-card ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
          <div className="pricing-header">Basic</div>
          <div className="pricing-body">
            <h3>$19/month</h3>
            <p>• Essential grooming kit</p>
            <p>• Standard fragrance</p>
            <p>• 24/7 customer support</p>
            <button className="btn btn-warning w-100">Get Started</button>
          </div>
        </div>
      </div>

      {/** Premium Plan */}
      <div className="col-12 col-md-4 mb-4 mb-md-0">
        <div className={`pricing-card premium ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
          <div className="pricing-header">Premium</div>
          <div className="pricing-body">
            <h3>$49/month</h3>
            <p>• Luxury grooming kit</p>
            <p>• Signature fragrance</p>
            <p>• Priority customer support</p>
            <button className="btn btn-warning w-100">Get Started</button>
          </div>
        </div>
      </div>

      {/** Elite Plan */}
      <div className="col-12 col-md-4">
        <div className={`pricing-card ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>
          <div className="pricing-header">Elite</div>
          <div className="pricing-body">
            <h3>$99/month</h3>
            <p>• Ultimate grooming collection</p>
            <p>• Exclusive luxury scents</p>
            <p>• Personalized styling consultation</p>
            <button className="btn btn-warning w-100">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Pricing
