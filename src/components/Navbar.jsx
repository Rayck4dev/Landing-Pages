import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import PhoneButton from "./PhoneButton";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-2 md:py-1">
        <div className="flex items-center gap-2">
          <img
            src="/logopetclini_bg.png"
            alt="Logo PET CLINi"
            className="h-12 md:h-16 w-auto"
          />
          <span className="font-fredoka font-bold text-xl md:text-2xl text-brand-pink tracking-wide">
            PETCLINI
          </span>
        </div>

        <ul className="hidden md:flex gap-6 font-body text-gray-700">
          <NavLink href="#inicio">Início</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <Dropdown
            title="Serviços"
            items={["Consultas", "Vacinação", "Banho & Tosa", "Emergência"]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            index="servicos"
          />
          <Dropdown
            title="Cuidados"
            items={["Alimentação", "Higiene", "Bem-estar", "Dicas"]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            index="cuidados"
          />
          <NavLink href="#contato">Contato</NavLink>
        </ul>

        <div className="hidden md:block">
          <PhoneButton />
        </div>

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-brand-pink"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
     {mobileOpen && (
  <div className="fixed top-[64px] md:top-[72px] left-0 w-full bg-white shadow-lg px-6 py-6 space-y-4 font-body z-50">
    <NavLink href="#inicio">Início</NavLink>
    <NavLink href="#sobre">Sobre</NavLink>
    <Dropdown
      title="Serviços"
      items={["Consultas", "Vacinação", "Banho & Tosa", "Emergência"]}
      openDropdown={openDropdown}
      setOpenDropdown={setOpenDropdown}
      index="servicos"
      mobile
    />
    <Dropdown
      title="Cuidados"
      items={["Alimentação", "Higiene", "Bem-estar", "Dicas"]}
      openDropdown={openDropdown}
      setOpenDropdown={setOpenDropdown}
      index="cuidados"
      mobile
    />
    <NavLink href="#contato">Contato</NavLink>
    <PhoneButton />
  </div>
)}

    </nav>
  );
}
