import '../Row.css';
import axios from "./axios";
import React, { useState, useEffect } from 'react';
const Row = ({ title, fetchUrl, isLargeRow = false }) => {

  const [movies, setMovies] = useState([]);

  const base_Url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Fetching data from:", fetchUrl);
        const res = await axios.get(fetchUrl);
        // console.log("API Response:", res.data);
        setMovies(res.data.results);
      } catch (error) {
        console.error("Fetch error in Row:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row" >
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;
          return imagePath ? (
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              key={movie.id}
              src={`${base_Url}${imagePath}`}
              alt={movie.name || movie.title || "Movie"}
            />
          ) : null; // Skip rendering if no image is available
        })}
      </div>

    </div>
  )
}

export default Row
