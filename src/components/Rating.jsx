import React, { useEffect, useRef, useState } from "react";

function Rating({ id }) {
  const [isRated, setIsRated] = useState(localStorage.getItem(`${id}`));
  const [getRating, setGetRating] = useState(localStorage.getItem(`${id}`));

  const ratingRef = useRef();
  const buttonRef = useRef();

  const toggleRating = () => {
    ratingRef.current.classList.toggle("hidden");
    buttonRef.current.classList.toggle("hidden");
  };

  const addRating = (value) => {
    localStorage.setItem(`${id}`, `${value}`);
    setIsRated(true);
    setGetRating(value);
  };

  const deleteRating = () => {
    localStorage.removeItem(`${id}`);
    setIsRated(false);
    setGetRating(null);
  };

  useEffect(() => {
    setIsRated(localStorage.getItem(`${id}`));
    setGetRating(localStorage.getItem(`${id}`));
  }, [id]);

  if (!isRated) {
    return (
      <>
        <button
          ref={buttonRef}
          onClick={() => toggleRating()}
          className="ml-5 bg-slate-400 text-white px-2 py-[2px] rounded-lg"
        >
          Add Rating
        </button>
        <div
          className="flex gap-3 hidden ml-5 hover:cursor-pointer"
          ref={ratingRef}
        >
          <p
            onClick={() => addRating(1)}
            className="bg-red-300 py-1 px-3 rounded-full"
          >
            1
          </p>
          <p
            onClick={() => addRating(2)}
            className="bg-red-300 py-1 px-3 rounded-full"
          >
            2
          </p>
          <p
            onClick={() => addRating(3)}
            className="bg-red-300 py-1 px-3 rounded-full"
          >
            3
          </p>
          <p
            onClick={() => addRating(4)}
            className="bg-red-300 py-1 px-3 rounded-full"
          >
            4
          </p>
          <p
            onClick={() => addRating(5)}
            className="bg-red-300 py-1 px-3 rounded-full"
          >
            5
          </p>
        </div>
      </>
    );
  } else if (isRated) {
    return (
      <div className="flex gap-4 ml-4">
        <p>{`${getRating}/5`}</p>
        <button
          onClick={() => deleteRating()}
          className="ml-5 bg-slate-400 text-white px-2 py-[2px] rounded-lg"
        >
          clear rating
        </button>
      </div>
    );
  }
}

export default Rating;
