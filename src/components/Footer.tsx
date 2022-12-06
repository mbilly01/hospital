import twiticon from '../assets/twitter.svg';
import fbicon from '../assets/facebook-f.svg';
import igicon from '../assets/instagram.svg';
import yticon from '../assets/youtube.svg';
import logo2 from '../assets/logo2.png';
import logo from '../assets/logo192.png';
const Footer:React.FC = () => {
  return (
    <footer>
      <section className="footer-up">
        <section className="links">
          <h4>Tautan</h4>
          <a href="#">Hubungi Kami</a>
          <a href="#">Karir</a>
          <a href="#">Kritik & Saran</a>
          <a href="#">Situs Lelang</a>
        </section>
        <section className="etc">
          <h4>Lainnya</h4>
          <a href="">Sitemap</a>
          <a href="">Kebijakan Privasi</a>
          <a href="">Disclaimer</a>
        </section>
        <section className="footer-img">
          <img src={logo2} alt="" />
          <img src={logo} alt="" />
        </section>
      </section>
      <hr />
      <section className="footer-down">
        <section className="copyright">
          <p> @Copyright 2022| Rumah Sakit All Right Reserved</p>
          <p>Designed By <a href="https://www.github.com/mbilly01">Muhammad Jibril Salsabilly</a></p>
        </section>
        <section className="social-media-footer">
          <a href="#"><img src={twiticon} alt=""/></a>
          <a href="#"><img src={fbicon} alt=""/></a>
          <a href="#"><img src={igicon} alt=""/></a>
          <a href="#"><img src={yticon} alt=""/></a> 
        </section>
      </section>
    </footer>
  );
}

export default Footer;
