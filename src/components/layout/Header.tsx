"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "./Header.module.css";

export default function Header() {
  const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo-white.png" alt="Neagram Studio Logo" width={114} height={45} className={styles.logoImage} priority />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
            Home
          </Link>
          <Link href="/services" className={`${styles.navLink} ${pathname?.startsWith('/services') ? styles.active : ''}`}>
            Services
          </Link>
          <div className={styles.dropdown}>
            <Link
              href="/work"
              className={`${styles.navLink} ${pathname?.startsWith('/work') ? styles.active : ''}`}
              onMouseEnter={() => setIsWorksDropdownOpen(true)}
              onMouseLeave={() => setIsWorksDropdownOpen(false)}
            >
              Work
              <ChevronDownIcon className={styles.dropdownIcon} />
            </Link>
            {isWorksDropdownOpen && (
              <div className={styles.dropdownMenu}
                   onMouseEnter={() => setIsWorksDropdownOpen(true)}
                   onMouseLeave={() => setIsWorksDropdownOpen(false)}>
                <Link href="/work/photography" className={styles.dropdownItem}>
                  Photography
                </Link>
                <Link href="/work/videography" className={styles.dropdownItem}>
                  Videography
                </Link>
                <Link href="/work/website" className={styles.dropdownItem}>
                  Website
                </Link>
                <Link href="/work/ai" className={styles.dropdownItem}>
                  AI
                </Link>
              </div>
            )}
          </div>
          <Link href="/insights" className={`${styles.navLink} ${pathname?.startsWith('/insights') ? styles.active : ''}`}>
            Insights
          </Link>
          <Link href="/about" className={`${styles.navLink} ${pathname?.startsWith('/about') ? styles.active : ''}`}>
            About
          </Link>

        </nav>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaButton}>
            Contact
            <ArrowRightIcon className={styles.ctaIcon} />
          </Link>
        </div>
      </div>
    </header>
  );
}
