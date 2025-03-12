import React from "react";

export default function NetflixCarousel() {
  const movieImages = [
    "/images/nf-movie1.PNG",
    "/images/nf-movie2.PNG",
    "/images/nf-movie3.PNG",
    "/images/nf-movie4.PNG",
    "/images/nf-movie5.PNG",
    "/images/nf-movie6.PNG",
    "/images/nf-movie7.PNG",
    "/images/nf-movie8.PNG",
    "/images/nf-movie9.PNG",
    "/images/nf-movie10.PNG"
  ];

  return (
    <div className="carousel-container">
      <h4 className="text-white">Trending Now</h4>
      <div id="netflixCarousel" className="carousel slide mt-3">
        <div className="carousel-inner">
          {[0, 5].map((startIndex) => (
            <div key={startIndex} className={`carousel-item ${startIndex === 0 ? "active" : ""}`}>
              <div className="row row-cols-5 g-2">
                {movieImages.slice(startIndex, startIndex + 5).map((src, index) => (
                  <div key={index} className="col">
                    <img
                      src={src}
                      alt={`Movie ${startIndex + index + 1}`}
                      className="d-block w-100 rounded shadow"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      
        <button className="carousel-control-prev" type="button" data-bs-target="#netflixCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#netflixCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

       
        <div className="carousel-indicators">
          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#netflixCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
