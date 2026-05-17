"use client";

import { useActionState } from "react";
import { submitForm } from "./actions";
import styles from "./contact.module.css";
import {
  Send,
  Briefcase,
  User,
  Phone,
  Mail,
  Wallet,
  PenLine,
  ArrowRight,
  Lock,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function ContactForm() {
  const [state, formAction] = useActionState(submitForm, null);

  return (
    <div className={styles.formCard}>
      {/* Header */}
      <div className={styles.formHeader}>
        <div className={styles.formHeaderIcon}>
          <Send size={20} strokeWidth={1.5} />
        </div>
        <div className={styles.formHeaderText}>
          <h3>Let&apos;s build something distinctive.</h3>
          <p>Share your vision and we&apos;ll craft the right strategy.</p>
        </div>
      </div>

      {/* Form */}
      <form action={formAction} id="serviceRequestForm" className={styles.form}>
        {/* Service */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="serviceSelect">
            Service
          </label>
          <div className={styles.inputWrap}>
            <span className={styles.inputIcon}>
              <Briefcase size={16} strokeWidth={1.5} />
            </span>
            <select
              id="serviceSelect"
              name="service"
              required
              className={styles.selectField}
            >
              <option value="Videography">Videography</option>
              <option value="Photography">Photography</option>
              <option value="Website Design">Website Design</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="AI Services">AI Services</option>
              <option value="Branding">Branding</option>
              <option value="Social Media Management">
                Social Media Management
              </option>
              <option value="Multiple Services">Multiple Services</option>
            </select>
            <span className={styles.selectArrow}>
              <ChevronDown size={16} strokeWidth={1.5} />
            </span>
          </div>
        </div>

        {/* Name + Phone */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="nameInput">
              Name
            </label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>
                <User size={16} strokeWidth={1.5} />
              </span>
              <input
                type="text"
                id="nameInput"
                name="name"
                placeholder="Your name"
                required
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="phoneInput">
              Phone
            </label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>
                <Phone size={16} strokeWidth={1.5} />
              </span>
              <input
                type="tel"
                id="phoneInput"
                name="phone"
                placeholder="Phone number"
                required
                className={styles.inputField}
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="emailInput">
            Email
          </label>
          <div className={styles.inputWrap}>
            <span className={styles.inputIcon}>
              <Mail size={16} strokeWidth={1.5} />
            </span>
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="Email address"
              required
              className={styles.inputField}
            />
          </div>
        </div>

        {/* Budget Range */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="budgetSelect">
            Budget Range
          </label>
          <div className={styles.inputWrap}>
            <span className={styles.inputIcon}>
              <Wallet size={16} strokeWidth={1.5} />
            </span>
            <select
              id="budgetSelect"
              name="budget"
              required
              className={styles.selectField}
            >
              <option value="under_5k">Under AED 5,000</option>
              <option value="5k_15k">AED 5,000 - AED 15,000</option>
              <option value="15k_50k">AED 15,000 - AED 50,000</option>
              <option value="50k_plus">AED 50,000+</option>
            </select>
            <span className={styles.selectArrow}>
              <ChevronDown size={16} strokeWidth={1.5} />
            </span>
          </div>
        </div>

        {/* Project Brief */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="projectBrief">
            Project brief
          </label>
          <div className={styles.inputWrap}>
            <span
              className={styles.inputIcon}
              style={{ top: "0.875rem", alignItems: "flex-start" }}
            >
              <PenLine size={16} strokeWidth={1.5} />
            </span>
            <textarea
              id="projectBrief"
              name="project"
              rows={4}
              placeholder="Tell us about the scope, goals, and timeline."
              required
              className={`${styles.textareaField}`}
            />
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className={styles.submitBtn}>
          SUBMIT REQUEST
          <ArrowRight size={16} className={styles.submitIcon} />
        </button>

        {/* Message */}
        {state?.message && (
          <p
            className={`${styles.formMessage} ${
              state.success ? styles.formMessageSuccess : styles.formMessageError
            }`}
          >
            {state.message}
          </p>
        )}
      </form>

      {/* Trust Badges */}
      <div className={styles.trustBadges}>
        <div className={styles.trustBadge}>
          <Lock size={14} className={styles.trustBadgeIcon} />
          <span>
            Your information is
            <br />
            100% secure
          </span>
        </div>
        <div className={styles.trustBadge}>
          <Clock size={14} className={styles.trustBadgeIcon} />
          <span>
            We typically respond
            <br />
            within 24 hours
          </span>
        </div>
        <div className={styles.trustBadge}>
          <CheckCircle2 size={14} className={styles.trustBadgeIcon} />
          <span>
            No commitment,
            <br />
            just expert advice
          </span>
        </div>
      </div>
    </div>
  );
}