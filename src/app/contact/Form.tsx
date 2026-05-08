"use client";

import Button from "@/components/ui/Button";
import { useActionState } from "react";
import { submitForm } from "./actions";

export default function ContactForm() {
  const [state, formAction] = useActionState(submitForm, null);

  return (
    <form action={formAction} id="serviceRequestForm" className="request-form" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        Service
        <select id="serviceSelect" name="service" required style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", color: "white", outline: "none", appearance: "none" }}>
          <option value="Videography" style={{ color: "black" }}>Videography</option>
          <option value="Photography" style={{ color: "black" }}>Photography</option>
          <option value="Website Design" style={{ color: "black" }}>Website Design</option>
          <option value="Meta Ads" style={{ color: "black" }}>Meta Ads</option>
          <option value="AI Services" style={{ color: "black" }}>AI Services</option>
          <option value="Multiple Services" style={{ color: "black" }}>Multiple Services</option>
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
      {state?.message && (
        <p id="requestMessage" className="request-message" style={{ marginTop: "1rem", color: state.success ? "var(--color-lilac)" : "red", fontSize: "0.875rem" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}