"use client";

import { poppins } from "@/utils/fonts";
import Image from "next/image";
import styles from "./platforms.module.css";

import "swiper/css";
import "swiper/css/pagination";

type CardProps = {
  image: string;
  heading: string;
  description?: string;
  type: "PLATFORM" | "SUPPORT";
};

const PLATFORMS: CardProps[] = [
  {
    image: "/assets/platforms/shopify.png",
    heading: "Shopify",
    description: "Seamlessly add captivating reels to your Shopify store!",
    type: "PLATFORM",
  },
  {
    image: "/assets/platforms/bigCommerce.png",
    heading: "BigCommerce",
    description:
      "Using BigCommerce? We have a solution for you. Add reels to your store now!",
    type: "PLATFORM",
  },
  {
    image: "/assets/platforms/self-hosted.png",
    heading: "Self-Hosted",
    description:
      "We support a range of self-hosted solutions. Got you covered!",
    type: "PLATFORM",
  },
  {
    image: "/assets/platforms/custom.png",
    heading: "Didn't find your platform? Contact us!",
    type: "SUPPORT",
  },
];

const Card = (props: any) => {
  const { image, heading, description, type } = props;
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        width={290}
        height={320}
        src={image}
        alt="platform"
      />
      <div className={styles.cardContent}>
        <div
          className={
            type === "PLATFORM" ? styles.cardHeading : styles.supportHeading
          }>
          {heading}
        </div>
        {type === "PLATFORM" && (
          <div className={styles.cardDescription}>{description}</div>
        )}
        {type === "SUPPORT" && (
          <div className={styles.cta}>
            <button
              onClick={() => {
                const chatSupport = document.getElementById("chatSupport");
                chatSupport?.click();
              }}
              className={styles.ctaButton}>
              Contact us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Platforms: React.FC = () => {
  return (
    <section
      id="features"
      className={`${styles.container} ${poppins.className}`}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.headline}>
            Effortless Setup, Instant Results.
          </div>
          <div className={styles.description}>
            Easily add content to your website with Reelife
          </div>
        </div>
        <div className={styles.partner}>
          {PLATFORMS.map((platform: CardProps) => (
            <Card key={platform.heading} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
