'use client';
import { Suspense, useState } from 'react';
import MovieVideo, { IMovieId } from './movie-video';
import styles from '../styles/movie-tab.module.css';
import MovieCredit from './movie-credit';
import MovieProvider from './movie-provider';
import MovieSimilar from './movie-similar';

export default function MovieTab({ id }: IMovieId) {
  const [tab, setTab] = useState('0');

  const onChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const dataID = e.currentTarget.dataset.id;
    console.log(typeof dataID);
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
      {tab === '0' && (
        <Suspense fallback="Loading...">
          <MovieCredit id={id} />
        </Suspense>
      )}
      {tab === '1' && (
        <div>
          <Suspense fallback="Loading...">
            <MovieVideo id={id} />
          </Suspense>
        </div>
      )}
      {tab === '2' && (
        <div>
          <Suspense fallback="Loading...">
            <MovieSimilar id={id} />
          </Suspense>
        </div>
      )}
      {tab === '3' && (
        <div>
          <Suspense fallback="Loading...">
            <MovieProvider id={id} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
