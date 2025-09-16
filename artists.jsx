const Artists = () => {
    const artists = [
        { name: "Max", role: "Co-Founder", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/max.png" },
        { name: "Eugene", role: "Co-Founder", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/eugene.png" },
        { name: "Daria", role: "Resident Artist", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/daria.png" },
        { name: "Olha", role: "Resident Artist", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/olha.png" },
        { name: "Aleksei", role: "Resident Artist", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/aleksei.png" },
        { name: "Selçuk", role: "Resident Artist", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/selcuk.png" },
        { name: "Mila", role: "Resident Artist", instagram: "https://www.instagram.com/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Geometric" }], image: "/images/mila.png" },
    ];

    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#3c3c3c] text-[#868686] text-xs bg-transparent font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    return (
        <div className="artists-panels">
            <div className="artists-panel active p-4 sm:p-6 md:p-8">
                {/* Carousel container */}
                <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 hide-scrollbar">
                    {artists.map((artist, idx) => (
                        <div
                            key={idx}
                            className="artist-card flex-shrink-0 w-72 sm:w-80 md:w-96 snap-start flex flex-col p-4"
                        >
                            <div className="relative w-full h-96 mb-4 artist-image-wrapper">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="artist-image w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />

                                <div className="artist-button absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-xs">
                                    {artist.role}
                                </div>
                            </div>

                            <div className="artist-name mb-1 font-thin uppercase text-xl text-[#f0efed]">
                                {artist.name}
                            </div>

                            <div className="artist-styles mb-4 flex flex-wrap gap-1">
                                {artist.styles.map((style, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-thin uppercase whitespace-nowrap text-[#f0efed]/[0.4]"
                                    >
                                        {style.name}
                                        {i < artist.styles.length - 1 && ", "}
                                    </span>
                                ))}
                            </div>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

window.Artists = Artists;