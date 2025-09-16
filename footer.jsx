function Footer() {
    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#868686] text-[#868686] text-xs bg-transparent font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    const navBtn =
        "py-1 flex justify-start rounded-xs text-[#868686] text-xs bg-transparent font-thin uppercase transition hover:text-[#ffffff]";

    const address = "Van Baerlestraat 126 H, 1071 BD Amsterdam, Netherlands";
    const googleMapsLink = "https://www.google.com/maps/place/Van+Baerlestraat+126+H,+1071+BD+Amsterdam,+Netherlands";

    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-8 sm:p-6 md:p-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 mb-12">
                <div className="flex flex-col gap-4 md:col-span-1">
                    <h3 className="text-xs font-bold">The Four Deuces</h3>
                    <p className="text-xs">KVK: 88925161</p>
                    <p className="text-xs">{address}</p>
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
                    <h3 className="text-xs font-bold">Follow us</h3>
                    <a
                        href="https://www.instagram.com/thefourdeuces/"
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
                    <h3 className="text-xs font-bold">Clients</h3>
                    <button className={navBtn}>Artists</button>
                    <button className={navBtn}>Aftercare</button>
                    <button className={navBtn}>Preparation</button>
                    <button className={navBtn}>FAQ</button>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-bold">Artists</h3>
                    <button className={navBtn}>Residents</button>
                    <button className={navBtn}>Guests</button>
                    <button className={navBtn}>Facilities</button>
                    <button className={navBtn}>FAQ</button>
                </div>

                <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                    <h3 className="text-xs font-bold">Terms</h3>
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
                    <button className={`${ctaBtn} relative group overflow-hidden`}>Back to top</button>
                </div>

                {/* Second div */}
                <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                    <h3 className="text-xs font-bold">Collaboration</h3>
                    <button className={navBtn}>studio@thefourdeuces.nl</button>
                </div>

                {/* Third div */}
                <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                    <h3 className="text-xs font-bold">Booking</h3>
                    <button className={navBtn}>booking@thefourdeuces.nl</button>
                </div>
            </div>

            {/* Credits */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 pb-6 text-[#868686]">
                <div className="text-xs">© {currentYear} All rights reserved</div>
                <div className="hidden sm:block text-xs">•</div>
                <div className="text-xs flex items-center gap-1">Made by <button className={navBtn}>Artem Erdt</button></div>
            </div>
        </footer>
    );
}

ReactDOM.createRoot(document.getElementById("footer")).render(<Footer />);