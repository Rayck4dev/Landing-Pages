import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Texto */}
        <p className="text-xs md:text-sm text-center md:text-left">
          © {new Date().getFullYear()} PETCLINI — Amor e cuidado para seu pet
        </p>

        <div className="flex justify-center md:justify-end gap-4 md:gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 hover:scale-110 transition-transform shadow-md"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink-500 hover:scale-110 transition-transform shadow-md"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://wa.me/556999999999?text=Olá,%20quero%20agendar%20um%20atendimento%20para%20meu%20pet!"
            target="_blank"
            aria-label="WhatsApp"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500 hover:scale-110 transition-transform shadow-md"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
