import { useAppDispatch } from '..';
import { updateListMovies } from './slice';
import { Movie } from './types';

const useUpdateListMovies = (): ((list: Movie[]) => void) => {
  const dispatch = useAppDispatch();
  return (list: Movie[]) => {
    dispatch(updateListMovies(list));
  };
};

export default useUpdateListMovies;
