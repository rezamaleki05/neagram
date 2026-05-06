import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="container section" style={{ paddingTop: "120px" }}>
      <div className="request-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div className="request-copy">
          <span className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-lilac)", marginBottom: "1rem", display: "block" }}>Request a Service</span>
          <h1 className="heading-2" style={{ marginBottom: "1.5rem" }}>Tell us about your project.</h1>
          <p style={{ color: "rgba(245, 245, 247, 0.7)", fontSize: "1.125rem", lineHeight: "1.6" }}>Select a service, share your vision, and our team will follow up with a tailored strategy.</p>
        </div>

        <form id="serviceRequestForm" className="request-form" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            Service
            <select id="serviceSelect" required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none", appearance: "none" }}>
              <option value="Videography" style={{ color: "black" }}>Videography</option>
              <option value="Photography" style={{ color: "black" }}>Photography</option>
              <option value="Website Design" style={{ color: "black" }}>Website Design</option>
              <option value="Meta Ads" style={{ color: "black" }}>Meta Ads</option>
            </select>
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            Name
            <input type="text" name="name" placeholder="Your name" required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none" }} />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            Phone
            <input type="tel" name="phone" placeholder="Phone number" required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none" }} />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            Email
            <input type="email" name="email" placeholder="Email address" required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none" }} />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            Budget Range
            <select name="budget" required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none", appearance: "none" }}>
              <option value="under_5k" style={{ color: "black" }}>Under AED 5,000</option>
              <option value="5k_15k" style={{ color: "black" }}>AED 5,000 - AED 15,000</option>
              <option value="15k_50k" style={{ color: "black" }}>AED 15,000 - AED 50,000</option>
              <option value="50k_plus" style={{ color: "black" }}>AED 50,000+</option>
            </select>
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            Project brief
            <textarea name="project" rows={5} placeholder="Tell us about the scope, goals, and timeline." required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none", resize: "vertical" }}></textarea>
          </label>

          <Button type="submit" variant="primary" showIcon className="w-full">
            Submit Request
          </Button>
          <p id="requestMessage" className="request-message" style={{ marginTop: "1rem", color: "var(--color-lilac)", fontSize: "0.875rem" }}></p>
        </form>
      </div>
    </div>
  );
}
