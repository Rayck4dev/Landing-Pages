import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-10 py-10 bg-gradient-to-br from-brand-pink/30 via-white to-brand-green/30 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-24 h-24 bg-brand-pink/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="flex-1 text-center md:text-left space-y-8 z-10">
        <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl text-brand-pink drop-shadow-lg leading-tight">
          Cuidamos do seu melhor amigo
          <span className="text-brand-green"> como se fosse da família</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-2xl text-gray-700 max-w-md mx-auto md:mx-0">
          Na{" "}
          <span className="text-brand-green font-bold font-nunito">
            PETCLINI
          </span>
          , cada pet recebe carinho, dedicação e cuidado especial.
        </p>
        <a
          href="https://wa.me/556999999999?text=Olá,%20quero%20agendar%20um%20atendimento%20para%20meu%20pet!"
          target="_blank"
          className="inline-flex items-center gap-2 bg-brand-pink hover:bg-pink-600 px-6 py-3 rounded-lg shadow-lg text-white font-body transition transform hover:-translate-y-1"
        >
          <FaWhatsapp /> Agende já
        </a>
      </div>

      <div className="flex-1 flex justify-center mb-8 md:mb-0 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pink/30 rounded-full blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-green/30 rounded-full blur-2xl z-0"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/50 rounded-full blur-2xl z-0"></div>

        <img
          src="/doguinho.png"
          alt="Cachorrinho feliz"
          className="h-64 md:h-96 lg:h-[500px] object-contain rounded-full drop-shadow-xl relative z-10"
        />
      </div>

      <div
        className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group z-50 transition-opacity duration-700 ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-nunito text-xs sm:text-sm text-gray-600 mb-4 group-hover:text-brand-pink transition-colors">
          Role para ver mais
        </span>
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 mb-8 text-brand-green drop-shadow-md animate-float group-hover:text-brand-pink transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
