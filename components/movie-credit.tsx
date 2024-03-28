import { API_URL } from '@/constants';
import { IMovieId } from './movie-video';
import styles from '../styles/movie-credits.module.css';

interface ICreditType {
  cast_id: string;
  profile_path: string;
  name: string;
  character: string;
}

const getCredit = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/credits`);
  return res.json();
};

export default async function MovieCredit({ id }: IMovieId) {
  const credits = await getCredit(id);
  return (
    <div className={styles.container}>
      {credits.map((credit: ICreditType) => {
        return (
          <div key={credit.cast_id}>
            {credit.profile_path ? (
              <img src={credit.profile_path} alt="cast-img" />
            ) : (
              <div className={styles.alterImg}>No image</div>
            )}

            <div>{credit.name}</div>
            <div>{credit.character} 역</div>
          </div>
        );
      })}
    </div>
  );
}
