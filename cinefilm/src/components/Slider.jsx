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
        const apiKey = "0d60d57b167db9273c83d0f0ed3221fe";
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

        const shuffledImages = response.data.results.sort(() => Math.random() - 0.5);

        setSliderImages(shuffledImages.slice(0, maxImagesToShow));
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
    <div className="slider mx-auto max-w-screen-xl">
      <br />
      <br />
      <br />
      <div className="">
        <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
          {sliderImages.map((movie, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`Movie ${index + 1}`}
                style={{
                  maxHeight: "52vh",
                  maxWidth: "100%",
                  objectFit: "cover",
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
