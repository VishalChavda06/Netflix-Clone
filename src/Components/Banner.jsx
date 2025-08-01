import { useEffect, useState } from "react";
import "../CSS/Banner.css";
import axios from "./axios";
import request from "./request";
const Banner = () => {

  const [movie, setMovie] = useState([]);

  // useEffect to fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(request.fetchNetflixOriginals);
        const results = response.data?.results;

        if (Array.isArray(results) && results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length - 1)]);
        } else {
          console.warn("No results found", response.data);
        }
      } catch (error) {
        console.error("Fetch error in Banner:", error);
      }
    };

    fetchData();
  }, []); 

  // console.log(movie);


  // TrunCate 
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition: "center center",
    }}>

      <div className="banner_contents">
        <h1 className="banner_title">{
          movie?.title || movie?.name || movie?.original_name
        }</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />

    </header >
  )
}

export default Banner
