const { useState } = React;

const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const Header = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "[Home]", href: "#" },
        { name: "[Partners]", href: "#partners" },
        { name: "[Artists]", href: "#artists" },
        { name: "[Reviews]", href: "#reviews" },
    ];

    return (
        <header className="w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center relative">
                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-10 text-base font-thin uppercase text-[#f0efed]/[0.4]">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="hover:text-orange-500 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden fixed right-6 top-4 text-white z-50"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    {open ? (
                        <i className="ri-close-line text-3xl"></i>
                    ) : (
                        <i className="ri-menu-line text-3xl"></i>
                    )}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            {open && (
                <div className="px-20 fixed inset-0 bg-black/[0.4] backdrop-blur-sm flex flex-col items-center justify-center gap-8 font-thin text-lg uppercase uppercase z-40">
                    {/* Main Menu Links */}
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="hover:text-orange-500 transition"
                            onClick={() => setOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Extra CTAs */}
                    <div className="flex flex-col gap-4 flex-wrap justify-center mt-6 w-full">
                        <div className="text-base text-[#f0efed]/[0.4]">[Schedule a Visit]</div>
                        <a
                            href="https://g.page/r/CRhrBvXgDpG6EAE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${ctaBtn} relative pr-8 group overflow-hidden`}
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
                            href="https://g.page/r/CRhrBvXgDpG6EAE/review"
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
            )}
        </header>
    );
};

window.Header = Header;
