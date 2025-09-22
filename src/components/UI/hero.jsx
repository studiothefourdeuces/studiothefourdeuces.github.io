const { useState, useRef, useEffect } = React;

const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const TypingText = ({ items, speed = 150, pause = 1000 }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = items[index % items.length];
        let timeout;

        if (!deleting && subIndex <= currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, subIndex));
                setSubIndex(subIndex + 1);
            }, speed);
        } else if (deleting && subIndex >= 0) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, subIndex));
                setSubIndex(subIndex - 1);
            }, speed);
        }

        if (!deleting && subIndex === currentWord.length + 1) {
            timeout = setTimeout(() => setDeleting(true), pause);
        }

        if (deleting && subIndex === -1) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % items.length);
            setSubIndex(0);
        }

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, items, speed, pause]);

    return <span className="text-[#CC751B]">{text}</span>;
};

const Card = () => {
    const logo = "./src/assets/images/logo-tfd.png";

    return (
        <div className="container noselect animate-float">
            <div className="canvas">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`} />
                ))}

                <div id="card">
                    <img src={logo} alt="TFD Logo" className="logo" />
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="home"
            ref={heroRef}
            className="about-panels p-6 md:p-20 font-thin text-sm md:text-base h-screen"
        >
            {/* Top corners */}
            <div
                className={`flex justify-between mb-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0s" }}
            >
                <div className="text-xs text-[#f0efed]/[0.4]">[The Four Deuces]</div>
                <div className="text-[#CC751B]">/ Established in 2023</div>
            </div>

            {/* Middle section */}
            <div
                className={`flex flex-col justify-center items-center h-[80%] transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.2s" }}
            >
                <div className="w-full md:w-1/3 flex flex-col items-center p-6">
                    <div className="w-full">
                        <Card />
                    </div>

                    <p className="mb-4 text-center animate-float">
                        We are a passionate team of artists that specialize in{" "}
                        <TypingText
                            items={[
                                "[Chicano]",
                                "[Black & Gray]",
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
                            ]}
                            speed={100}
                            pause={500}
                        />
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center mt-6">
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

            {/* Bottom section */}
            <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.4s" }}
            >
                {/* Bottom left - Scroll Down */}
                <div className="text-[#CC751B] text-center md:text-left w-full animate-zoom">
                    Scroll Down
                </div>

                {/* Bottom right - Amsterdam */}
                <div className="flex flex-col items-center md:items-end text-xs w-full">
                    <p className="mb-4 text-center md:text-right">Amsterdam, Netherlands</p>
                </div>
            </div>

        </div>
    );
};

window.Hero = Hero;
