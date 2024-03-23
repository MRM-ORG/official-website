"use client";

import { poppins } from "@/utils/fonts";
import Image from "next/image";
import styles from "./reels.module.css";

const Reels: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.contentContainer}>
        <section
          id="success-stories"
          className={`${styles.container} ${poppins.className}`}>
          <div className={styles.content}>
            <div className={styles.heading}>Made to help you grow</div>
            <div className={styles.description}>
              Our customers already noticed:
            </div>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.metric}>4x</div>
                <div>Increase in time on site</div>
              </div>
              <div className={styles.box}>
                <div className={styles.metric}>20%</div>
                <div>Conversion increase, on average</div>
              </div>
            </div>
          </div>
          <div className={styles.review}>
            <div>
              <Image
                width={185}
                height={35}
                alt="author"
                src="/assets/reviews/rating.png"
              />
            </div>
            <div className={styles.userReview}>
              &quot;We use reels to promote specific products and sales. After
              really seeing our products, I guess our customers feel really
              motivated to buy.&quot;
            </div>
            <div className={styles.author}>
              <Image
                width={60}
                height={60}
                alt="author"
                className={styles.authorImage}
                src="/assets/reviews/author.png"
              />
              <div>
                <div>Clark Knight</div>
                <div>Marketing Executive</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reels;
