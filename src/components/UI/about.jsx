const { useState, useEffect, useRef } = React;

const About = () => {
    const [activeImage, setActiveImage] = useState(0);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const partnerImages = [
        "/src/assets/images/partner1.png",
        "/src/assets/images/partner2.png",
        "/src/assets/images/partner3.png",
    ];

    const partnerLinks = [
        "https://www.tattooland.com/",
        "http://killerinktattoo.nl/",
        "https://www.dashatattoo.com/",
    ];

    // IntersectionObserver to trigger scroll-in animation
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

    return (
        <div
            id="about"
            ref={sectionRef}
            className="about-panels p-6 md:p-20 text-base md:text-[0.9rem] font-light"
        >
            {/* Section Title & Intro */}
            <div
                className={`flex flex-col items-end mb-6 gap-4 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0s" }}
            >
                <div className="relative text-right">
                    <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold">
                        Partners
                    </div>
                    <span className="absolute -top-2 -right-4 text-xl sm:text-2xl md:text-3xl font-bold text-[#CC751B]">
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

            {/* Partner images */}
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.2s" }}
            >
                {partnerImages.map((src, index) => (
                    <a
                        key={index}
                        href={partnerLinks[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 ease-in-out cursor-pointer block"
                        onMouseEnter={() => setActiveImage(index)}
                        onMouseLeave={() => setActiveImage(0)}
                    >
                        <img
                            src={src}
                            alt={`Partner ${index + 1}`}
                            className="w-full h-auto object-contain max-h-[120px] opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-600 ease-in-out"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

window.About = About;