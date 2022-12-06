import logo from '../assets/logo2.png';

const Header:React.FC = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <ul>
        <li><a href="#">Pasien</a></li>
        <li> <a href="#">Layanan</a></li>
        <li> <a href="#">Kegiatan</a></li>
        <li> <a href="#">Artikel</a></li>
        <li> <a href="#">Tentang</a></li>
        <li><button>Login</button></li>
      </ul>
    </header>
  );
}


export default Header;