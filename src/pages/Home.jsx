import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import MovieList from "../components/MovieList";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getPopularMovies } from "../redux/actions/movieActions";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getPopularMovies());
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, dispatch, navigate]);

  console.log(movies);
  console.log(isLoggedIn);

  return (
    <>
      <Navigation />
      {movies && isLoggedIn && (
        <>
          <Hero data={movies} />
          {movies && (
            <section className="container my-5">
              <div className="d-flex justify-content-between mb-4">
                <h2>Popular Movies</h2>
                <button className="btn btn-light rounded-pill color-primary d-flex align-items-center gap-2">
                  <span className="fw-semibold">See All Movie </span>
                  <ArrowRightIcon className="icon color-primary" />
                </button>
              </div>
              <MovieList data={movies} />
            </section>
          )}
        </>
      )}
    </>
  );
}

export default Home;
