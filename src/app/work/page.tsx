"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

// Define categories
const categories = ["All", "Video", "Photo", "Website", "Ads"];

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    category: "Video",
    title: "Luxury Retail Launch",
    image: "https://images.unsplash.com/photo-1515165562835-cb6a7e90b1b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    category: "Photo",
    title: "Hospitality Lifestyle Shoot",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    category: "Website",
    title: "Brand Experience Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    category: "Ads",
    title: "Meta Launch Campaign",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    category: "Video",
    title: "Corporate Storytelling",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    category: "Photo",
    title: "Product Editorial Series",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero Section */}
      <section className="section" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div className="container">
          <ScrollReveal>
            <h1 className="heading-2" style={{ marginBottom: "1rem" }}>Our Portfolio</h1>
            <p style={{ color: "rgba(245, 245, 247, 0.7)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto" }}>
              Discover our latest work across video production, photography, web design, and digital advertising.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <ScrollReveal delay={0.2}>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {categories.map((category) => (
            <button
              key={category}
              style={{
                background: activeCategory === category ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: activeCategory === category ? "var(--color-off-white)" : "rgba(245, 245, 247, 0.7)",
                padding: "0.75rem 1.5rem",
                borderRadius: "30px",
                fontSize: "0.875rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Portfolio Grid */}
      <section className="section cards-grid portfolio-grid" style={{ padding: "0" }}>
        <div className="container" style={{ maxWidth: "1400px", padding: "0 var(--spacing-md)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "2rem" }}>
            {filteredItems.map((item) => (
              <ScrollReveal key={item.id} delay={item.id * 0.1}>
                <article
                  className="portfolio-card"
                  data-category={item.category}
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    aspectRatio: "4 / 5",
                    cursor: "pointer",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="portfolio-image"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  ></div>
                  <div
                    className="portfolio-content"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "2rem",
                      background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.7)", marginBottom: "0.5rem", display: "block" }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "500", margin: "0" }}>{item.title}</h3>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}