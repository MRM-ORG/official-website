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

export const loadReels = (ui: boolean) => {
  const customizedWindow: CustomWindow = window;

  const loadReelsScript = () => {
    if (typeof customizedWindow.ReelsInitializer === "function") {
      COMPONENTS.forEach((component) => {
        // @ts-ignore
        const reels = new ReelsInitializer({
          style: ui ? 1 : 2,
          isPreviewMode: false,
          elementId: component.id,
          uid: "khUPDz1BMpgDLclzPc8pJIG8lfg1",
          storeId: "076262c3-8552-4613-a39c-cf330738a2ac",
        });
        reels.render();
      });
    }
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
