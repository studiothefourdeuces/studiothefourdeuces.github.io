const { useState, useRef, useEffect } = React;

const ctaBtn =
  "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

const Card = () => {
    const logo = "./src/assets/images/svg/404.svg";

    return (
        <div className="container noselect">
            <div className="canvas">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`} />
                ))}

                <div id="card" className="text-[#CC751B]">
                    <img src={logo} alt="404" className="logo" />
                </div>
            </div>
        </div>
    );
};

const NotFound = () => {
  const notFoundRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (notFoundRef.current) observer.observe(notFoundRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="not-found"
      ref={notFoundRef}
      className="p-6 md:p-20 font-thin text-sm md:text-base h-screen flex flex-col justify-center items-center text-center"
    >
      <div
        className={`transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card />

        <div className="mt-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#CC751B] tracking-wider">
            Oops!... 404
          </h1>
          <div>

            <p className="text-base md:text-[0.9rem] font-thin max-w-lg mx-auto">
              Looks like you’ve wandered off the map. Don't worry, let’s get you back home.
            </p>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center mt-8">
          <a
            href="/"
            className={`${ctaBtn} relative pr-8 group overflow-hidden`}
          >
            Go Home
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

window.NotFound = NotFound;
