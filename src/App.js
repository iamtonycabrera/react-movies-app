import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesJson from './movies.json';
import Pagination from './pagination';

function App() {

  let movies = moviesJson

  return (
    <PageWrapper>

      {movies.map(movie =>
        <Movie
          movieImage={movie.movieImage}
          movieTitle={movie.movieTitle}
          movieRating={movie.movieRating}
          movieDuration={movie.movieDuration}
          movieRelease={movie.movieRelease}
          movieDirector={movie.movieDirector}
          movieActors={movie.movieActors}>
          {movie.movieDescription}
        </Movie>
      )}

      <Pagination
        actualPage={2}
        totalPages={5}
        onChange={(page) => {
          alert(page)
        }} />


    </PageWrapper>
  );
}

export default App;
