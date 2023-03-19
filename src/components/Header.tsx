import imgLogo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='bg-white px-[20px] pt-[7px] pb-[22px]'>
      <img
        className='object-contain h-[46px]'
        src={imgLogo}
        alt='Izumi It Company'
      />
    </header>
  );
};

export default Header;
