const { StrictMode } = React;
const { createRoot } = ReactDOM;

function App() {
    const Header = window.Header;             // defined in hero.jsx
    const Hero = window.Hero;             // defined in hero.jsx
    const About = window.About;             // defined in about.jsx
    const Form = window.TattooBookingForm;   // defined in form.jsx
    const ArtistSection = window.Artists;    // defined in artists.jsx
    const FloatingReviews = window.FloatingReviews;     // defined in reviews.jsx
    const Footer = window.Footer;            // defined in footer.jsx

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Hero */}
            <section>
                <Header />
            </section>
            {/* Hero */}
            <section>
                <Hero />
            </section>
            {/* About Section */}
            <section>
                <About />
            </section>
            {/* Artists Section */}
            <section>
                <ArtistSection />
            </section>

            {/* Booking Form */}
            <section>
                <Form />
            </section>

             {/* Floating Reviews */}
            <section>
                <FloatingReviews />
            </section>

            {/* Footer with Map */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
