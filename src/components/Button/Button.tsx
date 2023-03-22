import { useAppDispatch } from '../../app/hooks';
import imgButtonArrow from '../../assets/arrow.svg';
import { showMoreMovies } from '../../features/Movies/MoviesSlice';

interface ButtonProps {
  disableLoadMoreButton: boolean;
}

const Button = ({ disableLoadMoreButton }: ButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(showMoreMovies())}
      className='flex items-center gap-x-[20px] px-[32px] py-[12px] mt-[14px] m-auto rounded-[5px] text-black bg-caribbeanGreen font-serif disabled:cursor-not-allowed'
      disabled={!disableLoadMoreButton}
    >
      <span>MORE</span>
      <img className='w-[24px] h-[24px]' src={imgButtonArrow} alt='arrow' />
    </button>
  );
};

export default Button;
