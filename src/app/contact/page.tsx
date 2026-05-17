import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "./Form";
import styles from "./contact.module.css";
import { Target, Sparkles, Eye } from "lucide-react";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      {/* Background */}
      <div className={styles.contactBg}>
        <Image
          src="/images/Contact us.jpg"
          alt=""
          fill
          className={styles.contactBgImg}
          priority
        />
        <div className={styles.contactBgOverlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactGrid}>
          {/* Left Column */}
          <div className={styles.contactLeft}>
            <ScrollReveal>
              <div className={styles.contactLabel}>
                REQUEST A SERVICE
                <span className={styles.contactLabelLine} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <h1 className={styles.contactHeading}>
                Tell us about
                <br />
                your{" "}
                <span className={styles.contactHeadingAccent}>project.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.25}>
              <p className={styles.contactSubtitle}>
                We craft cinematic branding, performance marketing and digital
                experiences designed to make brands unforgettable.
              </p>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className={styles.contactFeatures}>
                {[
                  {
                    icon: Target,
                    title: "Strategy First",
                    desc: "Data-driven strategies built for real impact.",
                  },
                  {
                    icon: Sparkles,
                    title: "Creative Excellence",
                    desc: "Ideas that connect, inspire and convert.",
                  },
                  {
                    icon: Eye,
                    title: "Transparent Process",
                    desc: "Clear communication and honest partnership.",
                  },
                ].map((feature, i) => (
                  <div key={i} className={styles.contactFeatureItem}>
                    <div className={styles.contactFeatureIcon}>
                      <feature.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Form */}
          <ScrollReveal direction="up" delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
