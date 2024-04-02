import CloseBtn from '@/constants';
import styles from '../styles/movie-modal.module.css';
import { ISimilarType } from './movie-similar';
import Image from 'next/image';
interface ISimilarModalType {
  movie: ISimilarType | null;
  onClose: () => void;
}
export default async function MovieModal({
  movie,
  onClose,
}: ISimilarModalType) {
  if (!movie) return;
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Image src={movie.poster_path} alt="poster" width={200} height={300} />
        <div>
          <div>{movie.title}</div>
        </div>
        <div onClick={onClose} data-movie={movie} className={styles.closeBtn}>
          <CloseBtn />
        </div>
      </div>
    </div>
  );
}
