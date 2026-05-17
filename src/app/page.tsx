import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import {
  BarChart3,
  BrainCircuit,
  Camera,
  Users,
  Palette,
  Target,
  Lightbulb,
  Compass,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

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
            <p className={styles.heroLabel}>CREATIVE GROWTH AGENCY</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <h1 className="heading-1">
              ADD{" "}
              <span className="text-gradient">PERSONALITY</span>
              <br />
              TO YOUR BUSINESS
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5}>
            <p className={styles.heroSubtitle}>
              We blend strategy, creativity and performance to build brands
              that connect, influence and grow.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.7}>
            <div className={styles.heroActions}>
              <Button href="/contact" showIcon>
                Book a Strategy Call
              </Button>
              <Button href="/work" variant="outline">
                View Our Work
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust Strip */}
        <div className={styles.trustStrip}>
          <p className={styles.trustText}>
            Trusted by ambitious brands across UAE and beyond.
          </p>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {[
                "Dubai Smile",
                "Ladora Polyclinic",
                "Royal Dental",
                "Prime Health",
                "Papa Kanafa",
                "Monroe",
              ].map((client, i) => (
                <span key={i} className={styles.clientLogo}>
                  {client}
                </span>
              ))}
              {[
                "Dubai Smile",
                "Ladora Polyclinic",
                "Royal Dental",
                "Prime Health",
                "Papa Kanafa",
                "Monroe",
              ].map((client, i) => (
                <span key={`dup-${i}`} className={styles.clientLogo}>
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE MANIFESTO */}
      <section className={`section ${styles.manifesto}`}>
        <div className={styles.manifestoGlow} />
        <div className="container">
          <div className={styles.manifestoGrid}>
            {/* Left Column — Text */}
            <div className={styles.manifestoLeft}>
              <ScrollReveal>
                <p className={styles.sectionLabel}>WHO WE ARE</p>
                <h2 className="heading-2">
                  MARKETING NEEDS MORE{" "}
                  <span className="text-gradient">PERSONALITY.</span>
                </h2>
                <div className={styles.manifestoDivider} />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <div className={styles.manifestoContent}>
                  <p className="text-lg">
                    Our mission is to add authentic personality to brands and
                    help them grow.
                  </p>
                  <p>
                    Neagram Studio is a creative marketing agency focused on
                    branding, performance and storytelling that drives measurable
                    results. We believe businesses don&apos;t need another
                    faceless agency. They need a partner that combines
                    transparency, strategic depth, creativity and unwavering
                    support.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column — Values Visual */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className={styles.manifestoVisual}>
                <Image
                  src="/images/values-bg.jpg"
                  alt="Neagram Studio core values — Clear Vision, Strategy, Value, Growth, Client Focus, Integrity, Innovation, Excellence"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={styles.manifestoVisualImg}
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom — Feature Cards */}
          <div className={styles.manifestoFeatures}>
            {[
              {
                icon: Target,
                title: "Strategic Depth",
                desc: "Data-driven strategies that create real impact.",
              },
              {
                icon: Sparkles,
                title: "Creative Excellence",
                desc: "Ideas that connect, inspire and convert.",
              },
              {
                icon: ShieldCheck,
                title: "Transparency",
                desc: "Clear communication and honest partnership.",
              },
              {
                icon: User,
                title: "Unwavering Support",
                desc: "A partner that grows with you.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={0.3 + i * 0.1} direction="up">
                <div className={styles.manifestoFeature}>
                  <div className={styles.manifestoFeatureIcon}>
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: WHAT WE DO */}
      <section className={`section ${styles.services}`}>
        <div className={styles.servicesGlow} />
        <div className="container">
          <ScrollReveal>
            <p className={styles.sectionLabel}>WHAT WE DO</p>
            <h2 className="heading-2">
              EVERYTHING A BUSINESS
              <br />
              NEEDS FROM <span className="text-gradient">A TO Z</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className={styles.servicesSubtitle}>
              Full-funnel marketing solutions tailored to your brand.
            </p>
          </ScrollReveal>
          <div className={styles.serviceGrid}>
            {[
              {
                icon: BarChart3,
                title: "Digital Marketing",
                desc: "Data-driven campaigns, SEO, email marketing and ROI optimization.",
              },
              {
                icon: BrainCircuit,
                title: "AI Marketing",
                desc: "Smarter automation for faster growth, prediction and performance optimization.",
              },
              {
                icon: Camera,
                title: "Content Creation",
                desc: "Engaging content that tells your brand story.",
              },
              {
                icon: Users,
                title: "Social Media Management",
                desc: "Build, engage and grow your community.",
              },
              {
                icon: Palette,
                title: "Branding",
                desc: "Build a memorable identity that stands out.",
              },
              {
                icon: Target,
                title: "Paid Ads",
                desc: "High-converting ads that deliver real results.",
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <service.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className={styles.centerAction}>
              <Button href="/services" variant="outline" showIcon>
                Explore All Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 04: FEATURED CASE STUDIES */}
      <section className={`section ${styles.work}`}>
        <div className="container">
          <div className={styles.workHeader}>
            <div>
              <ScrollReveal>
                <p className={styles.sectionLabel}>CASE STUDIES</p>
                <h2 className="heading-2">
                  GROWTH STORIES
                  <br />
                  WE <span className="text-gradient">HELPED</span> BUILD
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <p className={styles.workHeaderText}>
                Real results.
                <br />
                Real partnerships.
                <br />
                Real growth.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.workGrid}>
            {[
              {
                client: "Healthcare",
                type: "Patient Growth",
                metric: "+173%",
                tag: "HEALTHCARE",
                color: "#7B2CFF",
              },
              {
                client: "E-Commerce",
                type: "Revenue Increase",
                metric: "+216%",
                tag: "E-COMMERCE",
                color: "#A970FF",
              },
              {
                client: "Real Estate",
                type: "Leads Generated",
                metric: "+188%",
                tag: "REAL ESTATE",
                color: "#7B2CFF",
              },
            ].map((work, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={styles.workCard}>
                  <div className={styles.workVisual}>
                    <span
                      className={styles.workTag}
                      style={{ backgroundColor: work.color }}
                    >
                      {work.tag}
                    </span>
                  </div>
                  <div className={styles.workMeta}>
                    <div className={styles.workMetric}>{work.metric}</div>
                    <h3>{work.type}</h3>
                    <Link href="/work" className={styles.workLink}>
                      VIEW CASE STUDY{" "}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className={styles.centerAction}>
              <Button href="/work" variant="outline" showIcon>
                View All Case Studies
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 05: WHY NEAGRAM */}
      <section className={`section ${styles.why}`}>
        <div className={styles.whyGlow} />
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-2">
              NOT JUST ANOTHER <span className="text-gradient">AGENCY</span>
            </h2>
          </ScrollReveal>
          <div className={styles.whyGrid}>
            {[
              {
                icon: Lightbulb,
                title: "Strategic Thinking",
                desc: "Every move is backed by strategy.",
              },
              {
                icon: Compass,
                title: "Creative Direction",
                desc: "Ideas that connect and perform.",
              },
              {
                icon: TrendingUp,
                title: "Performance Focus",
                desc: "We focus on what truly matters: results.",
              },
              {
                icon: ShieldCheck,
                title: "Deep Partnerships",
                desc: "We grow when you grow.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.whyItem}>
                  <div className={styles.whyIconWrap}>
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
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
            <p className={styles.sectionLabel}>OUR PROCESS</p>
            <h2 className="heading-2">
              HOW WE BUILD{" "}
              <span className="text-gradient">GROWTH</span>
            </h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We learn about your brand and audience.",
              },
              {
                num: "02",
                title: "Strategy",
                desc: "We craft a data-driven growth strategy.",
              },
              {
                num: "03",
                title: "Execution",
                desc: "We bring the strategy to life.",
              },
              {
                num: "04",
                title: "Optimization",
                desc: "We test, learn and improve.",
              },
              {
                num: "05",
                title: "Growth",
                desc: "Sustainable results over time.",
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineNum}>{step.num}</div>
                  <div className={styles.timelineDot} />
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
            <p className={styles.sectionLabel}>TESTIMONIALS</p>
            <h2 className="heading-2">
              TRUSTED PARTNERSHIPS
              <br />
              PROVEN <span className="text-gradient">RESULTS</span>
            </h2>
          </ScrollReveal>
          <div className={styles.reviewCards}>
            {[
              {
                quote:
                  "Neagram Studio transformed our brand and skyrocketed our online leads.",
                name: "Dr. A. Johnson",
                company: "Pearl Clinic",
                color: "#7B2CFF",
              },
              {
                quote:
                  "Their strategy and content made a huge impact on our revenue.",
                name: "M. Laurent",
                company: "Beauty Corner",
                color: "#A970FF",
              },
              {
                quote:
                  "Professional, creative, and result-driven team. Highly recommended!",
                name: "T. Al-rad",
                company: "E-commerce Brand",
                color: "#7B2CFF",
              },
              {
                quote:
                  "We saw a massive increase in quality leads and sales. Amazing work!",
                name: "R. Williams",
                company: "Real Estate Agency",
                color: "#A970FF",
              },
            ].map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className={styles.reviewCard}>
                  <div
                    className={styles.quoteIcon}
                    style={{ color: review.color }}
                  >
                    <Quote size={24} />
                  </div>
                  <p className={styles.quote}>{review.quote}</p>
                  <div className={styles.reviewAuthor}>
                    <span className={styles.authorName}>{review.name}</span>
                    <span className={styles.authorCompany}>
                      {review.company}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: INSIGHTS */}
      <section className={`section ${styles.insights}`}>
        <div className="container">
          <div className={styles.insightsHeader}>
            <ScrollReveal>
              <p className={styles.sectionLabel}>INSIGHTS</p>
              <h2 className="heading-2">
                IDEAS WORTH{" "}
                <span className="text-gradient">SHARING</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Button href="/insights" variant="outline" showIcon>
                Explore All Insights
              </Button>
            </ScrollReveal>
          </div>
          <div className={styles.insightsGrid}>
            {[
              {
                title: "The Future of Marketing is Personal",
                date: "May 12, 2025",
                category: "Strategy",
                image: "/images/insights/strategy.png",
              },
              {
                title: "AI Marketing Strategies That Actually Work",
                date: "May 5, 2025",
                category: "AI & Tech",
                image: "/images/insights/AI.png",
              },
              {
                title: "How to Build a Brand That Stands Out",
                date: "April 28, 2025",
                category: "Branding",
                image: null,
              },
              {
                title: "Performance Marketing Trends in 2025",
                date: "April 18, 2025",
                category: "Performance",
                image: null,
              },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={`/insights/${i}`} className={styles.insightCard}>
                  <div className={styles.insightImageWrap}>
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className={styles.insightImage}
                      />
                    ) : (
                      <div className={styles.insightPlaceholder} />
                    )}
                  </div>
                  <div className={styles.insightMeta}>
                    <span className={styles.insightCategory}>
                      {post.category}
                    </span>
                    <span className={styles.insightDate}>{post.date}</span>
                  </div>
                  <h3 className={styles.insightTitle}>{post.title}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: FINAL CTA */}
      <section className={`section ${styles.finalCta}`}>
        <div className={styles.ctaGlow1} />
        <div className={styles.ctaGlow2} />
        <div className="container">
          <div className={styles.ctaBox}>
            <ScrollReveal>
              <h2 className="heading-2">
                LET&apos;S BUILD SOMETHING{" "}
                <span className="text-gradient">DISTINCTIVE</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={styles.ctaText}>
                Whether you need strategy, content or growth performance,
                we&apos;re here to help your brand grow.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className={styles.ctaBoxAction}>
                <Button href="/contact" showIcon>
                  Book a Strategy Call
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
