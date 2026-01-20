import { FaCalendarCheck } from "react-icons/fa";

export default function Promo() {
  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-brand-greenLight via-white to-brand-green relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="font-fredoka text-2xl sm:text-3xl md:text-5xl text-brand-pink mb-6 animate-fadeIn">
          ✨ Agende o cuidado que seu pet merece
        </h2>

        <p className="font-nunito text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 animate-fadeIn">
          Na <span className="text-brand-green font-semibold">PETCLINI</span>,
          cada atendimento é pensado para o bem-estar do seu melhor amigo.
          Reserve já e proporcione uma experiência única de carinho e atenção!
        </p>

        <a
          href="https://wa.me/556999999999?text=Olá,%20quero%20agendar%20um%20atendimento%20para%20meu%20pet!"
          target="_blank"
          className="inline-flex items-center gap-3 bg-brand-pink hover:bg-pink-600 px-6 py-3 md:px-10 md:py-5 rounded-full shadow-xl text-white font-fredoka text-lg md:text-xl transition transform hover:scale-105 animate-pulse md:animate-bounce"
        >
          <FaCalendarCheck className="text-xl md:text-2xl" /> Agendar agora
        </a>
      </div>

      <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-brand-pink/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-56 md:h-56 bg-brand-greenLight/30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
