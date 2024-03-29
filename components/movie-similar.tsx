import { API_URL } from '@/constants';
import { IMovieId } from './movie-video';
import styles from '../styles/movie-credits.module.css';
import MovieModal from './movie-modal';
import { useState } from 'react';
export interface ISimilarType {
  title: string;
  poster_path: string;
  id: number;
}

const getSimilar = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/similar`);
  return res.json();
};

export default async function MovieSimilar({ id }: IMovieId) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<
    ISimilarType | undefined
  >();
  const similar = await getSimilar(id);

  const onModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const modalMovie = JSON.parse(
      e.currentTarget.getAttribute('data-movie') || '',
    );
    setIsOpenModal(!isOpenModal);
    setSelectedMovie(modalMovie);
  };
  return (
    <div className={styles.container}>
      {similar.map((similar: ISimilarType) => {
        return (
          <div
            key={similar.id}
            data-movie={JSON.stringify(similar)}
            onClick={onModal}
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
      <MovieModal isOpen={isOpenModal} selectedMovie={selectedMovie} />
    </div>
  );
}
