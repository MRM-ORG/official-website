import { REELS_CONFIG_1, REELS_CONFIG_2 } from "@/constants/config";
import getConfig from "next/config";

interface CustomWindow extends Window {
  ReelsInitializer?: any;
}

const COMPONENTS = [
  {
    id: "paxify-app-id-1",
    reelsSettings: REELS_CONFIG_1,
  },
  {
    id: "paxify-app-id-2",
    reelsSettings: REELS_CONFIG_2,
  },
];

export const loadReels = (props?: any) => {
  const customizedWindow: CustomWindow = window;

  const loadReelsScript = () => {
    const reelsScript = document.createElement("script");
    reelsScript.id = "reels-script";
    reelsScript.src = `https://cdn.jsdelivr.net/gh/MRM-ORG/builds@${process.env.NEXT_PUBLIC_REELS_VERSION}/reelife/paxify-reelife.min.js`;
    // reelsScript.src =
    //   "https://cdn.jsdelivr.net/gh/MRM-ORG/builds@main/reelife/paxify-reelife.min.js";

    document.body.appendChild(reelsScript);

    reelsScript.onload = () => {
      if (typeof customizedWindow.ReelsInitializer === "function") {
        COMPONENTS.forEach((component) => {
          // @ts-ignore
          const reels = new ReelsInitializer({
            elementId: component.id,
            reelsSettings: component.reelsSettings,
          });
          reels.render();
        });
      }
    };
  };

  const loadReelsStylesheet = () => {
    const stylesheet = document.createElement("link");
    stylesheet.id = "reels-stylesheet";
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute(
      "href",
      `https://cdn.jsdelivr.net/gh/MRM-ORG/builds@${process.env.NEXT_PUBLIC_REELS_VERSION}/reelife/paxify-reelife.min.css`
    );
    document.head.appendChild(stylesheet);
  };

  loadReelsStylesheet();
  loadReelsScript();
};
