import about from '../assets/about.png';
import shareicon from '../assets/share-nodes-solid.svg';
import spinnericon from '../assets/spinner-solid.svg';
import usericon from '../assets/users-solid.svg';
import searchicon from '../assets/magnifying-glass-solid.svg';
const WhyUs:React.FC = () => {
  return (
    <section className="why-us">
      <section className="why-us-up">
        <section className="why-us-detail">
          <h2>Mengapa Kami?</h2>
          <section className="rs-digital">
            <img src={shareicon} alt="" />
            <div className="rs-digital-text">
              <h4>Rumah Sakit Berbasis Digital</h4>
              <p>Menerapkan Sistem Manajemen Operasional Berbasis Teknologi Informasi Jaringan</p>
            </div>
          </section>
          <section className="rs-perawatan">
            <img src={spinnericon} alt="" />
            <div className="rs-perawatan-text">
              <h4>Perawatan Berkelanjutan</h4>
              <p>Kesinambungan Pelayanan Yang Dilakukan Mulai Dari Perawatan Sampai Pensiun Pulang Ke Rumah Oleh Tim Home Care Multi-Profesi</p>
            </div>
          </section>
          <section className="rs-riset">
            <img src={searchicon} alt="" />
            <div className="rs-riset-text">
              <h4>Praktik Berbasis Bukti</h4>
              <p>Seluruh Klien Dikaji Berdasarkan Riwayat Penyakit Dahulu,Keluarga,Dan Pola Hidup</p>
            </div>
          </section>
          <section className="rs-collab">
            <img src={usericon} alt="" />
            <div className="rs-collab-text">
              <h4>Kolaborasi Interprofesional</h4>
              <p>Mengembangkan Kolaborasi Interprofesional Dalam Pelayanan,Riset Bidang Kesehatan,Serta Pengabdian Masyarakat</p>
            </div>
          </section>
        </section>
        <section className="why-us-video">
          <img src={about} alt="" />
        </section>
      </section>
      <section className="why-us-down">
        <button>Selengkapnya</button>
      </section>
    </section>
  );
}

export default WhyUs;