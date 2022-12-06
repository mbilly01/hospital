import testimony from '../assets/testimony.jpg';

const Testimony:React.FC = () => {
  return (
    <section className="testimony">
      <h2>PENGALAMAN PASIEN</h2>
      <section className="cards">
        <section className="card">
          <div>
          <img src={testimony} alt="" />
          <h3>Tasya Kamila</h3>
          <p>Public Figure</p>
          </div>
          <p>Jujur Bangga Ternyata Kampus Almamaterku Memiliki Rumah Sakit Yang Keren Kaya Gini</p>
        </section>
        <section className="card">
          <div>
          <img src={testimony} alt="" />
          <h3>Tasya Kamila</h3>
          <p>Public Figure</p>
          </div>
          <p>Jujur Bangga Ternyata Kampus Almamaterku Memiliki Rumah Sakit Yang Keren Kaya Gini</p>
        </section>
        <section className="card">
          <div>
          <img src={testimony} alt="" />
          <h3>Tasya Kamila</h3>
          <p>Public Figure</p>
          </div>
          <p>Jujur Bangga Ternyata Kampus Almamaterku Memiliki Rumah Sakit Yang Keren Kaya Gini</p>
        </section>
      </section>
    </section>
  );
}

export default Testimony;
