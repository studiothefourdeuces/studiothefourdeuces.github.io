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

                <div className="artist-button absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {artist.role}
                </div>

                <button
                  type="button"
                  className="instagram-button absolute top-2 right-2 bg-white/80 text-black text-xs px-2 py-1 rounded"
                  onClick={() => window.open(artist.instagram, "_blank")}
                >
                  Instagram
                </button>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.Artists = Artists;