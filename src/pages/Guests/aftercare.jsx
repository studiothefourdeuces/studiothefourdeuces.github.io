const { useEffect, useRef, useState } = React;

function Aftercare() {
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // track first appearance
  const sectionRef = useRef(null);

  const aftercareSteps = [
    "Leave the sterile compress or cling film for 3–5 hours after your session.",
    "Wash the tattoo twice daily with a mild, fragrance-free soap.",
    "Pat dry gently with a clean towel - never rub. Avoid scratching.",
    "Apply the ointment recommended or provided by your tattoo artist.",
    "Touch the tattoo as little as possible; always wash your hands before contact.",
    "Do not cover the tattoo with tight, dirty, or restrictive clothing.",
    "Refrain from using bandages or plasters over the tattoo.",
    "Avoid hot tubs, swimming pools, saunas, and steam baths until fully healed.",
    "Protect the tattoo from direct sunlight or tanning beds.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setVisible(true);
          setHasBeenVisible(true); // lock it after first intersection
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
      id="aftercare"
      className="w-full py-24 p-6 sm:p-6 md:p-20 transition-all duration-1000 ease-out"
    >
      {/* Section Header */}
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative inline-block mb-6 text-right w-full">
          <div className="text-5xl sm:text-8xl md:text-8xl font-extrabold leading-tight md:leading-snug">
            Aftercare
          </div>
          <span className="absolute -top-4 right-0 text-lg sm:text-xl md:text-2xl font-bold text-[#CC751B]">
            Guide
          </span>
        </div>
      </div>

      {/* Intro + Healing Tips */}
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="flex flex-col md:flex-row md:justify-end md:items-start gap-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-[0.9rem] font-thin text-left md:w-1/2">
            <div>
              <h3 className="text-[#f0efed]/[0.4] font-thin tracking-wide mb-2">
                [Why Aftercare Matters]
              </h3>
              <p>
                During the tattooing process, the skin breaks, creating a wound. If you care for the tattoo properly, it will take about six weeks for this wound to heal.
              </p>
            </div>
            <div>
              <h3 className="text-[#f0efed]/[0.4] font-thin tracking-wide mb-2">
                [Healing Tips]
              </h3>
              <p>
                Healing takes time. Let your tattoo breathe, stay clean, and avoid scratching or picking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aftercare Steps Cards */}
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible || hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aftercareSteps.map((step, index) => (
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

window.Aftercare = Aftercare;
