"use client";

import { poppins } from "@/utils/fonts";
import styles from "./demonstration.module.css";

const Demonstration: React.FC = () => {
  return (
    <section id="showcase" className={`${styles.parent} ${poppins.className}`}>
      <div className={styles.background} />
      <h1 className={styles.heading}>Get to know the product</h1>
      <div className={styles.description}>
        Ready to take your website to the next level? It&apos;s time to grab
        your audience&apos;s attention and make a lasting impression.
        <br />
        <br />
        Embrace the power of Reelife and revolutionize the way you connect with
        your visitors.
        <br />
        <br />
      </div>
      <video className={styles.iframe} controls>
        <source src="/assets/videos/introduction.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Demonstration;
