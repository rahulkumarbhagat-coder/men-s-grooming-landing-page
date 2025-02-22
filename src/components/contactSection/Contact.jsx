import { useState } from "react";
import "animate.css"; // Animations
import "./contact.css"; // Custom styles

const Contact =() => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email.";
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="contact py-5">
  <div className="container">
    <h2 className="contact-title text-center">Get In Touch</h2>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <form className="contact-form p-4" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-group mb-3">
            <label>Message</label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              placeholder="Your message..."
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-warning w-100">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;
