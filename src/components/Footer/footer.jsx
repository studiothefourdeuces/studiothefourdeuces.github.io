const { useState, useRef, useEffect } = React;

function Footer() {
    const footerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    const navBtn =
        "py-1 flex justify-start rounded-xs text-[#868686] text-base md:text-[0.9rem] bg-transparent font-thin uppercase transition hover:text-[#ffffff]";

    const address = "Van Baerlestraat 126 H, 1071 BD Amsterdam, Netherlands";
    const googleMapsLink = "https://maps.app.goo.gl/FtpEaaMod7Q8KDMr7";
    const currentYear = new Date().getFullYear();

    // IntersectionObserver for scroll-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (footerRef.current) observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="p-6 sm:p-6 md:p-20">
            {/* Row 1 */}
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 mb-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0s" }}
            >
                <div className="flex flex-col gap-4 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">The Four Deuces</h3>
                    <p className="text-base md:text-[0.9rem] text-[#f0efed]/[0.4]">KVK: 88925161</p>
                    <p className="text-base md:text-[0.9rem] text-[#f0efed]/[0.4]">{address}</p>
                    <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${ctaBtn} relative group overflow-hidden`}
                    >
                        Google Maps
                        <img
                            src="/src/assets/images/svg/arrow-top.svg"
                            alt="arrow"
                            className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                        />
                    </a>
                    <h3 className="text-base md:text-[0.9rem]">[Follow us]</h3>
                    <a
                        href="https://www.instagram.com/the.four.deuces/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${ctaBtn} relative group overflow-hidden`}
                    >
                        Instagram
                        <img
                            src="/src/assets/images/svg/arrow-top.svg"
                            alt="arrow"
                            className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                        />
                    </a>
                </div>
                <div className="md:col-span-2">
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCw4ErXhC0C4CyoBgejvSvP6IzbJVlt6Yk&q=The+Four+Deuces+Amsterdam&zoom=16&maptype=roadmap"
                        width="100%"
                        height="300"
                        style={{ border: 0, filter: "grayscale(100%) contrast(80%)" }}
                        allowFullScreen
                        loading="lazy"
                        title="The Four Deuces Location"
                        className="rounded-xs"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div
                className={`grid grid-cols-2 gap-12 md:gap-40 md:grid-cols-3 mb-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.2s" }}
            >
                <div className="flex flex-col gap-4">
                    <h3 className="text-base md:text-[0.9rem]">[Clients]</h3>
                    <a href="/guests.html#preparation" className={navBtn}>Preparation</a>
                    <a href="/guests.html#aftercare" className={navBtn}>Aftercare</a>
                    <a href="/guests.html#artists" className={navBtn}>Artists</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-base md:text-[0.9rem]">[Artists]</h3>
                    <a href="/404.html" className={navBtn}>Residents</a>
                    <a href="/404.html" className={navBtn}>Guests</a>
                    <a href="/404.html" className={navBtn}>Facilities</a>
                </div>

                <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">[Terms]</h3>
                    <a
                        href="/terms.html"
                        className={navBtn}
                    >
                        Terms and Conditions
                    </a>
                    <a href="/404.html" className={navBtn}>FAQ</a>
                </div>
            </div>

            {/* Row 3 */}
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 mb-12 border-b border-[#3c3c3c] pb-6 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.4s" }}
            >
                <div className="flex flex-col gap-4 md:col-span-1">
                    <a
                        href="#home"
                        className={`${ctaBtn} relative group overflow-hidden`}
                        onClick={(e) => {
                            e.preventDefault();
                            const formEl = document.getElementById("home");
                            if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Back to top
                        <img
                            src="/src/assets/images/svg/arrow-top.svg"
                            alt="arrow"
                            className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                        />
                    </a>
                </div>

                <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">[Collaboration]</h3>
                    <a href="mailto:studio@thefourdeuces.nl" className={navBtn}>
                        studio@thefourdeuces.nl
                    </a>
                </div>

                <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">[Booking]</h3>
                    <a href="mailto:booking@thefourdeuces.nl" className={navBtn}>
                        booking@thefourdeuces.nl
                    </a>
                </div>
            </div>

            {/* Credits */}
            <div
                className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 pb-6 text-[#868686] transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.6s" }}
            >
                <div className="text-xs">© {currentYear} All rights reserved</div>
                <div className="hidden sm:block text-xs">•</div>
                <div className="text-xs flex items-center gap-1">
                    Designed & crafted by{" "}
                    <a className='{navBtn} text-xs hover:text-white' href="https://aerdt.xyz/" target="_blank" rel="noopener noreferrer">
                        Artem Erdt
                    </a>
                </div>
            </div>
        </footer>
    );
}

window.Footer = Footer;
