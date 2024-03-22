"use client";

import Button from "@/atoms/Button/button";
import { poppins } from "@/utils/fonts";
import { DASHBOARD_SIGN_UP } from "@/utils/routes";
import styles from "./shoppable.module.css";
import Image from "next/image";

const Shoppable: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <section
        id="success-stories"
        className={`${styles.container} ${poppins.className}`}>
        <div className={styles.content}>
          <div className={styles.heading}>Shoppable Content</div>
          <div className={styles.description}>
            Integrate hign-engagement content to your website.
            <br />
            <br />
            Icrease conversions by making your content &quot;shoppable&quot;
            with Relife.
          </div>
          <div className={styles.ctas}>
            <Button text="GET STARTED FOR FREE" cta={DASHBOARD_SIGN_UP()} />
            <div>No credit card required!</div>
          </div>
        </div>
        <div className={styles.titleImage}>
          <Image
            width={900}
            height={600}
            src="/assets/engagement/stories.png"
            alt="stories"
          />
        </div>
      </section>
    </div>
  );
};

export default Shoppable;
