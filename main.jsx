const { StrictMode } = React;
const { createRoot } = ReactDOM;

function App() {
  const Form = window.TattooBookingForm;
  const ArtistSection = window.Artists;

  return (
    <div className="w-full min-h-screen">
      <section className="">
        <div className="">
          <ArtistSection />
        </div>
      </section>

      <section className="">
        <div className="">
          <Form />
        </div>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);