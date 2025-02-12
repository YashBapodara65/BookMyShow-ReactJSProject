import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

function SlickSliderCom() {

    const CustomPrevArrow = ({ onClick }) => (
        <button
          className="custom-arrow absolute top-[40%] start-[2%] z-10 cursor-pointer p-2 bg-white shadow-lg rounded-full custom-prev"
          onClick={onClick}
        >
          <FaChevronLeft />
        </button>
      );
      
      const CustomNextArrow = ({ onClick }) => (
        <button
          className="custom-arrow absolute top-[40%] end-[2%] p-2 rounded-full cursor-pointer shadow-lg bg-white custom-next"
          onClick={onClick}
        >
          <FaChevronRight />
        </button>
      );     

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 410,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem("movieList")) || []
  );

  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (prod_id) => {

    let other_data = movieList.filter((e)=>{
        return e.id != prod_id;
    })  

    // console.log(other_data);
    
    setMovieList(other_data);


    // console.log(prod_id);

    toast.success("Delete Successfully!");

  }

  useEffect(()=>{

    localStorage.setItem("movieList",JSON.stringify(movieList));

  },[movieList])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover={true}
        draggable
        icon={true}
        theme="light"
      />

    <div className="slider-container flex mt-15 justify-center items-center">
      {isLoading ? (
        <p>Loading movies...</p>
      ) : movieList.length > 0 ? (
        <Slider {...settings} className="w-[90%]">
          {movieList.map((e, i) => (
            <div key={e.id} className="group scale-[90%] relative">
              <div className="flex flex-col items-start justify-center">
              <div className="relative bg-red-500 w-fit rounded-lg overflow-hidden">
                <img src={e.url} className="w-full" alt="" />
                <div className="absolute bg-black w-full px-3 py-1.5 flex items-center gap-2 start-0 bottom-0">
                    {
                        e.votes > 100000
                        ?
                        <ThumbUpIcon className="text-green-500" fontSize="small" />
                        :
                        <StarIcon className="text-red-500" fontSize="small" />

                    }
                    {
                    e.votes > 100000
                    ?
                    ""
                    :
                    <p className="text-white text-xs tracking-[0.020rem]">{e.rating}/10</p>
                    }
                    <p className="text-white text-xs tracking-[0.020rem]">{(e.votes >= 1000) ? e.votes.slice(0,e.votes.length-3) +"K" : e.votes} Votes</p>
                </div>
                <div className="hidden group-hover:block group-hover:bg-gradient-to-b group-hover:from-[rgba(0,0,0,0.5)] group-hover:to-[rgba(0,0,0,0.5)] absolute w-full h-full top-0 start-0">
                    <div className="flex items-center gap-10 w-full h-full justify-center">
                        <Link to={`/editForm/${e.id}`} className="border-3 p-2 rounded-full cursor-pointer border-white">
                        <ModeEditIcon className="text-white" />
                        </Link>
                        <div onClick={()=>{handleDelete(e.id)}} className="border-3 p-2 rounded-full cursor-pointer border-white">
                        <DeleteForeverIcon className="text-white" />
                        </div>
                    </div>
              </div>
              </div>
              <h3 className="font-semibold mt-5 text-lg">{e.title}</h3>
              <p className="text-gray-600 text-sm font-semibold">UA{e.under_age}+</p>
              <p className="text-gray-600 text-sm font-semibold">{e.language}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No movies available</p>
      )}
    </div>
    </>
  );
}

export default SlickSliderCom;
