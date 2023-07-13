import React, { useEffect, useState } from "react";

function Overview({ query }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (query) {
      setData([]);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${query}`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [query]);

  //   console.log(data);

  if (data === undefined) {
    return <h1>Loading.....</h1>;
  } else if (data?.results?.length > 0) {
    const imageUrl = "https://image.tmdb.org/t/p/original";
    return data.results.map((el,index) => (
      <div key={index} className="w-40 mx-5 my-2 cursor-pointer">
        <div className="h-60 overflow-hidden rounded-md">
          <img
            src={imageUrl + el.poster_path}
            alt={`poster of ${el.title}`}
            className="h-[100%]"
          />
        </div>
        <h1>{el.title}</h1>
      </div>
    ));
  } else {
    return "NO DATA FOUND :(";
  }
}

export default Overview;
