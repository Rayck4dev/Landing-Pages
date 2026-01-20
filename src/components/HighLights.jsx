import { FaUserCheck, FaPaw, FaStethoscope, FaHeart } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserCheck className="w-7 h-7 md:w-8 md:h-8" />,
    title: "Profissionais Certificados",
    text: "Equipe treinada e apaixonada por pets.",
  },
  {
    icon: <FaPaw className="w-7 h-7 md:w-8 md:h-8" />,
    title: "Cuidados Personalizados",
    text: "Atendimento sob medida para cada animal.",
  },
  {
    icon: <FaStethoscope className="w-7 h-7 md:w-8 md:h-8" />,
    title: "Recomendado por Veterinários",
    text: "Confiança e segurança para seu pet.",
  },
  {
    icon: <FaHeart className="w-7 h-7 md:w-8 md:h-8" />,
    title: "Ambiente Amoroso",
    text: "Espaço acolhedor e cheio de carinho.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-fredoka text-2xl sm:text-3xl md:text-4xl text-brand-pink mb-10 md:mb-12">
          Por que escolher a PETCLINI?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 md:gap-4 bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform animate-fadeIn duration-700"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="text-brand-green bg-brand-greenLight p-3 md:p-4 rounded-full shadow-md hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-fredoka text-base sm:text-lg md:text-xl text-brand-pink hover:text-brand-green transition">
                {item.title}
              </h3>
              <p className="font-nunito text-xs sm:text-sm md:text-base text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
