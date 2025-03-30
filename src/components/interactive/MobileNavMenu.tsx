import { Menu, X } from "lucide-react";
import { useEffect, useState, type PropsWithChildren } from "react";

export default function MobileNavMenu({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mobileMenuLinks = document.querySelectorAll("#mobile-menu li");
    console.log(mobileMenuLinks);

    const handleMobileMenuLinkClick = () => {
      closeMenuOnClick();
    };

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", handleMobileMenuLinkClick);
    });

    return () => {
      mobileMenuLinks.forEach((link) => {
        link.removeEventListener("click", handleMobileMenuLinkClick);
      });
    };
  }, []);

  const openMenuOnClick = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    const hero = document.getElementById("hero");
    if (!hero) return;
    hero.style.zIndex = "-1";
  };

  const closeMenuOnClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    const hero = document.getElementById("hero");
    if (!hero) return;
    hero.style.zIndex = "0";
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
        className="fixed -top-7 left-0 z-50 h-screen w-0 overflow-x-hidden bg-black/90 duration-300 md:-top-12"
      >
        <button
          className="absolute top-5 right-11 text-6xl text-white"
          type="button"
          onClick={closeMenuOnClick}
        >
          <X size={32} />
        </button>
        {/* Overlay content */}
        <nav className="relative top-1/4 mt-7 w-full text-center">
          {children}
        </nav>
      </div>
    </div>
  );
}
