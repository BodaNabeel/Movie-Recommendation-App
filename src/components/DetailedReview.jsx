import React, { useEffect, useState } from "react";
import Rating from "./Rating";

function DetailedReview({ id }) {
  
  const [details, setDetails] = useState();
  const [credits, setCredits] = useState();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGQyNGYyNTFjNjIwOTJjYzM1MDEzMGE2Zjg4MWZlYyIsInN1YiI6IjY0MTA2MGU5YjQyMjQyMDA4YTJlOTY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_RlHw8PUG3OvYR0Muy_mo0BZ4K03XGtF_e15anapOw",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())

      .then((data) => setDetails(data))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => setCredits(data))
      .catch((err) => console.error(err));
  }, []);

 
  if (details) {
    return (
      <div className="w-[80%] mx-auto">
        <div className="flex md:flex-col">
          <div className="img mr-10 h-56 w-[100%]">
            <img
              src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
              alt=""
              className="h-[100%]"
            />
          </div>
          <div className="content">
            <h1 className="text-2xl font-bold">{details.original_title}</h1>
            <p className="mt-10">{details.overview}</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="genre flex">
            <p>Genre: </p>
            <div className="flex">
              {details.genres.map((el, index) => {
                return <p key={index} className="mx-[5px]">{`${el.name}`}</p>;
              })}
            </div>
          </div>
          <div className="date">
            <p>Released: {details.release_date}</p>
          </div>
          <div className="cast flex">
            <p>Cast: </p>
            <div className="flex w-[80%] flex-wrap ml-5">
              {credits?.cast?.map((element, index) => {
                return (
                  <div key={index} className="h-10 w-8 rounded-full mx-[5px] overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
                      alt=""
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rating flex mt-10 items-center">
            <p >Rating:</p>
            <Rating id={id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedReview;
