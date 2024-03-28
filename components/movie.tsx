'use client';
import styles from '../styles/movie.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface IMovieList {
  title: string;
  poster: string;
  id: string;
}

export default function Movies({ title, poster, id }: IMovieList) {
  const router = useRouter();
  const goDetail = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div className={styles.container}>
      <div key={id}>
        <img src={poster} alt="poster" onClick={goDetail} />
        <h4>
          <Link href={`/movie/${id}`}>{title}</Link>
        </h4>
      </div>
    </div>
  );
}
