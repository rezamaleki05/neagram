"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HomeIcon, CogIcon, BriefcaseIcon, UserIcon, EyeIcon, CameraIcon, VideoCameraIcon, GlobeAltIcon, CpuChipIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./Header.module.css";

export default function Header() {
  const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo-white.png" alt="Neagram Studio Logo" width={114} height={45} className={styles.logoImage} priority />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            <HomeIcon className={styles.navIcon} />
            Home
          </Link>
          <Link href="/services" className={styles.navLink}>
            <CogIcon className={styles.navIcon} />
            Services
          </Link>
          <div className={styles.dropdown}>
            <Link
              href="/work"
              className={styles.navLink}
              onMouseEnter={() => setIsWorksDropdownOpen(true)}
              onMouseLeave={() => setIsWorksDropdownOpen(false)}
            >
              <BriefcaseIcon className={styles.navIcon} />
              Work
              <ChevronDownIcon className={styles.dropdownIcon} />
            </Link>
            {isWorksDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/work/photography" className={styles.dropdownItem}>
                  <CameraIcon className={styles.dropdownIcon} />
                  Photography
                </Link>
                <Link href="/work/videography" className={styles.dropdownItem}>
                  <VideoCameraIcon className={styles.dropdownIcon} />
                  Videography
                </Link>
                <Link href="/work/website" className={styles.dropdownItem}>
                  <GlobeAltIcon className={styles.dropdownIcon} />
                  Website
                </Link>
                <Link href="/work/ai" className={styles.dropdownItem}>
                  <CpuChipIcon className={styles.dropdownIcon} />
                  AI
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className={styles.navLink}>
            <UserIcon className={styles.navIcon} />
            About
          </Link>
          <Link href="/insights" className={styles.navLink}>
            <EyeIcon className={styles.navIcon} />
            Insights
          </Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaButton}>
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </header>
  );
}
