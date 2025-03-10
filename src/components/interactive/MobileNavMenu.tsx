import { useRef, useState, type PropsWithChildren } from "react";

export default function MobileNavMenu({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayElementRef = useRef<HTMLDivElement>(null);

  const openMenuClick = () => {
    setIsOpen(true);
    overlayElementRef.current?.style.setProperty("width", "100%");
    document.body.style.overflow = "hidden";
  };

  const closeMenuClick = () => {
    setIsOpen(false);
    overlayElementRef.current?.style.setProperty("width", "0");
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative lg:hidden block">
      <button
        onClick={openMenuClick}
        type="button"
        className="bg-primary size-10 md:size-14 flex justify-center items-center rounded-lg"
      >
        <svg
          className="size-6 md:size-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 6H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 18H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      {/* Overlay */}
      <div
        ref={overlayElementRef}
        className="fixed top-0 left-0 z-10 h-full w-0 overflow-x-hidden bg-black/90 duration-300"
      >
        <button
          className="absolute top-5 right-11 text-6xl text-white"
          type="button"
          onClick={closeMenuClick}
        >
          &times;
        </button>
        {/* Overlay content */}
        <nav className="relative top-1/4 mt-7 w-full text-center">
          {children}
        </nav>
      </div>
    </div>
  );
}
