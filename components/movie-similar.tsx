import { API_URL } from '@/constants';
import { IMovieId } from './movie-video';
import styles from '../styles/movie-credits.module.css';
interface ISimilarType {
  title: string;
  poster_path: string;
  id: number;
}

const getSimilar = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/similar`);
  return res.json();
};

export default async function MovieSimilar({ id }: IMovieId) {
  const similar = await getSimilar(id);
  return (
    <div className={styles.container}>
      {similar.map((similar: ISimilarType) => {
        return (
          <div key={similar.id}>
            {similar.poster_path ? (
              <img src={similar.poster_path} alt="cast-img" />
            ) : (
              <div className={styles.alterImg}>No image</div>
            )}

            <div className={styles.title}>{similar.title}</div>
          </div>
        );
      })}
    </div>
  );
}
