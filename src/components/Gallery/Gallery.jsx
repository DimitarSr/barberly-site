import { Camera } from 'lucide-react';
import img1 from '../../assets/images/gallery1.jpg';
import img2 from '../../assets/images/gallery2.jpeg';
import img3 from '../../assets/images/gallery3.jpeg';
import img4 from '../../assets/images/gallery4.jpeg';
import img5 from '../../assets/images/gallery5.jpeg';
import img6 from '../../assets/images/gallery6.jpeg';

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Camera className="w-7 h-7 text-indigo-600" />
          Галерия
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Разгледай част от атмосферата и стила, които създаваме всеки ден.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={url}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-60 object-cover object-center rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
