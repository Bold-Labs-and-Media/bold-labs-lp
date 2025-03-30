import { Menu, X } from "lucide-react";
import { useState, type PropsWithChildren } from "react";

export default function MobileNavMenu({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuOnClick = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenuOnClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative block lg:hidden">
      <button
        onClick={openMenuOnClick}
        type="button"
        className="bg-primary flex size-10 items-center justify-center rounded-lg md:size-14"
      >
        <Menu className="text-white" />
      </button>
      {/* Overlay */}
      <div
        style={{
          width: isOpen ? "100%" : "0",
        }}
        className="fixed top-0 left-0 z-10 h-full w-0 overflow-x-hidden bg-black/90 duration-300"
      >
        <button
          className="absolute top-5 right-11 text-6xl text-white"
          type="button"
          onClick={closeMenuOnClick}
        >
          <X />
        </button>
        {/* Overlay content */}
        <nav className="relative top-1/4 mt-7 w-full text-center">
          {children}
        </nav>
      </div>
    </div>
  );
}
