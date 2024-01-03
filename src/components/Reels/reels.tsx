"use client";

import Toggle from "@/atoms/Toggle/toggle";
import { poppins } from "@/utils/fonts";
import { isMobileDevice } from "@/utils/responsive";
import { useEffect, useState } from "react";
import styles from "./reels.module.css";
import ReactLoading from "react-loading";

const Loader = () => (
  <div className={styles.loader}>
    <ReactLoading type="spinningBubbles" color={"#7431f8"} />
  </div>
);

const Reels: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCircleUI, setIsCircleUI] = useState(true);
  const handleToggleChange = (state: string) => {
    setIsCircleUI(state === "Circle UI");
  };

  const renderPreviews = () => {
    // @ts-ignore
    const circle = new window.ReelsInitializer({
      style: 1,
      isPreviewMode: false,
      elementId: "paxify-app-id-1",
      uid: "khUPDz1BMpgDLclzPc8pJIG8lfg1",
      storeId: "076262c3-8552-4613-a39c-cf330738a2ac",
    });
    circle.render();

    // @ts-ignore
    const rectangle = new window.ReelsInitializer({
      style: 2,
      isPreviewMode: false,
      elementId: "paxify-app-id-2",
      uid: "khUPDz1BMpgDLclzPc8pJIG8lfg1",
      storeId: "076262c3-8552-4613-a39c-cf330738a2ac",
    });
    rectangle.render();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const loadScripts = () => {
    setIsLoading(true);
    const reelsScript = document.createElement("script");
    reelsScript.id = "reels-script";
    reelsScript.src = `https://cdn.jsdelivr.net/gh/paxify-llc/builds@${process.env.NEXT_PUBLIC_REELS_VERSION}/reelife/paxify-reelife.js`;

    const stylesheet = document.createElement("link");
    stylesheet.id = "reels-stylesheet";
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute(
      "href",
      `https://cdn.jsdelivr.net/gh/MRM-ORG/builds@${process.env.NEXT_PUBLIC_REELS_VERSION}/reelife/paxify-reelife.min.css`
    );

    document.body.appendChild(reelsScript);
    document.head.appendChild(stylesheet);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      // @ts-ignore
      if (typeof window.ReelsInitializer !== "undefined") {
        renderPreviews();
        clearInterval(intervalId);
      } else {
        loadScripts();
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
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
      {isLoading && <Loader />}
      <div className={styles.container}>
        <div
          style={{
            visibility: isLoading ? "hidden" : "visible",
          }}
          id="paxify-app-id-1"
          className={`paxify-app ${
            isCircleUI ? styles.active : styles.inactive
          }`}></div>
        <div
          style={{
            visibility: isLoading ? "hidden" : "visible",
          }}
          id="paxify-app-id-2"
          className={`paxify-app ${
            !isCircleUI ? styles.active : styles.inactive
          }`}></div>
        {/* {!isLoading && (
          <div
            className={styles.features}
            style={{
              top: !isMobileDevice() && isCircleUI ? "120px" : "240px",
            }}>
            <div className={styles.feature}>
              Story Experience on Your Website
            </div>
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
        )} */}
      </div>
      <div className={styles.semiHeading}>
        <span>Curiosity sparked? </span>
        <span className={styles.highlight}>
          Click{" "}
          <a target="_blank" href="https://reelife-demo.paxify.io">
            HERE
          </a>{" "}
          to step into our demo store and embark on a journey of discovery!
        </span>{" "}
        <span>Your adventure begins now.</span>
      </div>
    </section>
  );
};

export default Reels;
