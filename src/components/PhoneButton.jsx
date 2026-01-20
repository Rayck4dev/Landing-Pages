export default function PhoneButton() {
  return (
    <div className="flex justify-center">
      <a
        href="tel:+556999999999"
        className="inline-flex items-center justify-center gap-2 
                   bg-gradient-to-r from-brand-pink via-brand-green to-brand-pink 
                   bg-[length:200%_200%] animate-gradient
                   text-white px-4 sm:px-5 py-2 rounded-full shadow-md 
                   hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 
                   font-nunito font-semibold text-sm sm:text-base max-w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-.59 1.41l-1.7 1.7a16 16 0 006.18 6.18l1.7-1.7A2 2 0 0116 14h3a2 2 0 012 2v3a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 6V5a2 2 0 01-1-1z"
          />
        </svg>
        (69) 99999-9999
      </a>
    </div>
  );
}
