const { useState } = React;

const ctaBtn =
  "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "[Home]", href: "#home" },
    { name: "[Our Partners]", href: "#about" },
    { name: "[Team of Artists]", href: "#artists" },
    { name: "[Customer Reviews]", href: "#reviews" },
  ];

  const isIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

  const handleClick = (href, e) => {
    e.preventDefault();
    if (isIndex) {
      // scroll on same page
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate to index page with fragment
      window.location.href = `index.html${href}`;
    }
    setOpen(false);
  };

  return (
    <header className="w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-base font-thin uppercase text-[#f0efed]/[0.4]">
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-orange-500 transition"
              onClick={e => handleClick(item.href, e)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden fixed right-6 top-4 text-white z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <i className="ri-close-line text-3xl"></i> : <i className="ri-menu-line text-3xl"></i>}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-black/[0.4] backdrop-blur-sm flex flex-col items-center justify-center gap-8 font-thin text-lg uppercase z-40 p-6 transition-all duration-500 ease-in-out transform ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-orange-500 transition text-2xl"
            onClick={e => handleClick(item.href, e)}
          >
            {item.name}
          </a>
        ))}

        {/* Extra CTAs */}
        <div className="flex flex-col gap-4 flex-wrap justify-center mt-6 w-full">
          <div className="text-base text-[#f0efed]/[0.4]">[Schedule a Visit]</div>
          <a
            href="book.html"
            className={`${ctaBtn} relative pr-8 group overflow-hidden`}
            onClick={e => setOpen(false)}
          >
            Book Experience
            <img
              src="/arrow-top.svg"
              alt="arrow"
              className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
            />
          </a>
        </div>

        <div className="flex flex-col gap-4 flex-wrap justify-center mt-6 w-full">
          <div className="text-base text-[#f0efed]/[0.4]">[Contact via Email]</div>
          <a
            href="mailto:studio@thefourdeuces.nl"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBtn} relative pr-8 group overflow-hidden`}
          >
            Contact
            <img
              src="/arrow-top.svg"
              alt="arrow"
              className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
