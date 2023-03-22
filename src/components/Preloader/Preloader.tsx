import imgLoader from '../../assets/loader.svg';

const Preloader = () => {
  return (
    <img
      className='animate-spin w-[48px] h-[48px] mt-[32px] m-auto'
      src={imgLoader}
      alt='Loader'
    />
  );
};

export default Preloader;
