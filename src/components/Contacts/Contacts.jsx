import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Contacts() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24" id="contacts">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <MapPin className="w-7 h-7 text-indigo-600" />
          Контакти
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Намери ни и запази своя час – бързо, лесно и директно.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-700 text-center flex-wrap">

        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-indigo-600" />
          <span>ул. “Барбърска” 15, София</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          <span>Пон – Съб: 10:00 – 20:00</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-indigo-600" />
          <span>0888 123 456</span>
        </div>


        <a
          href="https://www.instagram.com/yourbarberpage"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-600 hover:underline"
        >
          <Instagram className="w-5 h-5" />
          <span>@yourbarberpage</span>
        </a>
      </div>

<div className="mt-12 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md">
  <iframe
    title="Локация на Barberly"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1466.1120386800958!2d23.299757472294797!3d42.698975896837474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85489d15cfb7%3A0xcddb066725dd245e!2sg.k.%20Zona%20B-19%2C%20ul.%20%22Pozitano%22%20140-142%2C%201309%20Sofia!5e0!3m2!1sen!2sbg!4v1743677275718!5m2!1sen!2sbg"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  );
}
