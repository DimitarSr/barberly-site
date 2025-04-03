import { CalendarDays } from 'lucide-react';

const FloatingReservationButton = () => {
  return (
    <a
      href='#contacts'
      className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Запази час"
    >
      <CalendarDays className="w-6 h-6" />
    </a>
  );
};

export default FloatingReservationButton;
