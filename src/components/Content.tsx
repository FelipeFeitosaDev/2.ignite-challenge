import { MovieCard } from './MovieCard';
import '../styles/content.scss';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Key } from 'react';

export function Content(props: { selectedGenre: { title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }; movies: any[]; }) {
  // Complete aqui
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map((movie: { imdbID: Key | null | undefined; Title: string; Poster: string; Runtime: string; Ratings: { Value: string; }[]; }) => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}