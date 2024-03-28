// 'use client';
import { IMovieType } from '@/app/(movie)/movie/[id]/page';
import styles from '../styles/movie-info.module.css';

export default async function MovieInfo({
  id,
  poster_path,
  title,
  vote_average,
  overview,
}: IMovieType) {
  return (
    <div className={styles.container}>
      <img src={poster_path} alt="poster" />
      <div className={styles.infoBox}>
        <h1>{title}</h1>
        <h4>⭐{vote_average.toFixed(1)}</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
}
