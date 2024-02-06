import { useAppSelector } from '..';
import { Movie } from './types';

const useGetListMovies = (): Movie[] => useAppSelector((state) => state.movies.list);

export default useGetListMovies;
