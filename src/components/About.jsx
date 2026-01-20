import { useState, useEffect, useRef } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [countPartners, setCountPartners] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let clients = 0;
    let partners = 0;

    const interval = setInterval(() => {
      if (clients < 129000) {
        clients += 3000;
        setCountClients(clients);
      }
      if (partners < 24) {
        partners += 1;
        setCountPartners(partners);
      }
      if (clients >= 129000 && partners >= 24) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [startCount]);

  const items = [
    {
      title: "Profissionais apaixonados por pets",
      content:
        "Nossa equipe é formada por especialistas que amam o que fazem e tratam cada animal com carinho e dedicação.",
    },
    {
      title: "Serviços sob medida",
      content:
        "Cada pet é único. Por isso, oferecemos cuidados personalizados para atender às necessidades específicas de cada um.",
    },
    {
      title: "Experiências personalizadas",
      content:
        "Do banho ao acompanhamento veterinário, criamos experiências que deixam seu pet feliz e saudável.",
    },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 bg-brand-greenLight/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col-reverse items-start justify-start gap-12 pt-10 px-10 mb-4 pointer-events-none z-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={i}
            src="/assets/catpatBG.png"
            alt="Pegada"
            className="w-12 h-12 opacity-0 animate-pawStepUp"
            style={{
              animationDelay: `${i * 0.6}s`,
              transform: i % 2 === 0 ? "translateX(-20px)" : "translateX(20px)",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fadeIn">
          <h2 className="font-fredoka text-3xl md:text-4xl text-brand-pink mb-6">
            Seu parceiro de confiança no bem-estar animal
          </h2>
          <p className="font-nunito text-gray-700 mb-8">
            Na <span className="text-brand-green font-bold">PETCLINI</span>,
            acreditamos que cada pet merece cuidados especiais e atenção
            dedicada.
          </p>

          <div className="flex space-x-4 border-b mb-4">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 font-fredoka transition ${
                  activeTab === index
                    ? "text-brand-green border-b-2 border-brand-green"
                    : "text-gray-500 hover:text-brand-green"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md min-h-[120px]">
            <p className="font-nunito text-gray-600">
              {items[activeTab].content}
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src="/CATYELLOWbg.png"
            alt="Pet feliz"
            className="h-[500px] object-contain drop-shadow-lg animate-fadeIn"
          />

          <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-md px-4 py-2 text-center">
            <p className="font-fredoka text-xl text-brand-pink">
              {startCount
                ? Math.min(countClients, 129000).toLocaleString()
                : "0"}
              +
            </p>
            <p className="font-nunito text-sm text-gray-700">Atendimentos</p>
          </div>

          <div className="absolute top-6 right-6 bg-white rounded-lg shadow-md px-4 py-2 text-center">
            <p className="font-fredoka text-xl text-brand-pink">
              {startCount ? countPartners : "0"}+
            </p>
            <p className="font-nunito text-sm text-gray-700">Parceiros</p>
          </div>
        </div>
      </div>
    </section>
  );
}
