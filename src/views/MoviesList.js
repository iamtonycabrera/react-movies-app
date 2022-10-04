import './App.css';
import Movie from './views/Movie';
import PageWrapper from './views/PageWrapper';
import Pagination from './views/pagination';
import { useEffect, useState } from 'react';

function MoviesList() {

  const [actualPage, setActualPage] = useState(1)
  const [movies, setMovies] = useState([])

  const TOTAL_PER_PAGE = 4;

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';

    let result = await fetch(url, {
      "method": 'GET',
      "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      }
    });
    let json = await result.json();
    console.log(result);
    setMovies(json);

  }

  const getTotalPages = () => Math.ceil(movies.length / TOTAL_PER_PAGE);


  let moviesPerPage = movies.slice(
    (actualPage - 1) * TOTAL_PER_PAGE,
    actualPage * TOTAL_PER_PAGE
  )

  return (
    <PageWrapper>

      {moviesPerPage.map(movies =>
        <Movie
        titulo={movies.titulo}
        calificacion={movies.calificacion}
        director={movies.director}
          actores={movies.actores}
          fecha={movies.fecha}
          duracion={movies.duracion}
          img={movies.img}
          descripcion={movies.descripcion}
          >
          
        </Movie>
      )}

      <Pagination
        somePage={actualPage}
        totalPages={getTotalPages()}
        onChange={(actualPage) => {
          setActualPage(actualPage)
        }} />


    </PageWrapper>
  );
}

export default MoviesList;
