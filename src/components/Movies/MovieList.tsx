import { useAppSelector } from '../../app/hooks';
import Button from '../Button';
import Preloader from '../Preloader';
import MovieItem from './MovieItem';

const MovieList = () => {
  const movies = useAppSelector(state => state.movies.movies);
  const status = useAppSelector(state => state.movies.status);
  const error = useAppSelector(state => state.movies.moviesError);
  const perPage = useAppSelector(state => state.movies.perPage);
  const moviesDebouncedSearchValue = useAppSelector(
    state => state.movies.moviesDebouncedSearchValue
  );
  const disableLoadMoreButton = perPage < movies.length;

  if (status === 'loading') {
    return <Preloader />;
  }

  if (status === 'failed') {
    return <p className='text-red mt-[32px]'>{error}</p>;
  }

  return (
    <div>
      <div className='grid grid-cols-1 gap-x-[35px] gap-y-[40px] mt-[32px] md:grid-cols-3 md:gap-y-[15px]'>
        {movies.length > 0 &&
          movies
            .slice(0, perPage)
            .map(movie => <MovieItem key={movie.id} movie={movie} />)}
      </div>

      {!movies.length && moviesDebouncedSearchValue.trim() !== '' && (
        <p>Ничего не найдено по вашему запросу</p>
      )}
      {movies.length > 0 && (
        <Button disableLoadMoreButton={disableLoadMoreButton} />
      )}
    </div>
  );
};

export default MovieList;
