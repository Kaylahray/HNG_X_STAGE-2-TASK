import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import MovieBox from "../../Componentss/movieBox";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=74937416aa6c1b0f1bb04c46d1be234e`
      );
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <LandingPage movies={movies} />
      
      <MovieBox movies={movies} />
    </>
  );
};

export default HomePage;
