"use client";
import Button from "@/atoms/Button/button";
import { poppins } from "@/utils/fonts";
import PlayIcon from "@/vectors/PlayIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import { DASHBOARD_SIGN_UP, USER_DASHBOARD } from "@/utils/routes";
import { dataLayerPush, getEventPayload } from "@/constants/helpers";
import { Events } from "@/enums/events";

const Home: React.FC = () => {
  const [openVideo, setOpenVideo] = useState(false);

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
              src="/assets/banners/home.png"
              loading="lazy"
              width={1000}
              height={100}
              sizes="(max-width: 991px) 100vw, 50vw"
              alt="flux office"
              className={styles.heroImage}
            />
            {/* <div
              data-w-id="54174dcc-aea1-b483-3b76-af7c93538bcd"
              style={{ opacity: 1 }}
              onClick={() => setOpenVideo(true)}
              className={styles.play}>
              <a
                href="#"
                className={`${styles.playButton} ${styles.wInlineBlock} ${styles.wLightbox}`}
                aria-label="open lightbox"
                aria-haspopup="dialog">
                <div className={styles.playButtonPulse} />
                <div className={styles.materialIcon}>
                  <PlayIcon />
                </div>
              </a>
            </div> */}
          </div>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div
                id="w-node-dc678c3f-8d8f-00ba-7466-144a35cd5f25-b8c484dd"
                className={styles.heroContent}>
                <h1
                  data-w-id="5cd846b7-aae4-71b2-ca7a-70d8b7616be7"
                  className={`${styles.display1} ${styles.marginBottom20}`}>
                  Elevate Your Business with Seamless{" "}
                  <span
                    className={`${styles.textGradient} ${styles.textEmphasize} ${poppins.className}`}>
                    Innovation
                  </span>{" "}
                  and{" "}
                  <span
                    className={`${styles.textGradient} ${styles.textEmphasize} ${poppins.className}`}>
                    Simplicity
                  </span>
                </h1>
                <p
                  data-w-id="aeeed16e-bfc0-1466-2017-39da55aff322"
                  className={styles.paragraphLarge}>
                  Transform your online presence with our user-friendly
                  components and sections, revolutionizing the way you engage
                  with customers
                </p>
                <Button text="Get Started" cta={DASHBOARD_SIGN_UP()} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
