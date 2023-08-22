interface CustomWindow extends Window {
  reelsSettings?: any;
}

const COMMIT_HASH = "304200bfbb3f148487d4c06817df145cc076105b";

export const _loadReels = (props: any) => {
  const customizedWindow: CustomWindow = window;
  customizedWindow.reelsSettings = props;

  const _loadReelsScript = () => {
    const reelsScript = document.createElement("script");
    reelsScript.id = "reels-script";
    reelsScript.src = `https://cdn.jsdelivr.net/gh/MRM-ORG/builds@${COMMIT_HASH}/reelife/paxify-reelife.min.js`;
    // reelsScript.src = "/scripts/paxify-reelife.js";

    document.body.appendChild(reelsScript);
  };

  const _loadReelsStylesheet = () => {
    const stylesheet = document.createElement("link");
    stylesheet.id = "reels-stylesheet";
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute(
      "href",
      `https://cdn.jsdelivr.net/gh/MRM-ORG/builds@${COMMIT_HASH}/reelife/paxify-reelife.min.css`
    );
    document.head.appendChild(stylesheet);
  };

  _loadReelsStylesheet();
  _loadReelsScript();
};
