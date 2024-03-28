import MovieInfo from '@/components/movie-info';
import MovieTab from '@/components/movie-tab';
import MovieVideo from '@/components/movie-video';
import { API_URL } from '@/constants';
import { Suspense } from 'react';

export interface IMovieType {
  id: string;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}
interface IMovieId {
  id: string;
}

const getMovies = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovies(id);
  return (
    <div>
      <Suspense fallback="Loading...">
        <MovieInfo
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
        />
      </Suspense>
      <MovieTab id={movie.id} />
    </div>
  );
}
