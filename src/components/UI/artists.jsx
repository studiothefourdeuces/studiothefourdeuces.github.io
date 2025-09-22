const { useState, useEffect, useRef } = React;

const Artists = () => {
  const [viewMode, setViewMode] = useState("line");
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const lineScrollRef = useRef(null);

  const artists = [
    { name: "Max", role: "Co-Founder", instagram: "https://www.instagram.com/maxxonk_tattoo/", styles: [{ name: "Chicano" }, { name: "Realism" }, { name: "Neo-Traditional" }], image: "/src/assets/images/max.png", works: ["/src/assets/images/works/max1.jpg", "/src/assets/images/works/max2.jpg", "/src/assets/images/works/max3.jpg", "/src/assets/images/works/max4.jpg"] },
    { name: "Eugene", role: "Co-Founder", instagram: "https://www.instagram.com/novohatskytattoo/", styles: [{ name: "Chicano" }, { name: "Realism" }, { name: "Neo-Traditional" }], image: "/src/assets/images/eugene.png", works: ["/src/assets/images/works/eugene1.jpg", "/src/assets/images/works/eugene2.jpg", "/src/assets/images/works/eugene3.jpg", "/src/assets/images/works/eugene4.jpg"] },
    { name: "Daria", role: "Resident Artist", instagram: "https://www.instagram.com/tattoo.daria/", styles: [{ name: "Watercolour" }, { name: "Fine Line" }, { name: "Abstract" }], image: "/src/assets/images/daria.png", works: ["/src/assets/images/works/daria1.jpg", "/src/assets/images/works/daria2.jpg", "/src/assets/images/works/daria3.jpg", "/src/assets/images/works/daria4.jpg"] },
    { name: "Aleksei", role: "Resident Artist", instagram: "https://www.instagram.com/pan.tattooist/", styles: [{ name: "Abstract" }, { name: "Conceptual Art" }, { name: "Geometric" }], image: "/src/assets/images/aleksei.png", works: ["/src/assets/images/works/aleksei1.jpg", "/src/assets/images/works/aleksei2.jpg", "/src/assets/images/works/aleksei3.jpg", "/src/assets/images/works/aleksei4.jpg"] },
    { name: "Olha", role: "Resident Artist", instagram: "https://www.instagram.com/tattoogalinskaya/", styles: [{ name: "Blackwork" }, { name: "Abstract" }, { name: "Botanical" }], image: "/src/assets/images/olha.png", works: ["/src/assets/images/works/olha1.jpg", "/src/assets/images/works/olha2.jpg", "/src/assets/images/works/olha3.jpg", "/src/assets/images/works/olha4.jpg"] },
    { name: "Selçuk", role: "Resident Artist", instagram: "https://www.instagram.com/selcukozger.ink/", styles: [{ name: "Minimal" }, { name: "Fine Line" }, { name: "Botanical" }], image: "/src/assets/images/selcuk.png", works: ["/src/assets/images/works/selcuk1.jpg", "/src/assets/images/works/selcuk2.jpg", "/src/assets/images/works/selcuk3.jpg", "/src/assets/images/works/selcuk4.jpg"] },
    { name: "Mila", role: "Resident Artist", instagram: "https://www.instagram.com/mila.delger/", styles: [{ name: "Freehand" }, { name: "Fine Line" }, { name: "Abstract" }], image: "/src/assets/images/mila.png", works: ["/src/assets/images/works/mila1.jpg", "/src/assets/images/works/mila2.jpg", "/src/assets/images/works/mila3.jpg", "/src/assets/images/works/mila4.jpg"] },
  ];

  const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

  // IntersectionObserver for scroll-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll controls
  const scrollLeft = () => {
    lineScrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    lineScrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div id="artists" ref={sectionRef} className="artists-panels">
      <div className="artists-panel active p-6 sm:p-6 md:p-20">

        {/* 1. Section Header */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0s" }}
        >
          <div className="relative inline-block mb-6">
            <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold">
              Artists
            </div>
            <span className="absolute -top-2 -right-4 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">
              {artists.length}
            </span>
          </div>
        </div>

        {/* 2. Intro + Buttons */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-6 text-base md:text-[0.9rem] font-thin">
              <div>
                <h3 className="text-[#f0efed]/[0.4]">[Our Story]</h3>
                <p>Our artists are more than tattooers — they’re storytellers.</p>
              </div>
              <div>
                <h3 className="text-[#f0efed]/[0.4]">[Our Approach]</h3>
                <p>
                  Each member of our team brings a unique style, creative vision,
                  and years of experience to ensure every piece of art is as
                  individual as the person wearing it.
                </p>
              </div>
            </div>

            {/* Line/Grid toggle + Arrows */}
            <div className="flex flex-col gap-4 shrink-0">
              <div className="flex gap-4 flex-wrap justify-end">
                <button
                  onClick={() => setViewMode("line")}
                  className={`px-5 py-3 text-base md:text-[0.9rem] font-thin uppercase border ${
                    viewMode === "line"
                      ? "bg-black text-white"
                      : "border-[#3c3c3c] text-[#868686]"
                  }`}
                >
                  Line
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-5 py-3 text-base md:text-[0.9rem] font-thin uppercase border ${
                    viewMode === "grid"
                      ? "bg-black text-white"
                      : "border-[#3c3c3c] text-[#868686]"
                  }`}
                >
                  Grid
                </button>
              </div>

              {/* Desktop-only arrows, visible only in line view */}
              {viewMode === "line" && (
                <div className="hidden md:flex gap-2 justify-end">
                  <button
                    onClick={scrollLeft}
                    className="w-10 h-10 flex items-center justify-center border border-[#3c3c3c] rounded-full hover:border-white transition"
                  >
                    <img src="/src/assets/images/svg/arrow-right.svg" alt="Previous" className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="w-10 h-10 flex items-center justify-center border border-[#3c3c3c] rounded-full hover:border-white transition"
                  >
                    <img src="/src/assets/images/svg/arrow-right.svg" alt="Next" className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Artist Cards */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {viewMode === "line" ? (
            <div
              ref={lineScrollRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 hide-scrollbar"
            >
              {artists.map((artist, idx) => (
                <div
                  key={idx}
                  className="card flex-shrink-0 w-72 sm:w-80 md:w-96 snap-start flex flex-col p-4"
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
                        className="text-base md:text-xs font-thin uppercase whitespace-nowrap text-[#f0efed]/[0.4]"
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
                      src="/src/assets/images/svg/arrow-top.svg"
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
                  <div className="card flex flex-col p-4 md:col-span-1">
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
                          className="text-base md:text-xs font-thin uppercase whitespace-nowrap text-[#f0efed]/[0.4]"
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
                        src="/src/assets/images/svg/arrow-top.svg"
                        alt="arrow"
                        className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                      />
                    </a>
                  </div>

                  <div className="card md:col-span-2 h-full flex items-stretch overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar">
                    {artist.works.map((work, i) => (
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

window.Artists = Artists;