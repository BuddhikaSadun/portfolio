import React, { useState, useEffect } from "react";

function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "aboutUs", "projects", "contactUs"];
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 h-20 w-full z-50  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_120%,rgba(0,163,255,0)_100%)] border-gray-300">
      {/*" bg-blue-300 border-b border-gray-300 sticky top-0 z-50"*/}

      <div className="flex justify-between items-center px-8 py-3">
        {/* Left Side - Name/Logo */}
        <span className="text-4xl font-bold text-blue-600">Portfolio</span>
        <ul className="flex gap-30 list-none">
          {[
            { href: "#Home", label: "Home" },
            { href: "#about", label: "About Us" },
            { href: "#projects", label: "Projects" },
            { href: "#contactUs", label: "Contact Us" },
          ].map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`relative text-2xl font-medium 
                    ${isActive ? "text-blue-600" : "text-black"}
                    ${
                      !isActive
                        ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                        : ""
                    }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
