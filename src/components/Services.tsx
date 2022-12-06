import fasilitas from '../assets/fasilitas.jpg';

const Services:React.FC = () => {
  return (
    <section className="services">
      <section className="services-up">
        <h2>Fasilitas & Layanan </h2>
      </section>
      <section className="services-down">
        <section className="services-left">
          <a href="">Admisi</a>
          <a href="">Hemodialisis</a>
          <a href="">Insentive Care(ICU,PICU,NICU)</a>
          <a href="">Medical Check Up</a>
          <a href="">Labolatorium</a>
          <a href="">Farmasi</a>
          <a href="">Radiologi</a>
        </section>
        <section className="services-center">
          <div className="services-center-admisi">
            <h3>Admisi</h3>
            <p>Unit Rawat Inap Kami Yang Dilengkapi Dengan Berbagai Fasilitas Untuk Meningkatkan Kenyamanan Anda Selama Perawatan Di RSUI</p>
            <button>Selengkapnya</button>
          </div>
        </section>
        <section className="services-right">
          <img src={fasilitas} alt="" />
        </section>
      </section>
    </section>
  );
}

export default Services;