import imgLogo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='bg-white px-[20px] py-[7px]'>
      <img
        className='object-contain h-[30px] md:h-[46px]'
        src={imgLogo}
        alt='Izumi It Company'
      />
    </header>
  );
};

export default Header;
