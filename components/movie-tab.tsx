'use client';
import { Suspense, useState } from 'react';
import MovieVideo, { IMovieId } from './movie-video';
import styles from '../styles/movie-tab.module.css';
import MovieCredit from './movie-credit';
import MovieProvider from './movie-provider';
import MovieSimilar from './movie-similar';

export default function MovieTab({ id }: IMovieId) {
  const [tab, setTab] = useState(0);

  const onChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const dataID = parseInt(e.currentTarget.dataset.id);
    setTab(dataID);
  };

  return (
    <div>
      <div className={styles.tab}>
        <li data-id="0" onClick={onChange}>
          출연자
        </li>
        <li data-id="1" onClick={onChange}>
          예고편
        </li>
        <li data-id="2" onClick={onChange}>
          추천 영화
        </li>
        <li data-id="3" onClick={onChange}>
          배급
        </li>
      </div>
      <Suspense fallback="Loading...">
        {tab === 0 && <MovieCredit key={0} id={id} />}
        {tab === 1 && <MovieVideo key={1} id={id} />}
        {tab === 2 && <MovieSimilar key={2} id={id} />}
        {tab === 3 && <MovieProvider key={3} id={id} />}
      </Suspense>
    </div>
  );
}
