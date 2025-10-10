const { useEffect, useState, useRef } = React;

function Gallery() {
    const [visible, setVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [imageIndexes, setImageIndexes] = useState([]);
    const [fade, setFade] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasBeenVisible) {
                    setVisible(true);
                    setHasBeenVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasBeenVisible]);

    const allImages = [
        "/src/assets/images/works/aleksei1.jpg", "/src/assets/images/works/aleksei2.jpg", "/src/assets/images/works/aleksei3.jpg", "/src/assets/images/works/aleksei4.jpg",
        "/src/assets/images/works/daria1.jpg", "/src/assets/images/works/daria2.jpg", "/src/assets/images/works/daria3.jpg", "/src/assets/images/works/daria4.jpg",
        "/src/assets/images/works/eugene1.jpg", "/src/assets/images/works/eugene2.jpg", "/src/assets/images/works/eugene3.jpg", "/src/assets/images/works/eugene4.jpg",
        "/src/assets/images/works/max1.jpg", "/src/assets/images/works/max2.jpg", "/src/assets/images/works/max3.jpg", "/src/assets/images/works/max4.jpg",
        "/src/assets/images/works/olha1.jpg", "/src/assets/images/works/olha2.jpg", "/src/assets/images/works/olha3.jpg", "/src/assets/images/works/olha4.jpg",
        "/src/assets/images/works/mila1.jpg", "/src/assets/images/works/mila2.jpg", "/src/assets/images/works/mila3.jpg", "/src/assets/images/works/mila4.jpg",
        "/src/assets/images/works/selcuk1.jpg", "/src/assets/images/works/selcuk2.jpg", "/src/assets/images/works/selcuk3.jpg", "/src/assets/images/works/selcuk4.jpg",
    ];

    const visibleSpots = 10;

    const getRandomUniqueIndexes = () => {
        const shuffled = [...allImages.keys()].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, visibleSpots);
    };

    // Initialize images
    useEffect(() => {
        setImageIndexes(getRandomUniqueIndexes());
    }, []);

    // Smooth fade transition
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // fade out
            setTimeout(() => {
                setImageIndexes(getRandomUniqueIndexes()); // swap images
                setFade(false); // fade in
            }, 800); // fade duration
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const gridLayout = [
        [true, true, false, true, true],
        [true, true, false, true, true],
    ];
    const layout = gridLayout.flat();

    let imgCounter = 0;

    return (
        <section
            ref={sectionRef}
            id="gallery"
            className="w-full py-24 px-6 md:px-20 transition-all duration-1000 ease-out"
        >
            {/* Header */}
            <div
                className={`transition-all duration-1000 ease-out transform ${visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="relative text-right mb-12">
                    <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold">
                        Gallery
                    </div>
                    <span className="absolute -top-2 -right-5 text-xl sm:text-2xl md:text-3xl font-bold text-[#CC751B]">
                        8
                    </span>
                </div>
            </div>

            {/* Grid */}
            <div
                className={`grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-6 transition-opacity duration-[1000ms] ease-in-out ${fade ? "opacity-0" : "opacity-100"
                    }`}
            >
                {layout.map((hasImage, i) =>
                    hasImage ? (
                        <img
                            key={i}
                            src={allImages[imageIndexes[imgCounter++]]}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full h-full object-cover rounded-xs shadow-lg grayscale hover:grayscale-0 transition-transform duration-700 ease-out hover:scale-105"
                        />
                    ) : (
                        <div key={i} className="w-full h-full bg-transparent"></div>
                    )
                )}
            </div>
        </section>
    );
}

window.Gallery = Gallery;