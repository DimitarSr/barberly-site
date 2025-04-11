import { ClipboardList } from 'lucide-react';
import Beard from '../../assets/images/beard.png';
import Child from '../../assets/images/child-cut.png';
import Men from '../../assets/images/men-cut.png'
import Combo from '../../assets/images/hair-Beard.png'
import FaceMask from '../../assets/images/facemask.png'
import HotTowel from '../../assets/images/hot-towel.png'


const services = [
  {
    title: 'Мъжко подстригване',
    icon: Men,
    description: 'Класическо или модерно подстригване според твоя стил.',
    price: '30 лв',
  },
  {
    title: 'Детско подстригване',
    icon: Child,
    description: 'Бързо и забавно подстригване за най-малките герои.',
    price: '20 лв',
  },
  {
    title: 'Оформяне на брада',
    icon: Beard,
    description: 'Контуриране, бръснене и оформяне с внимание към детайла.',
    price: '20 лв',
  },
  {
    title: 'Коса и брада',
    icon: Combo,
    description: 'Пълна визия – подстригване и брада в един стилен пакет.',
    price: '40 лв',
  },
  {
    title: 'Маска за лице',
    icon: FaceMask,
    description: 'Освежаваща грижа за кожата – чиста, хидратирана и свежа.',
    price: '5 лв',
  },
  {
    title: 'Терапия с топла кърпа',
    icon: HotTowel,
    description:
      'Релаксираща процедура за омекотяване на брадата и освежаване на кожата.',
    price: '10 лв',
  },
];

export default function SectionServices() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <ClipboardList className="w-7 h-7 text-indigo-600" />
          Нашите услуги
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Избери точната грижа за себе си – подстригване, брада или освежаване.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconOrImage = service.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4 text-indigo-600 h-12">
                {typeof IconOrImage === 'string' ? (
                  <img
                    src={IconOrImage}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <IconOrImage className="w-10 h-10" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <span className="inline-block px-4 py-1 text-sm font-medium bg-indigo-100 text-indigo-600 rounded-full">
                {service.price}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
