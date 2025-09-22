const { useState, useEffect, useRef } = React;

const ctaBtn =
    "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const TattooBookingForm = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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
            id="book-teaser"
            ref={sectionRef}
            className="tattoo-form-teaser p-6 md:p-20 flex flex-col items-end"
        >
            <div
                className={`mb-6 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0s" }}
            >
                <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-4 text-right">
                    Request A Tattoo
                </div>
                <p className="text-base md:text-[0.9rem] font-thin text-right">
                    Ready to start your tattoo journey? Book an experience with us today!
                </p>
            </div>

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
    );
};

window.TattooBookingForm = TattooBookingForm;