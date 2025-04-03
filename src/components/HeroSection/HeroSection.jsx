import heroImage from '../../assets/images/heroImage.webp';
import ReservationButton from '../ReservationButton/ReservationButton';

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-[600px] overflow-hidden" id='hero'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch h-full gap-6">
        <div className="px-8 md:px-16 flex flex-col justify-center gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Барбър услуги с характер и стил
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Добре дошъл в Barberly – мястото, където визията ти среща
            майсторството. Запази час и освежи стила си още днес.
          </p>
          <div>
            <ReservationButton />
          </div>
        </div>
        <div className="relative h-64 sm:h-80 md:h-full mt-6 md:mt-0 w-full px-2 sm:px-4 md:px-0">


        <div className="absolute top-0 left-0 w-full h-full bg-black/40 skew-x-[-12deg] origin-left z-10 rounded-l-xl overflow-hidden"></div>

  <img
    src={heroImage}
    alt="Hero"
    className="w-full h-full object-cover rounded-xl shadow-lg"
  />
</div>
      </div>
    </section>
  );
};

export default HeroSection;
