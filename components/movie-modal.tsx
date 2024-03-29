import CloseBtn from '@/constants';
import styles from '../styles/movie-modal.module.css';
import { ISimilarType } from './movie-similar';
interface ISimilarModalType {
  isOpen: boolean;
  selectedMovie: ISimilarType | undefined;
  onClose: () => void;
}
export default async function MovieModal({
  isOpen,
  selectedMovie,
  onClose,
}: ISimilarModalType) {
  if (!isOpen || !selectedMovie) return null;
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {selectedMovie.title}
        <div onClick={onClose}>
          <CloseBtn />
        </div>
      </div>
    </div>
  );
}
