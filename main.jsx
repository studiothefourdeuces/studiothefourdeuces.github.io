const { StrictMode } = React;
const { createRoot } = ReactDOM;

function App() {
  const Form = window.TattooBookingForm;   // defined in form.jsx
  const ArtistSection = window.Artists;    // defined in artists.jsx
  const Footer = window.Footer;            // defined in footer.jsx

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Artists Section */}
      <section>
        <ArtistSection />
      </section>

      {/* Booking Form */}
      <section>
        <Form />
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
