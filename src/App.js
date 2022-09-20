import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';

function App() {

  let movies = [
    {
      movieImage: "images/uploads/mv1.jpg",
      movieTitle: "Oblivion - 2012",
      movieRating: "8.1",
      movieDuration: "2h21’",
      movieRelease: "1 May 2015",
      movieDirector: "Joss Whedon",
      movieActors: "Robert Downey Jr., Chris Evans, Chris Hemsworth"
    },
    {
      movieImage: "images/uploads/mv2.jpg",
      movieTitle: "Into the Wild - 2014",
      movieRating: "7.8",
      movieDuration: "2h21’",
      movieRelease: "1 May 2015",
      movieDirector: "Anthony Russo, Joe Russo",
      movieActors: "Chris Evans, Samuel L. Jackson, Scarlett Johansson"
    }
  ]

  return (
    <PageWrapper>
      <Movie
        movieImage="images/uploads/mv1.jpg"
        movieTitle="Oblivion - 2012"
        movieRating="8.1"
        movieDuration="2h21’"
        movieRelease="1 May 2015"
        movieDirector="Joss Whedon"
        movieActors="Robert Downey Jr., Chris Evans, Chris Hemsworth">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      </Movie>
    </PageWrapper>
  );
}

export default App;
