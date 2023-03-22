import { useEffect, useState } from 'react';
import { useDebouncedValue, useAppDispatch } from '../../app/hooks';
import { fetchMovies } from '../../features/Movies/MoviesAPI';
import { addDebouncedSearchValue } from '../../features/Movies/MoviesSlice';

const MovieSearch = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const debouncedValue = useDebouncedValue(inputSearchValue, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addDebouncedSearchValue(inputSearchValue));
    dispatch(fetchMovies(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className='relative max-w-[600px] mt-[25px] mx-auto'>
      <input
        className='w-full py-[15px] pr-[50px] pl-[10px] h-[60px] text-[16px] leading-[30px] font-normal rounded-[5px] focus:outline-none focus:shadow-outline'
        type='text'
        placeholder='Text here'
        value={inputSearchValue}
        onChange={e => setInputSearchValue(e.target.value)}
      />
      {inputSearchValue !== '' && (
        <button
          className='absolute top-[17px] right-[17px]'
          onClick={() => setInputSearchValue('')}
        >
          <svg className='h-[26px] w-[26px]' viewBox='0 0 26 26'>
            <path d='M26 1.857L1.857 26 0 24.143 24.143 0 26 1.857z' />
            <path d='M24.143 26L0 1.857 1.857 0 26 24.143 24.143 26z' />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MovieSearch;
