import hero from '../assets/hero.jpg';

const Hero:React.FC = () => {
  return (
    <section className="hero">
      <a href="#"><img src={hero} alt="" /></a>
    </section>
  );
}

export default Hero;