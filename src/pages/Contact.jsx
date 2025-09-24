import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 pt-32 pb-20 text-[#222222] min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="space-y-6 text-lg">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-[#222222] text-xl" />
          <a
            href="mailto:theduoclub0520@gmail.com"
            className="hover:text-black hover:underline transition"
          >
            theduoclub0520@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaInstagram className="text-pink-600 text-xl" />
          <a
            href="https://instagram.com/the_duoclub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700 hover:underline transition"
          >
            @the_duoclub
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-green-500 text-xl" />
          <a
            href="https://wa.me/919156537565"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 hover:underline transition"
          >
            9156537565
          </a>
          <span>/ 8308499301</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500 text-xl" />
          <a
            href="https://www.google.com/maps/place/Ahilyanagar+Savedi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 hover:underline transition"
          >
            Ahilyanagar, Savedi
          </a>
        </div>
      </div>
    </div>
  );
}
