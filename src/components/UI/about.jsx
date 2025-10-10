const { useState, useEffect, useRef } = React;

const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const About = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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
            id="about-section"
            ref={sectionRef}
            className="p-6 md:p-20 flex flex-col md:flex-row justify-between items-stretch gap-16"
        >
            {/* JOIN US SECTION */}
            <div
                className={`flex-1 transition-all duration-700 ease-out transform ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 text-left">
                    Join Our Team
                </div>

                <div className="mb-8 text-left gap-6 max-w-lg">
                    <h3 className="text-[#f0efed]/[0.4] font-thin">
                        [Our Collective]
                    </h3>
                    <p className="text-base md:text-[0.9rem] font-thin leading-relaxed">
                        Become part of our creative community. Collaborate and grow and be inspired
                        by those who share your passion for creativity and craftsmanship.
                    </p>
                </div>

                <div className="flex gap-4 flex-wrap mt-6">
                    <a
                        href="mailto:studio@thefourdeuces.nl"
                        className={`${ctaBtn} relative pr-8 group overflow-hidden`}
                    >
                        Join Now
                        <img
                            src="/src/assets/images/svg/arrow-top.svg"
                            alt="arrow"
                            className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                        />
                    </a>
                </div>
            </div>

            {/* REQUEST A TATTOO SECTION */}
            <div
                className={`flex-1 transition-all duration-700 ease-out transform ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 text-right text-[#CC751B]">
                    Request A Tattoo
                </div>

                <div className="mb-8 text-right max-w-lg gap-6 md:ml-auto">
                    <h3 className="text-[#f0efed]/[0.4] font-thin">
                        [Write Your Story]
                    </h3>
                    <p className="text-base md:text-[0.9rem] font-thin leading-relaxed">
                        Every tattoo tells a story. Work directly with our artists to design a piece
                        that captures who you are and what you stand for. We like all your ideas!
                    </p>
                </div>

                <div className="flex gap-4 flex-wrap justify-end mt-6">
                    <a
                        href="/book.html"
                        className={`${ctaBtn} relative pr-8 group overflow-hidden`}
                    >
                        Book Experience
                        <img
                            src="/src/assets/images/svg/arrow-top.svg"
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
