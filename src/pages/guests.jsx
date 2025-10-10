const { useState, StrictMode } = React;
const { createRoot } = ReactDOM;

const Header = window.Header;
const Footer = window.Footer;
const Preparation = window.Preparation;
const Aftercare = window.Aftercare;
const Artists = window.Artists;

function GuestsPage() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative overflow-x-hidden">
            <Header open={open} setOpen={setOpen} />
            <div
                className={`transition-transform duration-500 ease-in-out transform ${open ? "translate-x-[80%]" : "translate-x-0"
                    }`}
            >
                {/* Stack all sections vertically */}
                <main className="min-h-screen flex flex-col items-stretch justify-start">
                    <section>
                        <Intro />
                    </section>

                    <section>
                        <Gallery />
                    </section>

                    <section>
                        <Preparation />
                    </section>

                    <section>
                        <Aftercare />
                    </section>

                    <section>
                        <Artists />
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GuestsPage />
    </StrictMode>
);
