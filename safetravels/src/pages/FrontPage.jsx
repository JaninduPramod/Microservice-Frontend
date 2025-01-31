import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FrontPage.css";

import img1 from "../assets/img5.png";
import img2 from "../assets/img6.png";
import img3 from "../assets/img7.png";
import img4 from "../assets/img1.png";
import img5 from "../assets/img2.png";
import img6 from "../assets/img3.png";
import img7 from "../assets/img4.png";
import descImg from "../assets/sri.jpg";

export default function FrontPage() {
  const navigate = useNavigate();
  const images = [img4, img5, img6, img7];

  const handleCardClick = (image, index) => {
    navigate(`/booking?image=${encodeURIComponent(image)}&hotel=${index + 1}`);
  };
  

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
          {[img1, img2, img3].map((img, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Slide {index + 1} Title</h5>
                <p>Slide {index + 1} description.</p>
              </div>
            </div>
          ))}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="" aria-hidden="true"></span>
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
          {images.map((img, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">Hotel {index + 1}</h5>
                  <p className="card-text">Book a luxurious stay at Hotel {index + 1}.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleCardClick(img, index)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {images.map((img, index) => (
  <div className="col-md-3" key={index}>
    <div className="card">
      <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
      <div className="card-body">
        <h5 className="card-title">Hotel {index + 1}</h5>
        <p className="card-text">Book a luxurious stay at Hotel {index + 1}.</p>
        <button 
          className="btn btn-primary"
          onClick={() => handleCardClick(img, index)} // Passing index
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
))} */}


      {/* Description Section */}
      <div className="description-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <h3>Wildlife & Nature</h3>
              <p>Sri Lanka is home to incredible biodiversity, with national parks like Yala, Udawalawe, and Minneriya offering unforgettable safaris featuring elephants, leopards, and exotic birds.</p>

             
              <p>Explore the UNESCO-listed sites of Sigiriya, the Dambulla Cave Temple, and the sacred city of Kandy, where the famous Temple of the Tooth Relic is located.</p>
            </div>


            <div className="col-md-6">
              <img src={descImg} alt="Scenic View" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      <h2>Description</h2>
      <div className="travel-industry">
        <p>
          Sri Lanka’s travel and hotel industry is known for its stunning beaches, rich cultural heritage, and lush landscapes. Offering luxury resorts, eco-friendly lodges, and budget accommodations, Sri Lanka remains a top destination for travelers seeking adventure and relaxation.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </>
  );
}
