import ContactForm from "./Form";

export default function Contact() {
  return (
    <div className="container section" style={{ paddingTop: "120px" }}>
      <div className="request-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div className="request-copy">
          <span className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-lilac)", marginBottom: "1rem", display: "block" }}>Request a Service</span>
          <h1 className="heading-2" style={{ marginBottom: "1.5rem" }}>Tell us about your project.</h1>
          <p style={{ color: "rgba(245, 245, 247, 0.7)", fontSize: "1.125rem", lineHeight: "1.6" }}>Select a service, share your vision, and our team will follow up with a tailored strategy.</p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
