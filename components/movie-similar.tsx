import { API_URL } from '@/constants';
import { IMovieId } from './movie-video';
import styles from '../styles/movie-credits.module.css';
import MovieModal from './movie-modal';
import { useState } from 'react';
export interface ISimilarType {
  title: string;
  poster_path: string;
  id: number;
  vote_average: number;
}

const getSimilar = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/similar`);
  return res.json();
};

export default async function MovieSimilar({ id }: IMovieId) {
  const [selectedMovie, setSelectedMovie] = useState<ISimilarType | null>(null);
  const similar = await getSimilar(id);

  const onModal = (movie: ISimilarType) => {
    setSelectedMovie(movie);
  };
  const closeModal = () => {
    setSelectedMovie(null);
  };
  return (
    <div className={styles.container}>
      {similar.map((similar: ISimilarType) => {
        return (
          <div
            key={similar.id}
            onClick={() => onModal(similar)}
            className={styles.content}
          >
            {similar.poster_path ? (
              <img src={similar.poster_path} alt="cast-img" />
            ) : (
              <div className={styles.alterImg}>No image</div>
            )}
            <div className={styles.title}>{similar.title}</div>
          </div>
        );
      })}
      <MovieModal
        movie={selectedMovie}
        onClose={closeModal} // 모달 닫기 함수
      />
    </div>
  );
}
