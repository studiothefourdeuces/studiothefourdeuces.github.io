function Footer() {
    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    const navBtn =
        "py-1 flex justify-start rounded-xs text-[#868686] text-base md:text-[0.9rem] bg-transparent font-thin uppercase transition hover:text-[#ffffff]";

    const address = "Van Baerlestraat 126 H, 1071 BD Amsterdam, Netherlands";
    const googleMapsLink = "https://maps.app.goo.gl/FtpEaaMod7Q8KDMr7";

    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-6 sm:p-6 md:p-20">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 mb-12">
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
                            src="/arrow-top.svg"
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
                            src="/arrow-top.svg"
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
            <div className="grid grid-cols-2 gap-12 md:gap-40 md:grid-cols-3 mb-12">
                <div className="flex flex-col gap-4">
                    <h3 className="text-base md:text-[0.9rem]">[Clients]</h3>
                    <button className={navBtn}>Artists</button>
                    <button className={navBtn}>Aftercare</button>
                    <button className={navBtn}>Preparation</button>
                    <button className={navBtn}>FAQ</button>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-base md:text-[0.9rem]">[Artists]</h3>
                    <button className={navBtn}>Residents</button>
                    <button className={navBtn}>Guests</button>
                    <button className={navBtn}>Facilities</button>
                    <button className={navBtn}>FAQ</button>
                </div>

                <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">[Terms]</h3>
                    <button className={navBtn}>
                        Terms and Conditions<span className="text-[10px] text-white ml-1">(English)</span>
                    </button>
                    <button className={navBtn}>
                        Terms and Conditions<span className="text-[10px] text-white ml-1">(Dutch)</span>
                    </button>
                </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 mb-12 border-b border-[#3c3c3c] pb-6">
                {/* First div stays full width on mobile */}
                <div className="flex flex-col gap-4 md:col-span-1">
                    <a
                        href="#home"
                        className={`${ctaBtn} relative group overflow-hidden`}
                        onClick={(e) => {
                            e.preventDefault(); // prevent default anchor behavior
                            const formEl = document.getElementById("home");
                            if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Back to top
                        <img
                            src="/arrow-top.svg"
                            alt="arrow"
                            className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                        />
                    </a>
                </div>

                {/* Second div */}
                <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">[Collaboration]</h3>
                    <button className={navBtn} href="emailto:studio@thefourdeuces.nl" target="_blank" rel="noopener noreferrer">studio@thefourdeuces.nl</button>
                </div>

                {/* Third div */}
                <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                    <h3 className="text-base md:text-[0.9rem]">[Booking]</h3>
                    <button className={navBtn} href="emailto:booking@thefourdeuces.nl" target="_blank" rel="noopener noreferrer">booking@thefourdeuces.nl</button>
                </div>
            </div>

            {/* Credits */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 pb-6 text-[#868686]">
                <div className="text-xs">© {currentYear} All rights reserved</div>
                <div className="hidden sm:block text-xs">•</div>
                <div className="text-xs flex items-center gap-1">
                    Desinged & crafted by <a className={navBtn} href="https://aerdt.xyz/" target="_blank" rel="noopener noreferrer">
                        Artem Erdt
                    </a>
                </div>
            </div>
        </footer>
    );
}

window.Footer = Footer;