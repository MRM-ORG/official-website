import React, { useEffect } from "react";
import styles from "./reelife.module.css";

export const Reelife: React.FC = () => {
  useEffect(() => {
    const initialiseApp = () => {
      // @ts-expect-error: ReelsInitializer is not defined
      if (window.ReelsInitializer) {
        // @ts-expect-error: ReelsInitializer is not defined
        const circle = new window.ReelsInitializer({
          style: 1,
          isPreviewMode: false,
          elementId: "reelife",
          uid: "MqCJYGz4mISSkerq6HiDuOJmdNX2",
          storeId: "000443bd-0b86-43a7-a519-66d31c9558c1",
        });
        circle.render();
      }
    };

    const interval = setInterval(() => {
      initialiseApp();

      if (document.getElementById("story-container")) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.container} id="reelife"></div>;
};
