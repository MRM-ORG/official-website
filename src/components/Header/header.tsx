"use client";

import Image from "next/image";
import Link from "next/link";
import { LegacyRef, useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { poppins } from "@/utils/fonts";
import {
  DASHBOARD_LOGIN,
  DASHBOARD_SIGN_UP,
  SHOPIFY_LISTING,
  USER_DASHBOARD,
} from "@/utils/routes";
import Button from "@/atoms/Button/button";

const navLinks = [
  // {
  //   name: "Partners",
  //   href: "#features",
  // },
  {
    name: "Features",
    href: "#Demonstration",
  },
  {
    name: "Stories",
    href: "#shoppable",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Demo Store",
    href: "https://demo.reelife.paxify.io",
  },
  {
    name: "Find us on Shopify!",
    href: SHOPIFY_LISTING(),
  },
];

const Header: React.FC = () => {
  const [isExapanded, setIsExpanded] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const sections = document.querySelectorAll("section"); // Adjust the selector based on your section elements
        let active = "";

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            active = section.id;
          }
        });

        setActiveSection(active);
      }, 30); // Adjust the timeout value to control the frequency of updates
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to handle clicks outside the header
    const handleClickOutside = (event: any) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    // Add event listener to handle clicks outside the header
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSmoothScroll = (e: any) => {
    e.preventDefault();

    const target = e.target.getAttribute("href");
    if (target.startsWith("http")) {
      window.open(target, "_blank");
      return;
    }

    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(`.${styles.navLink}`);
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    const navLinksMobile = document.querySelectorAll(
      `.${styles.navLinkMobile}`
    );
    navLinksMobile.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });

      navLinksMobile.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const handleNaviconClick = () => {
    setIsExpanded(!isExapanded);
  };

  return (
    <div className={poppins.className}>
      <nav className={styles.main}>
        <div className={styles.navMenuFlex}>
          <ul
            className={`${styles.navMenu} ${styles.wListUnstyled} ${styles.wCurrent}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  // onClick={(e) => {
                  //   link.name !== "Demo Store"
                  //     ? handleSmoothScroll(e)
                  //     : () => {};
                  // }}
                  href={link.href}
                  className={`${styles.navLink} ${
                    activeSection === link.href.substring(1)
                      ? styles.activeNavLink
                      : ""
                  }`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navbarButtonWrapper}>
            <a className={styles.anchor} href={DASHBOARD_LOGIN()}>
              LOG IN
            </a>
            <Button text="GET STARTED FOR FREE" cta={DASHBOARD_SIGN_UP()} />
          </div>
        </div>
      </nav>
      <div
        ref={headerRef as LegacyRef<HTMLDivElement>}
        role="banner"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(false);
        }}
        className={styles.navbarInnerMobile}>
        <nav className={styles.container} role="navigation">
          <div className={styles.navbarWrapperMobile}>
            <a
              href="/"
              aria-current="page"
              className={`${styles.navbarBrandMobile} ${styles.wNavBrand} ${styles.wCurrent}`}
              aria-label="home">
              <div className={styles.logoContainer}>
                <Image
                  src="/assets/logo/logo.png"
                  loading="lazy"
                  alt=""
                  width={119.5}
                  height={38}
                  className="logo"
                />
                By Paxify
              </div>
            </a>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleNaviconClick();
              }}
              className={`${styles.menuButton} ${styles.wNavButton}`}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-1"
              aria-haspopup="menu"
              aria-expanded={isExapanded}>
              <div className={styles.burger}>
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isExapanded
                      ? "translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
                      : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  }}
                  className={`${styles.burgerLine} ${styles.ccTop}`}></div>
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isExapanded
                      ? "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                      : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  }}
                  className={`${styles.burgerLine} ${styles.ccMiddle}`}></div>
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isExapanded
                      ? "translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)"
                      : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  }}
                  className={`${styles.burgerLine} ${styles.ccBottom}`}></div>
              </div>
            </div>
          </div>
        </nav>
        <div
          style={{
            transform: isExapanded ? "translateY(20vw)" : "translateY(-60vw)",
          }}
          className={styles.navMenuFlexMobile}>
          <ul
            role="list"
            className={`${styles.navMenu} ${styles.wListUnstyled} ${styles.navMenuOpen}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLinkMobile}>
                  {link.name}
                </a>
              </li>
            ))}
            <hr className={styles.divider} />
            <li>
              <a
                href="#"
                onClick={() => (window.location.href = USER_DASHBOARD())}
                className={styles.navLinkMobile}>
                Go to Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
