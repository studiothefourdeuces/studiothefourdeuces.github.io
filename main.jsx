const { StrictMode } = React;
const { createRoot } = ReactDOM;

function App() {
    const Header = window.Header;
    const Hero = window.Hero;
    const About = window.About;
    const ArtistSection = window.Artists;
    const FloatingReviews = window.FloatingReviews;
    const Footer = window.Footer;
    const Form = window.TattooBookingForm; // teaser version with button

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Artists Section */}
            <ArtistSection />

            {/* Booking teaser */}
            <Form />

            {/* Floating Reviews */}
            <FloatingReviews />

            {/* Footer */}
            <Footer />
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
