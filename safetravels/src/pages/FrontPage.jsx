import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FrontPage.css";

import img1 from "../assets/hotel-image.png";
import img2 from "../assets/Layer 1.png";
import img3 from "../assets/sri_lanka_gebeco_web-05024-1.png";

import img4 from "../assets/img1.jpg";
import img5 from "../assets/img2.jpg";
import img6 from "../assets/img3.jpg";
import img7 from "../assets/img4.jpg";

import descImg from "../assets/sri.jpg"; // Add an appropriate image

function App() {
  return (
    <>
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Luxurious Hotel View" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxurious Stays</h5>
              <p>Experience premium accommodations and services.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Relaxing Poolside" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Relax and Unwind</h5>
              <p>Discover your perfect retreat with stunning amenities.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Beautiful Scenery" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Sri Lanka</h5>
              <p>Immerse yourself in the beauty and culture of the island.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <h2>Hotels</h2>

      {/* Cards Section */}
      <div className="container my-6">
        <div className="row g-1">
          {[img4, img5, img6, img7].map((img, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={img} className="card-img-top" alt="Card Example" />
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">Some quick example text to build on the card title.</p>
                  <a href="#" className="btn btn-primary">Go Somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>










      {/* Description Section */}
      <div className="description-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <h2>Leading School in City Since 1999</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sapien quis at tempus dolor sapien sed.</p>
            </div>
            <div className="col-md-6">
              <img src={descImg} alt="Classroom" className="img-fluid rounded" />  </div>
          </div>
          <div className="row feature-section mt-4">
            
             
           
           
            
          </div>
        </div>
      </div>
      <h2>Description</h2>
      
      <div class="travel-industry">
  <p>Sri Lanka’s travel and hotel industry is a vital part of its economy, known for its stunning beaches, rich cultural heritage, and lush landscapes. The country attracts millions of tourists annually, offering a blend of luxury resorts, eco-friendly lodges, and budget accommodations. With a growing focus on sustainable tourism, Sri Lanka continues to develop world-class hospitality services, making it a top destination for travelers seeking adventure, relaxation, and cultural experiences.</p>
</div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
