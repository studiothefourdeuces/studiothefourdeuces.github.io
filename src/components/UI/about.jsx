const { useState } = React;

const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#868686] text-[#868686] text-base md:text-[0.9rem] bg-transparent font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const About = () => {
    const [activeImage, setActiveImage] = useState(0);

    const partnerImages = [
        "/src/assets/images/partner1.png",
        "/src/assets/images/partner2.png",
        "/src/assets/images/partner3.png",
    ];

    return (
        <div className="about-panels p-6 md:p-20 text-base md:text-[0.9rem] font-light">
            {/* Top */}
            <div className="flex flex-col items-end mb-6 gap-4">
                <div className="relative text-right">
                    <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold">
                        Partners
                    </div>
                    <span className="absolute -top-2 -right-4 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">
                        3
                    </span>
                </div>

                <div className="text-base md:text-[0.9rem] font-thin md:w-1/3 text-right">
                    <h3 className="text-[#f0efed]/[0.4]">[Our Partners]</h3>
                    <p>
                        We collaborate with the industry’s top suppliers to ensure every product we create meets the highest standards.
                    </p>
                </div>
            </div>

            {/* Middle section: Partner images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {partnerImages.map((src, index) => (
                    <div
                        key={index}
                        className="transition-transform duration-300 ease-in-out opacity-60 hover:opacity-100 hover:scale-105 cursor-pointer"
                        onMouseEnter={() => setActiveImage(index)}
                        onMouseLeave={() => setActiveImage(0)}
                    >
                        <img src={src} alt={`Partner ${index + 1}`} className="w-full h-auto object-contain max-h-[120px]" />
                    </div>
                ))}
            </div>

        </div>
    );
};

window.About = About;
