import { FaChevronDown } from "react-icons/fa";

export default function Dropdown({
  title,
  items,
  openDropdown,
  setOpenDropdown,
  index,
  mobile = false,
}) {
  const isOpen = openDropdown === index;

  const handleMouseEnter = () => {
    if (!mobile) setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      setTimeout(() => {
        if (openDropdown === index) {
          setOpenDropdown(null);
        }
      }, 1000);
    }
  };

  const handleClick = () => {
    if (mobile) {
      setOpenDropdown(isOpen ? null : index);
    }
  };

  return (
    <li
      className={`relative ${mobile ? "w-full" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-between md:justify-start gap-1 w-full hover:text-brand-green transition relative group"
      >
        {title}
        <FaChevronDown
          className={`w-4 h-4 ml-1 text-brand-green transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {!mobile && (
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-pink group-hover:w-full transition-all duration-300"></span>
        )}
      </button>

      {isOpen && (
        <ul
          className={`${
            mobile
              ? "mt-2 w-full bg-white rounded-lg shadow-md"
              : "absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg z-50"
          }`}
        >
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-greenLight hover:text-brand-green transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
