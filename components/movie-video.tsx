// 'use client';
import { API_URL } from '@/constants';
import styles from '../styles/movie-video.module.css';

export interface IMovieId {
  id: string;
}
interface IvideoType {
  key: string;
  id: string;
}

const getVideo = async ({ id }: IMovieId) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};
export default async function MovieVideo({ id }: IMovieId) {
  const videos = await getVideo({ id });
  console.log(videos);
  return (
    <div className={styles.video}>
      {videos.map((video: IvideoType) => {
        return (
          <iframe
            key={video.id}
            src={`https://www.youtube.com/embed/${video.key}`}
            allowFullScreen
          ></iframe>
        );
      })}
    </div>
  );
}
