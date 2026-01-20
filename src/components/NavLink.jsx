export default function NavLink({ href, children }) {
  return (
    <li className="relative group cursor-pointer">
      <a
        href={href}
        className="hover:text-brand-green transition-colors duration-300"
      >
        {children}
      </a>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-pink group-hover:w-full transition-all duration-300"></span>
    </li>
  );
}
