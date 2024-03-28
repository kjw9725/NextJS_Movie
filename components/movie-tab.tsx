'use client';
import { Suspense, useState } from 'react';
import MovieVideo, { IMovieId } from './movie-video';
import styles from '../styles/movie-tab.module.css';
import MovieCredit from './movie-credit';

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
          예고편
        </li>
        <li data-id="1" onClick={onChange}>
          크레딧
        </li>
        <li data-id="2" onClick={onChange}></li>
        <li data-id="3" onClick={onChange}></li>
      </div>
      {tab === '0' && (
        <Suspense fallback="Loading...">
          <MovieVideo id={id} />
        </Suspense>
      )}
      {tab === '1' && (
        <div>
          <Suspense fallback="Loading...">
            <MovieCredit id={id} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
