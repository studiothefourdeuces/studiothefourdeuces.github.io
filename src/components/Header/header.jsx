const { useState } = React;

const Header = ({ open, setOpen }) => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Our Partners", href: "#about" },
    { name: "Team of Artists", href: "#artists" },
    { name: "Customer Reviews", href: "#reviews" },
  ];

  const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

  const isIndex =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/";

  const handleClick = (href, e) => {
    e.preventDefault();
    if (isIndex) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `index.html${href}`;
    }
    setOpen(false);
  };

  return (
    <>
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-[#111111] flex flex-col justify-center items-start p-8 z-40 transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-8 w-full">
          {/* Menu Links */}
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-xl transition hover:text-[#CC751B] ${item.name === "Home" ? "text-[#CC751B]" : ""
                }`}
              onClick={(e) => handleClick(item.href, e)}
            >
              {item.name}
            </a>
          ))}

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mt-4 w-full">
            <a
              href="/book.html"
              className={`${ctaBtn} relative pr-8 group overflow-hidden`}
            >
              Book Experience
              <img
                src="/src/assets/images/svg/arrow-top.svg"
                alt="arrow"
                className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
              />
            </a>
            <a
              href="mailto:booking@thefourdeuces.nl"
              className={`${ctaBtn} relative pr-8 group overflow-hidden`}
            >
              Contact
              <img
                src="/src/assets/images/svg/arrow-top.svg"
                alt="arrow"
                className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">

          {/* Social Links */}
          <div className="flex gap-4 mt-8 text-xl">
            <a
              href="mailto:studio@thefourdeuces.nl"
              className="hover:text-[#CC751B] transition"
              aria-label="Email"
            >
              <i className="ri-mail-line"></i>
            </a>
            <a
              href="https://instagram.com/the.four.deuces"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC751B] transition"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full z-30 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center relative">
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 text-base font-thin uppercase text-[#f0efed]/[0.4]">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#CC751B] hover:scale-105 transition"
                onClick={(e) => handleClick(item.href, e)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden absolute right-6 top-4 text-4xl transition hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
          </button>
        </div>
      </header>
    </>
  );
};

window.Header = Header;
