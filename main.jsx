const { StrictMode, useState } = React;
const { createRoot } = ReactDOM;

function App() {
  const [open, setOpen] = useState(false);

  const Header = window.Header;
  const Hero = window.Hero;
  const About = window.About;
  const ArtistSection = window.Artists;
  const FloatingReviews = window.FloatingReviews;
  const Footer = window.Footer;
  const Form = window.TattooBookingForm;

  return (
    <div className="relative overflow-x-hidden bg-[#010101]">
      {/* Sidebar + Header */}
      <Header open={open} setOpen={setOpen} />
      
{/* Main content that shifts and scales */}
<div
  className={`transition-transform duration-500 ease-in-out transform ${
    open ? "translate-x-[80%]" : "translate-x-0"
  }`}
>
        <div className="w-full min-h-screen flex flex-col">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <Partners />

          {/* Artists Section */}
          <ArtistSection />

          {/* Join Section */}
          <About />

          {/* Floating Reviews */}
          <Reviews />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
