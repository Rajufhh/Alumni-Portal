import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import homepageImage from "../assets/homepage.png";

function HomePage() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Stay <span className="highlight">connected</span>, <br />
            Stay <span className="highlight">inspired</span> <br />
            <div className="tagline-container">
              <h1 className="tagline">
                Your alumni network <span className="highlight">awaits</span>
              </h1>
            </div>
          </h1>
          <div className="hero-buttons">
            <Link to='/login'>
            <button className="login-btn">Login</button>
            </Link>
            <Link to='/signup'>
            <button className="signup-btn">Sign up</button>
            </Link>
          </div>
          <div className="stats-section">
            <div className="stat-box">
              <h3><span className="highlight">1000+</span> Alumni Connected</h3>
            </div>
            <div className="stat-box">
              <h3><span className="highlight">500+</span> Job Postings</h3>
            </div>
            <div className="stat-box">
              <h3><span className="highlight">100+</span> Meetups</h3>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={homepageImage} alt="Hero" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <h4>John Doe</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="testimonial-card">
            <h4>Jane Smith</h4>
            <p>Vestibulum tincidunt eros ut orci aliquam, non tincidunt nulla convallis.</p>
          </div>
          <div className="testimonial-card">
            <h4>Robert Johnson</h4>
            <p>Aliquam erat volutpat. Donec bibendum malesuada ipsum.</p>
          </div>
          <div className="testimonial-card">
            <h4>Emily Davis</h4>
            <p>Curabitur convallis quam at justo sodales, non fringilla lorem consequat.</p>
          </div>
          <div className="testimonial-card">
            <h4>Michael Brown</h4>
            <p>Sed eget augue sed justo dignissim interdum. Nunc nec mi metus.</p>
          </div>
          <div className="testimonial-card">
            <h4>Sarah Wilson</h4>
            <p>Fusce at risus ac arcu aliquam consectetur non at erat.</p>
          </div>
          <div className="testimonial-card">
            <h4>Emory Howard</h4>
            <p>Curabitur convallis quam at justo sodales, non fringilla lorem consequat.</p>
          </div>
          <div className="testimonial-card">
            <h4>Peter Green</h4>
            <p>Sed eget augue sed justo dignissim interdum. Nunc nec mi metus.</p>
          </div>
          <div className="testimonial-card">
            <h4>Alison Brooke</h4>
            <p>Fusce at risus ac arcu aliquam consectetur non at erat.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Features</h2>
        <div className="features-container">
          <Link to="/login" className="feature-card">
            <span className="icon">📂</span>
            <p>Alumni Directory</p>
          </Link>
          <Link to="/login" className="feature-card">
            <span className="icon">📌</span>
            <p>Job Postings Board</p>
          </Link>
          <Link to="/login" className="feature-card">
            <span className="icon">🎉</span>
            <p>Events & Reunions</p>
          </Link>
        </div>
        <div className="mentorship-box">
          <Link to="/login">
          <span className="icon">💡</span>
          <p>Mentorship Guidance from Fellow Alumni</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;