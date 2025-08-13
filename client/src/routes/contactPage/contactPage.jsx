import { useState } from "react";
import "./contactPage.scss";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contactPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Get in Touch</h1>
          <p>
            Ready to find your dream property? Have questions about our services? 
            We'd love to hear from you. Contact us today!
          </p>
          
          <div className="contactInfo">
            <div className="info">
              <img src="/pin.png" alt="" />
              <div>
                <span>Address</span>
                <p>123 Real Estate Street, Property City, PC 12345</p>
              </div>
            </div>
            <div className="info">
              <img src="/chat.png" alt="" />
              <div>
                <span>Phone</span>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info">
              <img src="/chat.png" alt="" />
              <div>
                <span>Email</span>
                <p>info@lamaestate.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="formContainer">
        <div className="wrapper">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;