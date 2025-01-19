import '../styles/components/Main.scss';

import DecorElement from './DecorElement';
import image1 from '../assets/desktop/image-woman-in-videocall.jpg';
import image2 from '../assets/desktop/image-women-videochatting.jpg';
import image3 from '../assets/desktop/image-men-in-meeting.jpg';
import image4 from '../assets/desktop/image-man-texting.jpg';

const Main = () => {
  return (
    <main className="wrapper-main">
      <DecorElement number="01" />

      <div className="image-main-grid">
        <div className="image-container-main">
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="image-container-main">
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
        </div>
      </div>

      <div className="text-section-main">
        <p className="title-main">Built for modern use</p>
        <h2 className="bold-text-main">Smarter meetings, all in one place</h2>
        <p className="arcticle-main">
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
          join with invite-only team access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
};

export default Main;
