import React, { useState } from "react";
import "../components/header.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  interest: "",
  message: "",
  appointmentDate: "",
};

export const Header = (props) => {
    const navigate = useNavigate(); // Initialize navigation
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear form data
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
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            {/* IMPORTANT: hero-only grid (no bootstrap row/col) */}
            <div className="hero-grid">
              {/* LEFT */}
              <div className="hero-left">
                <h1>
                  {props.data ? props.data.title : "Premier Dental Clinic"}
                  <span>
                    <br />
                    in Khar West / Bandra
                  </span>
                </h1>

                <p>
                  {props.data
                    ? props.data.paragraph
                    : "From painless root canals to digital smile design, we combine specialist expertise with aesthetic artistry."}
                </p>

                <a
                  href="#contact"
                  className="btn btn-custom1 page-scroll"
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Design Your Smile
                </a>
              </div>

              {/* RIGHT */}
              <div className="hero-right">
                <div className="form-wrapper">
                  <h3 className="form-title">Book Your Appointment</h3>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group half-width">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </div>

                      <div className="form-group half-width">
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Mobile Number *"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Choose Your Treatment</option>
                        <option value="Teeth Cleaning and whitening ">
                          Teeth Cleaning and Whitening
                        </option>
                        <option value="Root canal treatment ">
                          Root Canal Treatment
                        </option>
                        <option value="Tooth fillings ">Tooth Fillings</option>
                        <option value="Smile designing ">Smile Designing</option>
                        <option value="Veneers">Veneers</option>
                        <option value="Implants">Implants</option>
                        <option value="Extraction">Extraction</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        rows="3"
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      Book Appointment
                    </button>
                  </form>
                </div>
              </div>
              {/* /RIGHT */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
