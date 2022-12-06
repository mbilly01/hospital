import insurance from '../assets/asuransi.png';

const Insurance:React.FC = () => {
  return (
    <section className="insurance">
      <h2>Asuransi Kesehatan</h2>
      <section className="insurance-member">
        <img src={insurance} alt=""/>
        <img src={insurance}alt=""/>
        <img src={insurance}alt=""/>
        <img src={insurance}alt=""/>
        <img src={insurance}alt=""/>
        <img src={insurance}alt=""/>
      </section>
    </section>
  );
}

export default Insurance;