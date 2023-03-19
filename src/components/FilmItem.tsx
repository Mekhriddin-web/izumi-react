const FilmItem = () => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-[32px]'>
      <div className='bg-white rounded-lg shadow-md'>
        <img src='...' alt='...' className='w-[373] h-[179]' />
        <div className='px-[12px] py-[18px]'>
          <h2 className='leading-[28px] font-bold text-center'>
            Заголовок карточки
          </h2>
          <p className='leading-[28px] text-center'>Описание карточки</p>
          <button className='block ml-auto'>
            <svg className='h-[24px] w-[24px]' viewBox='0 0 24 24'>
              <path d='M16.5 3A5.99 5.99 0 0 0 12 5.09 5.99 5.99 0 0 0 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmItem;
