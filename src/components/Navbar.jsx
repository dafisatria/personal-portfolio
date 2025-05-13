import React, { useEffect, useState } from "react";

const NAVBAR_HEIGHT = 60;

const navItems = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const scrollY = window.scrollY + NAVBAR_HEIGHT+10;
      const sections = document.querySelectorAll("section[id]");

      for (const section of sections) {
        const { offsetTop, offsetHeight, id } = section;
        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          if (id !== activeSection) setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateActiveSection();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offsetTop = el.getBoundingClientRect().top + window.scrollY;
    const y = offsetTop - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300 bg-yellow">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={()=>scrollToSection(item.to)}
              className={`relative pb-1 transition after:transition-all after:duration-300 ${
                activeSection === item.to
                  ? "text-darkBlue font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-blue"
                  : "text-darkBlue"
              } hover:font-semibold`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
