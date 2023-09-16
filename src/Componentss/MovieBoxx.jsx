/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import cherry from ".././assests/cherry.png";
import imdb from ".././assests/imdb.png";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
const MovieBoxx = ({ movies }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const showMore = () => setVisible((prev) => prev + 12);
  return (
    <>
      <div className="featured">
        Featured Movie
        <button onClick={showMore}>
          <span>See More</span>
        </button>
      </div>
      <div className="movieBox">
        {movies.slice(0, visible).map((movie) => {
          return (
            <>
              {isLoading ? (
                <div className="chi">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                  </SkeletonTheme>
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={100} duration={2} />
                  </SkeletonTheme>
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={50} duration={2} />
                  </SkeletonTheme>
                </div>
              ) : (
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                  key={movie.original_title}
                >
                  <div className="card" data-testid="movie-card">
                    <img
                      data-testid="movie-poster"
                      className="cards__img"
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.poster_path
                      }`}
                      alt="poster"
                    />

                    <div
                      className="release_date"
                      data-testid="movie-release-date"
                    >
                      {movie && movie.release_date}
                    </div>
                    <div className="card__title" data-testid="movie-title">
                      {movie ? movie.original_title.slice(0, 100) + ".." : " "}
                    </div>

                    <div className="card__runtime">
                      <div className="one">
                        <img src={imdb} alt="imdb" className="imdb" />
                        <span className="card__rating">30/100</span>
                      </div>

                      <div className="two">
                        <img src={cherry} alt="cherry" />
                        <span>96%</span>
                      </div>

                      <div className="three">
                        <p>Action</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default MovieBoxx;






















