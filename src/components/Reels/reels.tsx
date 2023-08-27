"use client";

import Toggle from "@/atoms/Toggle/toggle";
import { poppins } from "@/utils/fonts";
import { isMobileDevice } from "@/utils/responsive";
import { useEffect, useState } from "react";
import { loadReels } from "../ReelsLoader/reelsLoader";
import styles from "./reels.module.css";
import { REELS_CONFIG_1, REELS_CONFIG_2 } from "@/constants/config";

const Reels: React.FC = () => {
  const [reelsSettings, setReelsSettings] = useState(REELS_CONFIG_1);
  const handleToggleChange = (state: string) => {
    setReelsSettings(state === "Circle UI" ? REELS_CONFIG_2 : REELS_CONFIG_1);
  };

  const isCircleUI = reelsSettings?.config?.layout === 1;

  useEffect(() => {
    loadReels();
  }, []);

  return (
    <section
      id="stories-demo"
      className={`${styles.reels} ${poppins.className}`}>
      <div className={styles.heading}>
        Compelling Narratives
        {!isMobileDevice() && <br />} for{" "}
        <span>Engaging Shopping Experiences</span>
      </div>
      <div className={styles.description}>
        Ready to take your website to the next level? It&apos;s time to grab
        your audience&apos;s attention and make a lasting impression.
        <br /> Embrace the power of ReeLife and revolutionize the way you
        connect with your visitors.
        <br />
        <br />
      </div>
      <Toggle
        onChange={handleToggleChange}
        value1="Circle UI"
        value2="Rectangle UI"
      />
      <div className={styles.container}>
        <div
          id="paxify-app-id-1"
          className={`paxify-app ${
            isCircleUI ? styles.active : styles.inactive
          }`}>
          <div>Loading Paxify LLC. Reels...</div>
        </div>
        <div
          id="paxify-app-id-2"
          className={`paxify-app ${
            !isCircleUI ? styles.active : styles.inactive
          }`}>
          <div>Loading Paxify LLC. Reels...</div>
        </div>
        <div
          className={styles.features}
          style={{
            top: !isMobileDevice() && isCircleUI ? "120px" : "240px",
          }}>
          <div className={styles.feature}>Story Experience on Your Website</div>
          <div className={styles.feature}>
            Mobile first full screen for a better viewing experience
          </div>
          <div className={styles.feature}>
            Use cover and animation to grab user attention
          </div>
          <div className={styles.feature}>
            Create and preview web story easily with studio
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reels;
