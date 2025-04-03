import { Users } from 'lucide-react';
import barber1 from '../../assets/images/barber1.jpg';
import barber2 from '../../assets/images/barber2.jpeg';

const teamMembers = [
  {
    name: 'Иван “The Blade”',
    image: barber1,
    description: 'Майстор на класическото бръснене и винтидж стила.',
  },
  {
    name: 'Мартин “Fade Master”',
    image: barber2,
    description: 'Специалист в модерен fade, коса и брада в синхрон.',
  },
];

export default function SectionAboutUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Users className="w-7 h-7 text-indigo-600" />
          За нас
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Зад всеки стил стои истински човек. Запознай се с екипа на Barberly –
          майстори на прическата и доброто отношение.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-60 h-80 object-cover rounded-xl shadow-md border-4 border-indigo-200 mb-4
             hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
