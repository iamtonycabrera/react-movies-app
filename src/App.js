import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesJson from './movies.json';

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


    </PageWrapper>
  );
}

export default App;
