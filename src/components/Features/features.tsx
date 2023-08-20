"use client";

import { poppins } from "@/utils/fonts";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./features.module.css";

import "swiper/css";
import "swiper/css/pagination";

interface IFeatureProps {
  id: number;
  title: string;
  description: string;
  src: string;
  color?: string;
}

const TOP_FEATURES: IFeatureProps[] = [
  {
    id: 1,
    title: "Easy to Use",
    description:
      "Seamlessly add captivating reels and stories to your website with our easy-to-use, non-technical installation. User-friendliness guaranteed!",
    src: "/assets/icons/easy-to-use.svg",
  },
  {
    id: 2,
    title: "Deep Analytics",
    description:
      "Gain powerful insights with our component's comprehensive analytics, unlocking the full potential of your stories.",
    src: "/assets/icons/analytics.svg",
  },
  {
    id: 3,
    title: "Affordable",
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
      <div className={styles.headline}>
        Discover the <span>Key Features</span> of Reels Component: Elevate Your
        Website Engagement!
      </div>
      <div className={styles.features}>
        {TOP_FEATURES.map((feature: IFeatureProps) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                width={136}
                height={136}
                src={feature.src}
                alt={feature.description}
              />
            </div>
            <div className={styles.title}>{feature.title}</div>
            <div className={styles.description}>{feature.description}</div>
          </div>
        ))}
      </div>
      <div className={styles.featuresMobile}>
        <Swiper
          centeredSlides
          slidesPerView={1.1}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}>
          {TOP_FEATURES.map((feature: IFeatureProps) => (
            <SwiperSlide key={feature.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  width={136}
                  height={136}
                  src={feature.src}
                  alt={feature.description}
                />
              </div>
              <div className={styles.title}>{feature.title}</div>
              <div className={styles.description}>{feature.description}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
