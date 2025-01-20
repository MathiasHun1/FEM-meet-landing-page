import '../styles/components/Footer.scss';
import Button from './Button';

import footerMobile from '../assets/mobile/image-footer.jpg';
import footerTablet from '../assets/tablet/image-footer.jpg';
import footerDesktop from '../assets/desktop/image-footer.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="image-wrapper-footer">
        <img className="mobile-image" src={footerMobile} alt="" />
        <img className="tablet-image" src={footerTablet} alt="" />
        <img className="desktop-image" src={footerDesktop} alt="" />
      </div>
      <div className="inner">
        <h2 className="title-footer">Experience more together</h2>
        <p className="text-footer">
          Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
        </p>
        <div>
          <Button text="Download" spanText="v1.3" color="purple" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
