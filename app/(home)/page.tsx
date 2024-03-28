// 'use client';
import { API_URL } from '@/constants';
import Movies from '@/components/movie';
import styles from '../../styles/home.module.css';
export interface IMovieType {
  id: string;
  title: string;
  overview: string;
  vote_average: string;
  poster_path: string;
}
const getMovies = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
export default async function Movie() {
  const movies: IMovieType[] = await getMovies();
  console.log(movies);
  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return (
          <Movies
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            id={movie.id}
          />
        );
      })}
    </div>
  );
}
