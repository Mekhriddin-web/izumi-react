import { useAppSelector } from '../../app/hooks';
import FavouriteItem from './FavouriteItem';

const FavouriteList = () => {
  const favorites = useAppSelector(state => state.movies.favorites);
  return (
    <>
      {favorites.length > 0 ? (
        <div className='grid grid-cols-1 gap-x-[60px] gap-y-[40px] mt-[32px] md:grid-cols-3 md:gap-y-[15px]'>
          {favorites.map(favorite => (
            <FavouriteItem key={favorite.id} favorite={favorite} />
          ))}
        </div>
      ) : (
        <p>У вас пока нет любимых аниме</p>
      )}
    </>
  );
};

export default FavouriteList;
