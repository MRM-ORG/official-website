"use client";
import Button from "@/atoms/Button/button";
import { dataLayerPush, getEventPayload } from "@/constants/helpers";
import { Events } from "@/enums/events";
import { poppins } from "@/utils/fonts";
import { DASHBOARD_SIGN_UP } from "@/utils/routes";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const Home: React.FC = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    dataLayerPush(getEventPayload(Events.LOADED));
  }, []);

  return (
    <>
      {openVideo && (
        <div className={styles.overlay} onClick={() => setOpenVideo(false)}>
          <iframe
            className={styles.iframe}
            src="https://youtube.com/embed/BHACKCNDMW8"
            title="YouTube Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <section
        id="home"
        className={`${styles.backgroundPrimarySoft} ${poppins.className}`}>
        <div className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={`/assets/banners/${
                isMobile ? "hero-mob.png" : "hero-1.png"
              }`}
              loading="lazy"
              width={1000}
              height={100}
              sizes="(max-width: 991px) 100vw, 50vw"
              alt="flux office"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div
                id="w-node-dc678c3f-8d8f-00ba-7466-144a35cd5f25-b8c484dd"
                className={styles.heroContent}>
                <h1
                  data-w-id="5cd846b7-aae4-71b2-ca7a-70d8b7616be7"
                  className={`${styles.display1} ${styles.marginBottom20}`}>
                  Unleash Your Website&apos;s Potential:{" "}
                  <div
                    className={`${styles.textGradient} ${styles.textEmphasize} ${poppins.className}`}>
                    Elevate Engagement With Reels
                    <br /> Content
                  </div>{" "}
                </h1>
                <p
                  data-w-id="aeeed16e-bfc0-1466-2017-39da55aff322"
                  className={styles.paragraphLarge}>
                  Fuel your website&apos;s growth journey. Truly engage your
                  audience to get more leads and customers.
                </p>
                <div className={styles.ctas}>
                  <Button
                    text="GET STARTED FOR FREE"
                    cta={DASHBOARD_SIGN_UP()}
                  />
                  <div>No credit card required!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
