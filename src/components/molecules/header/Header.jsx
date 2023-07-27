import './Header.scss';
import Logo from '../../atoms/logo/Logo';
import Title from '../../atoms/title/Title';
import Subtitle from '../../atoms/subtitle/Subtitle';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Title />
      <Subtitle />
    </header>
  )
}

export default Header;