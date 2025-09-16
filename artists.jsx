const Artists = () => {
    const [viewMode, setViewMode] = React.useState("line"); // "line" | "grid"

    const artists = [
        { name: "Max", role: "Co-Founder", instagram: "https://www.instagram.com/maxxonk_tattoo/", styles: [{ name: "Chicano" }, { name: "Realism" }, { name: "Neo-Traditional" }], image: "/images/max.png", works: ["/images/works/max1.jpg", "/images/works/max2.jpg", "/images/works/max3.jpg", "images/works/max4.jpg"] },
        { name: "Eugene", role: "Co-Founder", instagram: "https://www.instagram.com/novohatskytattoo/", styles: [{ name: "Chicano" }, { name: "Realism" }, { name: "Neo-Traditional" }], image: "/images/eugene.png", works: ["/images/works/eugene1.jpg", "/images/works/eugene2.jpg", "/images/works/eugene3.jpg", "/images/works/eugene4.jpg"] },
        { name: "Daria", role: "Resident Artist", instagram: "https://www.instagram.com/tattoo.daria/", styles: [{ name: "Watercolour" }, { name: "Fine Line" }, { name: "Abstract" }], image: "/images/daria.png", works: ["/images/works/daria1.jpg", "/images/works/daria2.jpg", "/images/works/daria3.jpg", "/images/works/daria4.jpg"] },
        { name: "Aleksei", role: "Resident Artist", instagram: "https://www.instagram.com/pan.tattooist/", styles: [{ name: "Abstract" }, { name: "Conceptual Art" }, { name: "Geometric" }], image: "/images/aleksei.png", works: ["/images/works/aleksei1.jpg", "/images/works/aleksei2.jpg", "/images/works/aleksei3.jpg", "/images/works/aleksei4.jpg"] },
        { name: "Olha", role: "Resident Artist", instagram: "https://www.instagram.com/tattoogalinskaya/", styles: [{ name: "Blackwork" }, { name: "Abstract" }, { name: "Botanical" }], image: "/images/olha.png", works: ["/images/works/olha1.jpg", "/images/works/olha2.jpg", "/images/works/olha3.jpg", "/images/works/olha4.jpg"] },
        { name: "Selçuk", role: "Resident Artist", instagram: "https://www.instagram.com/selcukozger.ink/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Botanical" }], image: "/images/selcuk.png", works: ["/images/works/selcuk1.jpg", "/images/works/selcuk2.jpg", "/images/works/selcuk3.jpg", "/images/works/selcuk4.jpg"] },
        { name: "Mila", role: "Resident Artist", instagram: "https://www.instagram.com/mila.delger/", styles: [{ name: "Freehand" }, { name: "Fine Line" }, { name: "Abstract" }], image: "/images/mila.png", works: ["/images/works/mila1.jpg", "/images/works/mila2.jpg", "/images/works/mila3.jpg", "/images/works/mila4.jpg"] },
    ];

    const tattooStyles = [
        "[Chicano]",
        "[Neo-Traditional]",
        "[Realism]",
        "[Blackwork]",
        "[Freehand]",
        "[Watercolor]",
        "[Minimal]",
        "[Fine line]",
        "[Abstract]",
        "[Conceptual art]",
        "[Geometric]",
        "[Botanical]",
    ];

    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#3c3c3c] text-[#868686] text-xs bg-transparent font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    return (
        <div className="artists-panels">
            <div className="artists-panel active p-4 sm:p-6 md:p-8">
                <div className="w-full mt-8">
                    <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6">
                        Artists
                    </div>

                    {/* Intro text + buttons */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-6 text-xs font-light">
                            <div>
                                <h3 className="font-medium mb-2 text-[#f0efed]/[0.4]">[Our Story]</h3>
                                <p>
                                    Our artists are more than tattooers — they’re storytellers.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2 text-[#f0efed]/[0.4]">[Our Approach]</h3>
                                <p>
                                    Each member of our team brings a unique style, creative vision, and years of experience to ensure every piece of art is as individual as the person wearing it.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 shrink-0 flex flex-wrap justyfy-end">
                            <button
                                onClick={() => setViewMode("line")}
                                className={`px-5 py-3 text-xs uppercase border ${viewMode === "line"
                                    ? "bg-black text-white"
                                    : "border-[#3c3c3c] text-[#868686]"
                                    }`}
                            >
                                Line
                            </button>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-5 py-3 text-xs uppercase border ${viewMode === "grid"
                                    ? "bg-black text-white"
                                    : "border-[#3c3c3c] text-[#868686]"
                                    }`}
                            >
                                Grid
                            </button>
                        </div>
                    </div>
                </div>

                {/* View Mode Switch */}
                {viewMode === "line" ? (
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
                                    href={artist.instagram}
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
                ) : (
                    <div className="flex flex-col gap-12">
                        {artists.map((artist, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
                            >
                                {/* Left column - profile (1/3) */}
                                <div className="artist-card flex flex-col p-4 md:col-span-1">
                                    <div className="relative w-full h-full mb-4 artist-image-wrapper">
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
                                        href={artist.instagram}
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

                                {/* Right column - works gallery (2/3) */}
                                <div className="artist-card md:col-span-2 h-full flex items-stretch overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar">
                                    {artist.works && artist.works.length > 0 ? (
                                        artist.works.map((work, i) => (
                                            <div
                                                key={i}
                                                className="relative px-4 flex-shrink-0 w-64 md:w-96 h-full overflow-hidden rounded-xs snap-start"
                                            >
                                                <img
                                                    src={work}
                                                    alt={`${artist.name} work ${i + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0"
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex items-center justify-center text-gray-400 h-full bg-gray-800 rounded-md">
                                            No works available
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Running Line / Ticker */}
            <div className="w-full overflow-hidden bg-[#cacaca] mb-6">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {tattooStyles.concat(tattooStyles).map((style, index) => (
                        <React.Fragment key={index}>
                            <span className="mx-4 text-[#010101] font-thin uppercase text-sm">
                                {style}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

window.Artists = Artists;
