'use client';
import { API_URL } from '@/constants';
import { IMovieId } from './movie-video';

const getProvider = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/providers`);
  return res.json();
};

export default async function MovieProvider({ id }: IMovieId) {
  const providers = await getProvider(id);
  console.log(providers);
  return <div></div>;
}
