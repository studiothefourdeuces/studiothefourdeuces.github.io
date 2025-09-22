const { useRef, useState, useEffect } = React;

const FloatingReviews = () => {
    const reviewsRef = useRef(null);
    const scrollRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // IntersectionObserver to trigger animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (reviewsRef.current) observer.observe(reviewsRef.current);
        return () => observer.disconnect();
    }, []);

    const reviews = [
        { text: "I recently had a tattoo at The Four Deuces and had a great experience. The artists were skilled, professional, and attentive. The studio is clean and comfortable. I'm very happy with my tattoo and highly recommend this studio. Big thanks to Max and the team for the excellent service.", author: "Iurii Cherniavskyi", rating: 5 },
        { text: "This is by far one of the best tattoo studios in Amsterdam! The salon is spacious, welcoming, and the artists are amazing. The coffee is also excellent 👍🏻 I had a fantastic experience and will definitely return.", author: "Nikita Van", rating: 5 },
        { text: "I had an amazing experience at The Four Deuces! The staff was friendly and professional, and the hygiene was perfect. My tattoo artist listened carefully to my ideas and delivered exceptional work. I am extremely satisfied and will return for future tattoos.", author: "Thomas Moran", rating: 5 },
        { text: "Top-notch studio! They take the time to do everything perfectly. Eugene helped me and is a true professional, striving for perfection in every detail. I am a very satisfied customer and highly recommend this studio. Well-deserved 5 stars!", author: "Tim van Toorn", rating: 5 },
        { text: "The best tattoo studio in Amsterdam – talented artists and an amazing vibe! I felt very welcome and the quality of the work exceeded my expectations. Highly recommended to anyone looking for a great tattoo experience.", author: "Rogier Broekhuis", rating: 5 },
        { text: "A wonderful place to get tattooed in Amsterdam. The artists are skilled, professional, and create a comfortable environment. I had an excellent experience and will definitely return.", author: "Monsieur Düsseltal", rating: 5 },
        { text: "I got my first tattoo here today by Daria and everything was perfect. She worked tirelessly on my design until it was exactly what I wanted. She is incredibly kind and professional ❤️ The result exceeded all my expectations!", author: "Nigella", rating: 5 },
        { text: "Max is a master tattoo artist. I’ve traveled for his work from Kyiv and always receive excellent results. The studio is cozy, clean, and spacious, with a magical atmosphere. Max is professional, talented, and a truly wonderful person.", author: "Y H", rating: 5 },
        { text: "Fantastic studio! I was well assisted and my wishes were fully understood. The sketches are made with care, and Max’s guidance ensured the best result. I’ve already completed half a sleeve and plan to finish it here. Highly recommended!", author: "Renzo de Punder", rating: 5 },
        { text: "I had a tattoo done by Daria. From the initial idea to the final result, everything was perfect. She works with great care and listens carefully to ensure the tattoo matches the client’s vision. Highly professional and talented.", author: "Valentina Sviatoha", rating: 5 },
        { text: "I want to thank Alexei @pan.tattooist for the incredible Ayrton Senna tattoo. From the first contact to the final moment, everything was smooth, professional, and enjoyable. Truly exceptional service.", author: "Vinicio Pastre", rating: 5 },
        { text: "Alexei is a perfectionist and a true artist. The studio has a great vibe, the staff is friendly, and the work is outstanding. I give 10/10 for both the atmosphere and the quality of the tattoos.", author: "Justin Frederickson", rating: 5 },
    ];

    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const amount = 300; // pixels to scroll per click
        scrollRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <div id="reviews" ref={reviewsRef} className="reviews-panel active">
            <div className="w-full mt-8 p-6 sm:p-6 md:p-20">
                {/* Section Heading */}
                <div
                    className={`relative inline-block mb-6 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    style={{ transitionDelay: "0s" }}
                >
                    <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold">
                        Reviews
                    </div>
                    <span className="absolute -top-2 -right-6 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">
                        {reviews.length}
                    </span>
                </div>

                {/* Intro Text & CTA */}
                <div
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    style={{ transitionDelay: "0.2s" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-6 text-base md:text-[0.9rem] font-thin">
                        <div>
                            <h3 className="text-[#f0efed]/[0.4]">[Our Clients]</h3>
                            <p>
                                Real words from people who’ve trusted us with their stories,
                                their ideas, and their skin.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#f0efed]/[0.4]">[Their Experience]</h3>
                            <p>
                                Every tattoo is more than ink — it’s an experience. Here’s what
                                they had to say.
                            </p>
                        </div>
                    </div>

                    {/* CTA + Arrow Buttons */}
                    <div className="flex gap-4 flex-wrap justify-end items-center">
                        <a
                            href="https://g.page/r/CRhrBvXgDpG6EAE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${ctaBtn} relative pr-8 group overflow-hidden`}
                        >
                            Leave a Review
                            <img
                                src="/arrow-top.svg"
                                alt="arrow"
                                className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                            />
                        </a>

                        {/* Desktop-only arrows */}
                        <div className="hidden md:flex gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="w-10 h-10 flex items-center justify-center border border-[#3c3c3c] rounded-full hover:border-white transition"
                            >
                                <img src="/arrow-left.svg" alt="Previous" className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-10 h-10 flex items-center justify-center border border-[#3c3c3c] rounded-full hover:border-white transition"
                            >
                                <img src="/arrow-right.svg" alt="Next" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating/scrolling reviews */}
            <div
                ref={scrollRef}
                className={`w-full relative mt-12 pt-4 cursor-grab overflow-x-auto scrollbar-hide transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: "0.4s" }}
            >
                <div className="flex gap-6 min-h-[300px] items-stretch animate-marquee hover:pause-animation">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="card flex-shrink-0 w-72 sm:w-80 md:w-96 flex flex-col p-4 gap-6"
                        >
                            <p className="text-base md:text-[0.9rem] flex-1">{review.text}</p>
                            <p className="font-thin uppercase text-xs text-[#f0efed]/[0.4]">
                                {review.author}
                            </p>
                            <p className="text-xs text-[#f0efed]/[0.4]">
                                {review.rating} star review from{" "}
                                <a
                                    href={review.url || "https://g.page/r/CRhrBvXgDpG6EAE/review"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 underline"
                                >
                                    Google
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

window.FloatingReviews = FloatingReviews;
