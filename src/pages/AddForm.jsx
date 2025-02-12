import React, { useEffect, useState } from "react";
import {v4} from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import NavbarCom from "../components/NavbarCom";

function AddForm() {
  const [isLoading, setIsLoading] = useState(true);

  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem("movieList")) || []
  );

  useEffect(() => {
    if (movieList.length > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1-second delay

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [movieList]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id : v4(),
    url: "",
    title: "",
    type: "",
    language : "",
    under_age : "",
    rating : "",
    votes : ""
  });

  const [valid, setValid] = useState({
    url: false,
    title: false,
    type: false,
    language : false,
    under_age : false,
    rating : false,
    votes : false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validUrl = formData.url == "";
    let validTitle = formData.title == "";
    let validType = formData.type == "";
    let validLanguage = formData.language == "";
    let validUnderAge = (formData.under_age == "" || isNaN(formData.under_age));
    let validRating = (formData.rating == "" || isNaN(formData.rating) || formData.rating < 1 || formData.rating > 10);
    let validVotes = (formData.votes == "" || isNaN(formData.votes));

    if (!validUrl && !validTitle && !validType && !validLanguage && !validUnderAge && !validRating && !validVotes) {
      setMovieList([...movieList, formData]);
      localStorage.setItem(
        "movieList",
        JSON.stringify([...movieList, formData])
      );

    toast.success("Success!");

      setFormData({
        id: v4(),
        url: "",
        title: "",
        type: "",
        language : "",
        under_age : "",
        rating : "",
        votes : ""
      });

      setValid({
        url: false,
        title: false,
        type: false,
        language : false,
        under_age : false,
        rating : false,
        votes : false
      });
      navigate("/");
    } else {
      setValid({
        url: validUrl,
        title: validTitle,
        type: validType,
        language : validLanguage,
        under_age : validUnderAge,
        rating : validRating,
        votes : validVotes
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover={true}
        draggable
        icon={true}
        theme="light"
      />

      <NavbarCom val={"addform"} />

      <div className="h-screen flex flex-col justify-center items-center">
        <Box
          component="form"
          //   sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex border-2 w-[90%] md:w-fit border-gray-300 flex-col shadow-2xl p-10 md:p-15 rounded-lg items-center justify-center gap-8"
        >
          <h1 className="text-center mb-8 text-3xl font-semibold">Add Movie</h1>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col col-span-1 md:col-span-2">
            <TextField
              id="outlined-number"
              label="Image URL *"
              type="text"
              placeholder="Movie Image"
              value={formData.url}
              name="url"
              className="w-full"
              onChange={handleChange}
              size="small"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.url == false ? "" : "Please our fillup image url *"}
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <TextField
              id="outlined-number"
              label="Title *"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Movie Name"
              className="w-full"
              size="small"
              name="title"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.title == false ? "" : "Please enter the movie title *"}
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <TextField
              id="outlined-number"
              label="Type *"
              value={formData.type}
              placeholder="Ex. Action, Drama etc"
              type="text"
              onChange={handleChange}
              name="type"
              className="w-full"
              size="small"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.type == false ? "" : "Please enter the movie type *"}
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <TextField
              id="outlined-number"
              label="Language *"
              value={formData.language}
              placeholder="Ex. Gujarati, Hindi, English"
              type="text"
              onChange={handleChange}
              name="language"
              className="w-full"
              size="small"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.language == false ? "" : "Please enter the movie language *"}
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <TextField
              id="outlined-number"
              label="Under Age *"
              value={formData.under_age}
              placeholder="Under Age"
              type="text"
              onChange={handleChange}
              name="under_age"
              className="w-full"
              size="small"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.under_age == false ? "" : "Please enter the movie of under age *"}
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <TextField
              id="outlined-number"
              label="Rating *"
              value={formData.rating}
              placeholder="Between 1 to 10"
              type="text"
              onChange={handleChange}
              name="rating"
              className="w-full"
              size="small"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.rating == false ? "" : "Please enter the movie rating between 1 to 10 *"}
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <TextField
              id="outlined-number"
              label="Votes *"
              value={formData.votes}
              placeholder="Ex. 1278"
              type="text"
              onChange={handleChange}
              name="votes"
              className="w-full"
              size="small"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="px-2 text-red-400 font-semibold">
              {valid.votes == false ? "" : "Please enter the votes *"}
            </span>
          </div>
          </div>
          <button className="bg-blue-600 text-white text-lg font-semibold py-1 w-full rounded-lg cursor-pointer">
            Add Movie
          </button>
        </Box>
      </div>
    </>
  );
}

export default AddForm;