/* eslint-disable react/prop-types */
import MovieLogo from "../../Componentss/MovieLogo";
import "./LandingPage.css";
import { Carousel } from "react-responsive-carousel";

const LandingPage = ({ movies }) => {
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={true}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie) => {
            return (
              <>
                <div className="posterImg" key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt="poster"
                  />
                </div>

                <div className="poster_overlay">
                  <div className="title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div></div>
                  <div className="description">
                    {movie ? movie.overview.slice(0, 118) + "..." : ""}
                  </div>
                  <div></div>
                </div>
              </>
            );
          })}
        </Carousel>
        <header className="heading">
          <nav className="nav container">
            <MovieLogo />
            <div className="search">
              <input
                className="search-input"
                type="text"
                placeholder="what do you want to watch?"
              />
            </div>
            <div className="sign">
              <p>Sign imn</p>
            </div>
          </nav>
        </header>
      </div>
      ;
    </>
  );
};

export default LandingPage;
