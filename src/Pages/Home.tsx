import FavouriteList from '../components/Favorites/FavouriteList';
import MovieList from '../components/Movies/MovieList';
import MovieSearch from '../components/Movies/MovieSearch';
import Title from '../components/Title';

const Home = () => {
  return (
    <div className='app pt-[30px] pb-[48px]'>
      <section>
        <div className='max-w-[1254px] mx-auto px-[32px]'>
          <Title text='Список аниме' />
          <MovieSearch />
          <MovieList />
        </div>
      </section>
      <section className='mt-[16px]'>
        <div className='max-w-[1254px] mx-auto px-[32px]'>
          <Title text='Любимое аниме' />
          <FavouriteList />
        </div>
      </section>
    </div>
  );
};

export default Home;
