const { useState } = React;

const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#868686] text-[#868686] text-xs bg-transparent font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const About = () => {
    const [activeImage, setActiveImage] = useState(0);

    const studioImages = [
        "/images/studio1.jpg",
        "/images/studio2.jpg",
        "/images/studio3.jpg",
    ];

    return (
        <div className="about-panels p-6 md:p-20 text-xs font-light">
            {/* Top corners */}
            <div className="flex justify-between mb-12">
                <div className="text-xs font-thin text-[#f0efed]/[0.4]">[Our Story]</div>
                <div className="text-xs font-thin text-orange-500">Scroll Down</div>
            </div>

            {/* Middle section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Middle left - About text */}
                <div className="flex flex-col justify-center md:w-1/2">
                    <p>
                        We are a passionate team of tattoo artists dedicated to bringing your ideas to life.
                        Our studio blends creativity, precision, and storytelling to ensure each tattoo is unique
                        and meaningful. From the first consultation to the finished artwork, we aim to deliver
                        a personal and unforgettable experience.
                    </p>
                </div>

                {/* Middle right - Studio images */}
                <div className="relative">
                    <div className="overflow-hidden rounded-xs mb-4">
                        <img
                            src={studioImages[activeImage]}
                            alt={`Studio ${activeImage + 1}`}
                            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105 filter grayscale"
                        />
                    </div>
                    {/* Dots for image selection */}
                    <div className="flex justify-center gap-2 mt-2">
                        {studioImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`w-3 h-3 rounded-full ${activeImage === idx ? "bg-white" : "bg-gray-500"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Bottom left - established */}
                <div className="text-sm text-orange-500">/ Established in 2023</div>

                {/* Bottom right - text and button */}
                <div className="flex flex-col items-start md:items-end">
                    <p className="mb-4">
                        Since opening our doors, we’ve been committed to creating a space where art, creativity
                        and professionalism meet. With years of experience under our belts, we’re confident that you’ll find us to be one of the best tattoo studios around!
                    </p>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${ctaBtn} relative pr-8 group overflow-hidden`}
                    >
                        More About Us
                        <img
                            src="/arrow-top.svg"
                            alt="arrow"
                            className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

window.About = About;