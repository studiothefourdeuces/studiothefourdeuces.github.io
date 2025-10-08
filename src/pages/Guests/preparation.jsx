const { useEffect, useRef, useState } = React;

function Preparation() {
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // track first appearance
  const sectionRef = useRef(null);

  const prepSteps = [
    "Get a full night’s sleep before your appointment.",
    "Eat a solid meal at least 1–2 hours before your session.",
    "Stay hydrated - bring a water bottle if needed.",
    "Avoid alcohol and blood-thinning medication 24 hours prior.",
    "Wear comfortable, loose clothing that allows tattoo access.",
    "Bring your ID, snacks and something to pass the time.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setVisible(true);
          setHasBeenVisible(true); // lock after first appearance
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
      id="prep-section"
      className="w-full py-24 p-6 sm:p-6 md:p-20 transition-all duration-1000 ease-out"
    >
      {/* Section Header */}
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative inline-block mb-6 text-left w-full">
          <div className="text-5xl sm:text-8xl md:text-8xl font-extrabold leading-tight md:leading-snug">
            Preparation
          </div>
          <span className="absolute -top-4 left-0 text-lg sm:text-xl md:text-2xl font-bold text-[#CC751B]">
            Guide
          </span>
        </div>
      </div>

      {/* Intro */}
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-6 text-base md:text-[0.9rem] font-thin text-left">
            <div>
              <h3 className="text-[#f0efed]/[0.4] font-thin tracking-wide mb-2">
                [Before You Arrive]
              </h3>
              <p>
                A good session starts with good preparation. Rest well, stay hydrated, and come ready for a great experience.
              </p>
            </div>
            <div>
              <h3 className="text-[#f0efed]/[0.4] font-thin tracking-wide mb-2">
                [What to Bring]
              </h3>
              <p>
                Wear comfortable clothes, eat a solid meal, and bring your ideas or references — your artist will take care of the rest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Steps Cards */}
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prepSteps.map((step, index) => (
            <div
              key={index}
              className="card flex flex-col p-6 rounded-xs relative font-thin transition-transform transition-colors duration-300 hover:scale-105 hover:border-[#f0efed] hover:text-[#f0efed] cursor-pointer"
            >
              <div className="absolute top-2 left-2 text-[#CC751B] text-xs px-2 py-1 rounded-xs">
                {index + 1}
              </div>
              <p className="mt-8">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Preparation = Preparation;