import { useState } from "react";
import React from "react";
import "../components/contact.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  interest: "",
  message: "",
  appointmentDate: "",
};

export const Contact = (props) => {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear form data
  const clearState = () => setFormData({ ...initialState });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        clearState();
        navigate("/thankyou"); // Navigate to Thank You page
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending appointment request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-5 col-md-offset-1 contact-info">
          <div className="section-title">
            <h2>Ready to Transform Your Smile?</h2>
            <p1 >Reach Out to Our Dental Team – We’re Here to Assist You</p1>
          </div>
          <div className="contact-item">
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>Contact Info:</h3>
            <p style={{ fontSize: "20px" }}>
              <i className="fa fa-map-marker" style={{ fontSize: "30px" }}></i>
              {props.data ? props.data.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <a href="tel:+917678045993">
              <p style={{ fontSize: "20px" }}>
                <i className="fa fa-phone" style={{ fontSize: "30px",color:'black' }}></i>
                {props.data ? props.data.phone : "loading"}
              </p>
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:contactsymphonydental@gmail.com">
              <p style={{ fontSize: "20px" }}>
                <i className="fa fa-envelope-o" style={{ fontSize: "30px",color:'black' }}></i>
                {props.data ? props.data.email : "loading"}
              </p>
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile Number"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <select
                  name="interest"
                  className="form-control"
             
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="">Choose Your Treatment</option>
                  <option value="Teeth Cleaning and whitening ">Teeth Cleaning and Whitening </option>
                  <option value="Root canal treatment ">Root Canal Treatment </option>
                  <option value="Tooth fillings ">Tooth Fillings </option>
                  <option value="Smile designing ">Smile Designing </option>
                  <option value="Veneers">Veneers </option>
                  <option value="Implants">Implants</option>
                  <option value="Extraction">Extraction</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label style={{color:"white"}}>Select Appointment Date:</label>
              <input
                type="date"
                name="appointmentDate"
                className="form-control"
               
                value={formData.appointmentDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Message"
         
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-custom btn-lg" disabled={loading}>
              {loading ? "Sending..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
