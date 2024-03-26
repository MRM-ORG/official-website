"use client";

import { poppins } from "@/utils/fonts";
import Image from "next/image";
import styles from "./features.module.css";

import "swiper/css";
import "swiper/css/pagination";

interface IFeatureProps {
  id: number;
  image: string;
  description: string;
  src: string;
  color?: string;
}

const TOP_FEATURES: IFeatureProps[] = [
  {
    id: 1,
    image: "/assets/partners/shapermint.png",
    description:
      "Seamlessly add captivating reels and stories to your website with our easy-to-use, non-technical installation. User-friendliness guaranteed!",
    src: "/assets/icons/easy-to-use.svg",
  },
  {
    id: 2,
    image: "/assets/partners/polywood.png",
    description:
      "Gain powerful insights with our component's comprehensive analytics, unlocking the full potential of your stories.",
    src: "/assets/icons/analytics.svg",
  },
  {
    id: 3,
    image: "/assets/partners/levi.png",
    description:
      "Experience exceptional affordability without compromising on quality. Our product offers budget-friendly solutions for your business needs.",
    src: "/assets/icons/savings.svg",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className={`${styles.container} ${poppins.className}`}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.headline}>Benefit from our expertise</div>
          <div className={styles.description}>
            Our team has{" "}
            <strong>proven success across various business sectors.</strong> We
            already have helped small, medium, and large companies to grow.
          </div>
        </div>
        <div className={styles.partner}>
          {TOP_FEATURES.map((feature: IFeatureProps, index) => (
            <div key={feature.id} className={styles.card}>
              <Image
                width={index !== 2 ? 200 : 150}
                height={35}
                src={feature.image}
                alt="partner"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
