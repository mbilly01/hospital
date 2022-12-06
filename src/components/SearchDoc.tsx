import searchicon from '../assets/magnifying-glass-solid.svg';

const SearchDoc:React.FC = () => {
  return (
    <section className="search-doc">
      <input type="text" name="" id=""placeholder='Cari Dokter Disini' />
      <button>
        <img src={searchicon} alt="" />
        <p>Telusuri</p>
      </button>
    </section>
  );
}

export default SearchDoc;