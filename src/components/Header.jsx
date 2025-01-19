import '../styles/components/Header.scss';

import heroSvgMobile from '../assets/tablet/image-hero.png';
import heroLeftSvg from '../assets/desktop/image-hero-left.png';
import heroRightSvg from '../assets/desktop/image-hero-right.png';
import Button from '../components/Button';

const Header = () => {
  return (
    <header className="wrapper-header">
      <img className="image-hero-mobile" src={heroSvgMobile} alt="" />

      <img className="image-hero-left" src={heroLeftSvg} alt="" />
      <div className="header-section">
        <h1 className="header-title">Group Chat for Everyone</h1>
        <p className="header-smallText">
          Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
        </p>

        <div className="buttons-container">
          <Button text="DownLoad" spanText="v1.3" color="blue" />
          <Button text="What it is?" color="purple" />
        </div>
      </div>

      <img className="image-hero-right" src={heroRightSvg} alt="" />
    </header>
  );
};

export default Header;
