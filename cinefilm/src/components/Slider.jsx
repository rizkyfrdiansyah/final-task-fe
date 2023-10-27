import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";

const Slider = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/movie/");
  const [sliderImages, setSliderImages] = useState([]);
  const maxImagesToShow = 3;

  useEffect(() => {
    async function fetchSliderImages() {
      try {
        const apiKey = "affdd15286d19dac04688aa26ecee7ac";
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

        const shuffledImages = response.data.results.sort(() => Math.random() - 0.5);
        const imagesToDisplay = shuffledImages.slice(0, maxImagesToShow);

        setSliderImages(imagesToDisplay);
      } catch (error) {
        console.error("Error fetching slider images: ", error);
      }
    }

    if (!isDetailPage) {
      fetchSliderImages();
    } else {
      setSliderImages([]);
    }
  }, [isDetailPage]);

  return (
    <div className="slider w-full mt-16">
      <div>
        <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
          {sliderImages.map((movie, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`Movie ${index + 1}`}
                style={{
                  maxHeight: "60vh",
                  maxWidth: "100%",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
