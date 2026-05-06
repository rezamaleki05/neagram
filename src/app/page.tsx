import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* SECTION 01: HERO */}
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src="/videos/BG.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContainer}`}>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="heading-1">ADD PERSONALITY TO YOUR BUSINESS</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className={styles.heroSubtitle}>
              We blend strategy, creativity and performance to build brands that connect, influence and grow.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <div className={styles.heroActions}>
              <Button href="/contact" showIcon>Book a Strategy Session</Button>
              <Button href="/work" variant="outline">View Our Work</Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Trust Strip */}
        <div className={styles.trustStrip}>
          <p className={styles.trustText}>Trusted by ambitious brands across UAE and beyond.</p>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {/* Duplicate for infinite loop effect */}
              {["Dubai Smile", "Ladora Polyclinic", "Royal Dental", "Prime Health", "Papa Kanafa", "Monroe"].map((client, i) => (
                <span key={i} className={styles.clientLogo}>{client}</span>
              ))}
              {["Dubai Smile", "Ladora Polyclinic", "Royal Dental", "Prime Health", "Papa Kanafa", "Monroe"].map((client, i) => (
                <span key={`dup-${i}`} className={styles.clientLogo}>{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE MANIFESTO */}
      <section className={`section ${styles.manifesto}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">Marketing Needs More Personality.</h2>
          </ScrollReveal>
          <div className={styles.manifestoGrid}>
            <ScrollReveal direction="left" delay={0.2}>
              <div className={styles.manifestoContent}>
                <p className="text-lg">Our mission is to add authentic personality to brands and help them grow.</p>
                <p>We believe businesses don't need another faceless agency. They need a partner that combines transparency, strategic depth, creativity and unwavering support. We unlock brand potential through tailored strategies built for growth.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div className={styles.manifestoVisual}>
                <div className={styles.placeholderImage}>Editorial Visual</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHAT WE DO */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2" style={{ fontWeight: 500 }}>
              Everything A Business Needs<br />
              <strong style={{ fontWeight: 800 }}>From A to Z</strong>
            </h2>
          </ScrollReveal>
          <div className={styles.serviceGrid}>
            {[
              { title: "Digital Marketing", desc: "Data-led marketing systems built to reach and convert the right audience." },
              { title: "AI Marketing", desc: "Smarter automation, prediction, personalization and growth optimization." },
              { title: "Content Creation", desc: "Photography, videography, CGI, design and visual storytelling aligned with strategy." },
              { title: "Social Media Management", desc: "Platform-specific growth, audience building and measurable engagement." },
              { title: "Branding", desc: "Identity systems, positioning and personality-driven brand strategy." },
              { title: "Paid Ads", desc: "Performance campaigns designed for scale and ROI." }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className={styles.serviceCard}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className={styles.centerAction}>
              <Button href="/services" variant="outline">Explore Services</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 04: FEATURED CASE STUDIES */}
      <section className={`section ${styles.work}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">Growth Stories We Helped Build</h2>
          </ScrollReveal>
          <div className={styles.workGrid}>
            {[
              { client: "Elora", type: "Beauty Growth Campaign", tags: "Content + Performance Strategy", result: "+280% lead growth" },
              { client: "Hospitality Brand Launch", type: "Market Entry", tags: "Branding + Paid Media", result: "6X ROAS" },
              { client: "Healthcare Client Growth", type: "Patient Acquisition", tags: "Full Funnel Marketing", result: "Revenue growth case study" }
            ].map((work, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className={styles.workCard}>
                  <div className={styles.workVisual}>Project Visual</div>
                  <div className={styles.workMeta}>
                    <span className="text-lilac">{work.tags}</span>
                    <h3>{work.client} - {work.type}</h3>
                    <p className={styles.workResult}>{work.result}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className={styles.centerAction}>
              <Button href="/work" variant="outline">View All Case Studies</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 05: WHY NEAGRAM */}
      <section className={`section ${styles.why}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">Not Just Another Agency.</h2>
          </ScrollReveal>
          <div className={styles.whyGrid}>
            {[
              { title: "Strategic Thinking", desc: "Marketing built intentionally, not randomly." },
              { title: "Creative Direction", desc: "Content that moves people." },
              { title: "Performance Focus", desc: "Every campaign tied to measurable outcomes." },
              { title: "Deep Partnership", desc: "We act like growth partners, not vendors." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.whyCard}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: PROCESS */}
      <section className={`section ${styles.process}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">How We Build Growth</h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {[
              { num: "01", title: "Discovery", desc: "Understanding your business, audience and opportunities." },
              { num: "02", title: "Strategy", desc: "Crafting a tailored roadmap." },
              { num: "03", title: "Execution", desc: "Creative, media and campaign deployment." },
              { num: "04", title: "Optimization", desc: "Testing, refining and scaling." },
              { num: "05", title: "Growth", desc: "Long-term performance momentum." }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineNum}>{step.num}</div>
                  <div className={styles.timelineContent}>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07: CLIENT REVIEWS */}
      <section className={`section ${styles.reviews}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">Trusted Partnerships. Proven Results.</h2>
          </ScrollReveal>
          <div className={styles.reviewCards}>
            <ScrollReveal delay={0.2}>
              <div className={styles.reviewCard}>
                <p className={styles.quote}>"Neagram's strategic campaigns were instrumental in expanding our reach and boosting visibility."</p>
                <div className={styles.author}>- Healthcare Client</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className={styles.reviewCard}>
                <p className={styles.quote}>"Exceptional expertise and unwavering dedication to results."</p>
                <div className={styles.author}>- Retail Brand</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 08: INSIGHTS */}
      <section className={`section ${styles.insights}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">Ideas Worth Sharing</h2>
          </ScrollReveal>
          <div className={styles.insightsGrid}>
            {["AI in modern marketing", "Branding psychology", "Content trends", "Performance strategy insights"].map((title, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.insightCard}>
                  <h3>{title}</h3>
                  <Link href={`/insights/${i}`} className={styles.insightLink}>Read Article</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: FINAL CTA */}
      <section className={`section ${styles.finalCta}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <ScrollReveal>
              <h2 className="heading-2">Let's Build Something Distinctive.</h2>
              <p>Whether you need strategy, content or growth performance, let's build a brand people remember.</p>
              <div className={styles.ctaBoxAction}>
                <Button href="/contact" showIcon>Book a Discovery Call</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
