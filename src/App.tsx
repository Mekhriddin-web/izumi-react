import FilmItem from './components/FilmItem';
import SearchButton from './components/SearchButton';

function App() {
  return (
    <div className='app pt-[30px] pb-[48px]'>
      <div className='container mx-auto max-w-[1190px]'>
        <h1 className='text-[36px] leading-[54px] font-bold text-center text-caribbeanGreen'>
          Список аниме
        </h1>

        <SearchButton />

        <FilmItem img={''} />
      </div>
    </div>
  );
}

export default App;
