import teleicon from '../assets/phone-solid.svg';
import ambulanceicon from '../assets/truck-medical-solid.svg';
import infoicon from '../assets/info-solid.svg';
import facebookicon from '../assets/facebook-f.svg';
import igicon from '../assets/instagram.svg';
import twittericon from '../assets/twitter.svg';
import youtubeicon from '../assets/youtube.svg';
const Info:React.FC = () => {
  return (
    <section className="info">
      <section className="left-info">
        <section className="phone-info">
          <img src={teleicon} alt="" />
          <p>(021) 097897964</p>
        </section>
        <section className="ambulance-info">
          <img src={ambulanceicon} alt="" />
          <p>(021) 093813190</p>
        </section>
        <button>
        <img src={infoicon} alt="" />
          <p>Covid-19 & Vaksin</p>
        </button>
      </section>
      <section className="right-info">
        <input type="text" placeholder='Pencarian' />
        <section className="social-info">
          <a href="#"><img src={facebookicon} alt="" /></a>
          <a href="#"><img src={igicon} alt="" /></a>
          <a href="#"><img src={twittericon} alt="" /></a>
          <a href="#"><img src={youtubeicon} alt="" /></a>
        </section>
      </section>
    </section>
  );
}

export default Info;