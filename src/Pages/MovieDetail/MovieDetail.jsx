import MovieLogo from "../../Componentss/MovieLogo";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  console.log(id);

  const convertDate = (date) => {
    if (!date) {
      return "";
    }
    const releaseDate = new Date(date).toISOString();
    return releaseDate;
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=74937416aa6c1b0f1bb04c46d1be234e`
        );
        setMovieDetail(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="detail">
      <div className="sideBar">
        <MovieLogo />
        <div className="menuList">
          <div className="menuItem">
            <GoHome /> <span>Home</span>
          </div>
          <div className="menuItem">Movies</div>
          <div className="menuItem">Tv Series</div>
          <div className="menuItem">Upcoming</div>
        </div>

        <div className="quiz">
          <p className="play">
            Play movie quizes and earn <br />
            free tickets
          </p>
          <p className="people"> 50k people are playing now</p>
          <button className="start">Start playing</button>
        </div>
      </div>

      <div className="detailBox">
        <div className="film_cont" key={movieDetail.id}>
          <div className="filmShow"></div>
          <div className="info_cont">
            <div className="info">
              <div className="info_pages">
                <div className="info_page_name" data-testid="movie-title">
                  {movieDetail && movieDetail.title} •{" "}
                  <span data-testid="movie-release-date">
                    {movieDetail && convertDate(movieDetail.release_date)}
                  </span>{" "}
                  • <span>PG-13 </span> •
                  <span data-testid="movie-runtime">
                    {movieDetail.runtime}m
                  </span>
                </div>
                <div className="action">
                  {movieDetail.genres &&
                    movieDetail.genres.map((genre) => (
                      <button key={genre.id} className="tag">
                        {genre.name}
                      </button>
                    ))}
                </div>
              </div>
              <div className="info_rating"></div>
            </div>
            <div className="info_text_box">
              <div className="info_text">
                <p className="p_info" data-testid="movie-overview">
                  {movieDetail && movieDetail.overview
                    ? movieDetail.overview.slice(0, 118) + "..."
                    : ""}
                </p>
                <div className="author">
                  Director : <span> Joseph Kosinski</span>
                </div>
                <div className="author">
                  Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig </span>
                </div>
                <div className="author">
                  Stars :
                  <span> Tom Cruise, Jennifer Connelly, Miles Teller</span>{" "}
                </div>
                <div className="nomination">
                  <div className="top_rated"> Top rated movie #65</div>

                  <span className="awards">
                    <select name="" id="">
                      <option value="volvo">Award 9 nomination</option>
                      <option value="saab">Saab</option>
                    </select>
                  </span>
                </div>
              </div>
              <div className="more_info">
                <div className="showtime"> See Showtimes</div>
                <div className="more_watch"> More watch options</div>
                <div className="more_img">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
