import deal from '../assets/promo.jpg';

const SpecialDeal:React.FC = () => {
  return (
    <section className="special-deal">
      <h2>PENAWARAN SPESIAL</h2>
      <section className="image-container">
      <img src={deal} alt="" />
      <img src={deal} alt="" />
      <img src={deal} alt="" />
      <img src={deal} alt="" />
      </section>
     
    </section>
  );
}

export default SpecialDeal;