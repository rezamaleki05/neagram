"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import styles from "./page.module.css";

const servicesData = [
  {
    id: "photography",
    title: "High-End Photography",
    description: "We capture the essence of your brand through stunning, editorial-quality photography. Whether it's fashion, product, or architectural photography, our shots are designed to leave a lasting impression and elevate your brand's visual identity.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "videography",
    title: "Cinematic Videography",
    description: "Tell your story in motion. Our cinematic videography services bring your vision to life with industry-grade equipment, dramatic lighting, and masterful storytelling. We produce commercials, brand documentaries, and engaging social content.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "website",
    title: "Premium Website Design",
    description: "Your digital storefront needs to be flawless. We build lightning-fast, ultra-modern websites with immersive animations and intuitive user experiences. We don't just build websites; we engineer digital destinations that convert.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ai",
    title: "AI Innovations",
    description: "Leverage the power of tomorrow, today. From automated workflows to generative AI assets, we integrate cutting-edge artificial intelligence into your business processes and creative campaigns to keep you steps ahead of the competition.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ScrollReveal>
          <h1 className={styles.title} style={{ fontWeight: 500 }}>
            Everything A Business Needs<br />
            <strong style={{ fontWeight: 800 }}>From A to Z</strong>
          </h1>
          <p className={styles.subtitle}>
            Our services are tailored for scale, growth, and building authentic connections.
          </p>
        </ScrollReveal>
      </section>

      {/* Services List */}
      <section className={styles.servicesList}>
        {servicesData.map((service, index) => (
          <ScrollReveal
            key={service.id}
            direction={index % 2 === 0 ? "right" : "left"}
            delay={0.2}
          >
            <div className={styles.serviceItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Button
                  href="/contact"
                  variant="primary"
                  showIcon
                >
                  Order Service
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
}
