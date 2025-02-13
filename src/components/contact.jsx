import { useState } from "react";
import React from "react";
import "../components/contact.css";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  interest: "",
  message: "",
  appointmentDate: "",
};

export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setFormData({ ...initialState });

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
        alert("Appointment request sent successfully!");
        clearState();
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
    <div>
      <div id="contact">
        <div className="container"> 
          <div className="col-md-5 col-md-offset-1 contact-info">
            <div className="section-title">
              <h2>Book Appointment</h2>
              <p1 style={{ color: "white", fontWeight: "bold" }}>
                Ready to Transform Your Smile?
              </p1>
              <h5>Reach Out to Our Dental Team – We’re Here to Assist You</h5>
            </div>
            <div className="contact-item">
              <h3 style={{ fontWeight: "bold", fontSize: "32px" }}>Contact Info:</h3>
              <p style={{ fontSize: "22px" }}>
                <i style={{ fontSize: "30px" }} className="fa fa-map-marker"></i>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <a href="tel:+919876543210">
                <p style={{ fontSize: "22px", color: "white" }}>
                  <i style={{ fontSize: "30px" }} className="fa fa-phone"></i>
                  {props.data ? props.data.phone : "loading"}
                </p>
              </a>
            </div>
            <div className="contact-item">
              <a href="mailto:contactsymphonydental@gmail.com" style={{ color: "white" }}>
                <p style={{ fontSize: "22px" }}>
                  <i style={{ fontSize: "30px" }} className="fa fa-envelope-o"></i>
                  {props.data ? props.data.email : "loading"}
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        name="interest"
                        className="form-control"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select Your Interest</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                        <option value="Cavity Filling">Cavity Filling</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Braces Consultation">Braces Consultation</option>
                        <option value="Root Canal">Root Canal</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date Selection Field */}
                <div className="form-group">
                  <label>Select Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    className="form-control"
                    required
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
                    required
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
      </div>
    </div>
  );
};
