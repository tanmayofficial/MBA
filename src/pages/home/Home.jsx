import ImageCarousal from "../../components/imageCarousal/ImageCarousal";
import img1 from "../../assets/1.avif";
import img2 from "../../assets/2.avif";
import img3 from "../../assets/3.avif";
import img4 from "../../assets/4.avif";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import { getAllMovies } from "../../api/movies";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [allmovies, setAllmovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          setMovies(data);
          setAllmovies(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const filterMoviesBySearch = searchText => {
    const filteredMovies = allmovies.filter(movie => {
      return movie.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setMovies(filteredMovies);
  };

  const handleGotoDetailPage = movieId => {
    navigate(`/movie-detail/${movieId}`);
  };

  return (
    <div>
      <Header showSearch={true} filterMoviesBySearch={filterMoviesBySearch} />
      <ImageCarousal images={[img1, img2, img3, img4]} />
      <div className="rows">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row_posters">
            {movies.map((movie) => {
              return (
                <div className="col" onClick={() => {
                  handleGotoDetailPage(movie._id);
                }}>
                  <h5 className="text-center mb-3">{movie.name}</h5>
                  <img
                    src={movie.posterUrl}
                    alt={movie.name}
                    className="row_poster"
                    key={movie.id}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
