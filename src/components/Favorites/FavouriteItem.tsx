import { useAppDispatch } from '../../app/hooks';
import { MovieState } from '../../app/types';
import { removeFavoriteMovie } from '../../features/Movies/MoviesSlice';

interface FavoriteItemProps {
  favorite: MovieState;
}

const FavouriteItem = ({ favorite }: FavoriteItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className='flex min-h-[217px] bg-white'>
      <div className='min-w-[114px]'>
        <img
          src={favorite.coverImage.large}
          alt={favorite.title.english}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col w-full pt-[20px] pb-[12px] px-[12px]'>
        <h2 className='leading-[28px] font-bold text-center'>
          {favorite.title.english
            ? favorite.title.english
            : favorite.title.native}
        </h2>
        <button
          className='block mt-auto ml-auto'
          onClick={() => dispatch(removeFavoriteMovie(favorite.id))}
        >
          <svg className='h-[26px] w-[26px]' viewBox='0 0 26 26'>
            <path d='M26 1.857L1.857 26 0 24.143 24.143 0 26 1.857z' />
            <path d='M24.143 26L0 1.857 1.857 0 26 24.143 24.143 26z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FavouriteItem;
