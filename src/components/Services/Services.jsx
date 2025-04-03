import { Scissors, Baby, User, Sparkles, Bath, Smile, ClipboardList } from 'lucide-react';

const services = [
  {
    title: 'Мъжко подстригване',
    icon: Scissors,
    description: 'Класическо или модерно подстригване според твоя стил.',
    price: '30 лв',
  },
  {
    title: 'Детско подстригване',
    icon: Baby,
    description: 'Бързо и забавно подстригване за най-малките герои.',
    price: '20 лв',
  },
  {
    title: 'Оформяне на брада',
    icon: User,
    description: 'Контуриране, бръснене и оформяне с внимание към детайла.',
    price: '20 лв',
  },
  {
    title: 'Коса и брада',
    icon: Sparkles,
    description: 'Пълна визия – подстригване и брада в един стилен пакет.',
    price: '40 лв',
  },
  {
    title: 'Маска за лице',
    icon: Bath,
    description: 'Освежаваща грижа за кожата – чиста, хидратирана и свежа.',
    price: '5 лв',
  },
  {
    title: 'Терапия с топла кърпа',
    icon: Smile,
    description:
      'Релаксираща процедура за омекотяване на брадата и освежаване на кожата.',
    price: '10 лв',
  },
];

export default function SectionServices() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24" id='services'>
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
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4 text-indigo-600">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
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
