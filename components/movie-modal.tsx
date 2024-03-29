import styles from '../styles/movie-modal.module.css';
import { ISimilarType } from './movie-similar';
interface ISimilarModalType {
  isOpen: boolean;
  selectedMovie: ISimilarType | undefined;
}
export default async function MovieModal({
  isOpen,
  selectedMovie,
}: ISimilarModalType) {
  if (!isOpen || !selectedMovie) return null;
  const onClose = () => {};
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modal}>
        {selectedMovie.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
          width="25px"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  );
}
