const { useEffect, useRef, useState } = React;

function Intro() {
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center py-24 px-6 md:px-20 transition-all duration-1000 ease-out"
    >
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title */}
        <div className="relative inline-block mb-6">
          <div className="text-5xl sm:text-8xl md:text-8xl font-extrabold leading-tight md:leading-snug">
            Guide
          </div>
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-lg sm:text-xl md:text-2xl font-bold text-[#CC751B]">
            Guests
          </span>
        </div>

        {/* Intro Text */}
        <div className="text-base md:text-[0.9rem] font-thin md:w-1/2 mx-auto text-center mb-10">
          <h3 className="text-[#f0efed]/[0.4] font-thin tracking-wide mb-2">
            [Guide]
          </h3>
          <p>
            This page is your complete guide — from how to prepare for your
            appointment to what to expect after your session. Take a moment to
            read through, and arrive ready for an unforgettable experience.
          </p>
        </div>

        {/* Scroll Down Text */}
        <div className="text-[#CC751B] text-center w-full animate-bounce mt-6">
          Scroll Down
        </div>
      </div>
    </section>
  );
}

window.Intro = Intro;
