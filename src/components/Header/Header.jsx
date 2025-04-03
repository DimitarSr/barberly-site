
import { Scissors } from "lucide-react";
import ReservationButton from "../ReservationButton/ReservationButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5">
      <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
        <Scissors className="w-6 h-6" />
        Barberly
      </div>
      <div className="hidden md:block">
       <ReservationButton />
      </div>
    </header>
  );
}
