"use client";

import Link from "next/link";
import { ArrowRight, Target, Film, BarChart2, Code, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import styles from "./page.module.css";

const servicesData = [
  {
    id: "branding",
    icon: Target,
    title: "BRANDING",
    description: "We create distinctive identities that build trust and leave a lasting impression.",
    link: "/services/branding"
  },
  {
    id: "videography",
    icon: Film,
    title: "VIDEOGRAPHY",
    description: "Cinematic storytelling that captures attention and drives engagement.",
    link: "/services/videography"
  },
  {
    id: "digital-marketing",
    icon: BarChart2,
    title: "DIGITAL MARKETING",
    description: "Data-driven strategies that grow your brand and maximize results.",
    link: "/services/digital-marketing"
  },
  {
    id: "web-design",
    icon: Code,
    title: "WEB DESIGN",
    description: "High-converting websites designed to elevate your brand and generate leads.",
    link: "/services/web-design"
  },
  {
    id: "ai-solutions",
    icon: Sparkles,
    title: "AI SOLUTIONS",
    description: "Smart automation and AI tools that streamline processes and scale growth.",
    link: "/services/ai-solutions"
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      {/* Background Image Layer */}
      <div className={styles.heroBackground}></div>
      <div className={styles.heroOverlay}></div>

      {/* Hero Content Layer */}
      <div className={`container ${styles.heroContainer}`}>
        <ScrollReveal>
          <div className={styles.heroContent}>
            <p className={styles.sectionLabel}>WHAT WE DO</p>
            <h1 className={styles.title}>
              STRATEGY.<br />
              CREATIVE.<br />
              IMPACT.
            </h1>
            <p className={styles.subtitle}>
              We combine strategy, creativity, and technology<br />
              to build brands that stand out and convert.
            </p>
            <div className={styles.action}>
              <Button href="#explore" variant="outline" showIcon>
                EXPLORE SERVICES
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Cards Layer */}
        <div className={styles.servicesGridWrapper}>
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    <service.icon size={24} />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <Link href={service.link} className={styles.viewLink}>
                    VIEW SERVICE <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
