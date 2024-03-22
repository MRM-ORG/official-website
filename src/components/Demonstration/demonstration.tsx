"use client";

import { poppins } from "@/utils/fonts";
import styles from "./demonstration.module.css";
import Button from "@/atoms/Button/button";
import { DASHBOARD_SIGN_UP } from "@/utils/routes";
import Image from "next/image";

const Demonstration: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <section
        id="Demonstration"
        className={`${styles.container} ${poppins.className}`}>
        <div className={styles.graphic}>
          <Image
            width={400}
            height={600}
            alt="engagement"
            src="/assets/engagement/engagement.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            Do you know why many visitors leave your website?
          </div>
          <div className={styles.subHeading}>
            They are not engaged with your content!
          </div>
          <div className={styles.description}>
            We make sure that doesn&apos;t happen. Unlock limitless
            possibilities to delight your audience.
          </div>
          <div className={styles.features}>
            <div className={styles.row}>
              <div>IMAGE</div>
              <div>
                Promote{" "}
                <span className={styles.emphasize}>
                  visually stunning content
                </span>
              </div>
            </div>
            <div className={styles.row}>
              <div>IMAGE</div>
              <div>
                Foster meaningful interaction{" "}
                <span className={styles.emphasize}>to sell more!</span>
              </div>
            </div>
            <div style={{ marginBottom: "40px" }} className={styles.row}>
              <div>IMAGE</div>
              <div>
                Get <span className={styles.emphasize}>valuable insights</span>{" "}
                with no effort.
              </div>
            </div>
            <Button text="GET STARTED FOR FREE" cta={DASHBOARD_SIGN_UP()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demonstration;
