import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MovieState } from '../../app/types';
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../../features/Movies/MoviesSlice';

interface MovieItemProps {
  movie: MovieState;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.movies.favorites);
  const isFavorite = favorites.find(favorite => favorite.id === movie.id);

  const toggleFavorite = () => {
    isFavorite
      ? dispatch(removeFavoriteMovie(movie.id))
      : dispatch(addFavoriteMovie(movie));
  };

  return (
    <div className='flex flex-col bg-white'>
      <img
        src={movie.coverImage.large}
        alt={movie.title.english}
        className='object-cover w-full h-[179px]'
      />
      <div className='flex flex-col px-[12px] py-[18px] h-full'>
        <h2 className='leading-[28px] font-bold text-center'>
          {movie.title.english}
        </h2>
        <p className='leading-[28px] text-center'>{movie.title.native}</p>
        <button
          className='favorite-btn block mt-auto ml-auto'
          onClick={toggleFavorite}
        >
          <svg className='h-[24px] w-[24px]' viewBox='0 0 24 24'>
            <path
              d='M4.358 5.427a5.05 5.05 0 0 0 0 6.888l1.085 1.14-.008.008 6.557 6.888.008-.008.008.008 6.557-6.888-.008-.008 1.085-1.14a5.05 5.05 0 0 0 0-6.888 4.48 4.48 0 0 0-6.557 0L12 6.566l-1.085-1.14a4.48 4.48 0 0 0-6.557 0z'
              fill={isFavorite ? 'red' : '#fff'}
            />
            <path
              d='M16.5 3A5.99 5.99 0 0 0 12 5.09 5.99 5.99 0 0 0 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
              fill={isFavorite ? 'red' : '#000'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
