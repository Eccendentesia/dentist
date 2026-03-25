import React, { useState } from "react";
import "../css/bookslot.css";

export const BookSlot = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
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
    console.log(formData);
    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="book-main">
      <div className="container">
        <div className="book-card">

          <h2>Book an Appointment</h2>
          <p>Schedule your visit with our dental experts</p>

          <form onSubmit={handleSubmit}>

            <div className="row">
              <div className="col-md-6">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
              </div>

              <div className="col-md-6">
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              </div>

              <div className="col-md-6">
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              </div>

              <div className="col-md-6">
                <input type="date" name="date" onChange={handleChange} required />
              </div>

              <div className="col-md-6">
                <select name="time" onChange={handleChange} required>
                  <option value="">Select Time</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>

              <div className="col-md-6">
                <select name="service" onChange={handleChange} required>
                  <option value="">Select Service</option>
                  <option>Teeth Cleaning</option>
                  <option>Root Canal</option>
                  <option>Dental Implant</option>
                  <option>Whitening</option>
                </select>
              </div>

              <div className="col-12">
                <textarea name="message" placeholder="Additional Message (Optional)" rows="4" onChange={handleChange}></textarea>
              </div>

              <div className="col-12 text-center">
                <button type="submit">Book Appointment</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};