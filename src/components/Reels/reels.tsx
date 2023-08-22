"use client";

import Toggle from "@/atoms/Toggle/toggle";
import { poppins } from "@/utils/fonts";
import { isMobileDevice } from "@/utils/responsive";
import { useEffect, useState } from "react";
import { _loadReels } from "../ReelsLoader/reelsLoader";
import styles from "./reels.module.css";

const Stories = [
  {
    id: "story-1",
    container: {
      border: {
        color: "#7431f8",
        width: 4,
      },
      background: {
        src: "https://picsum.photos/150/250",
      },
      author: {
        src: "https://picsum.photos/210/210",
      },
      isViewed: false,
    },
    player: [
      {
        id: 1,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1080/1920",
          timeout: 5000,
          type: "image",
        },
        enhancements: {
          audio: {
            src: "https://cdn.shopify.com/s/files/1/0762/0499/8931/files/mixkit-game-show-suspense-waiting-667.wav?v=1689275490",
          },
        },
        layout: {
          design: 1,
          isLiked: true,
          likeButton: true,
          author: "https://picsum.photos/105/105",
          title: "Unleash Your Inner Artist",
          description: "by Chef John Delucie",
          cta: {
            text: "SHOP NOW",
            link: "https://google.com",
            backgroundColor: "#2ecc71",
          },
        },
      },
      {
        id: 2,
        content: {
          width: 1080,
          height: 1920,
          timeout: 60000,
          source:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          type: "video/mp4",
        },
        layout: {
          design: 1,
          likeButton: true,
          isLiked: false,
          author: "https://picsum.photos/106/104",
          title: "Achieve Mindfulness",
          description: "by Sarah Wilson",
          cta: {
            text: "VISIT LINK",
            link: "https://google.com",
            backgroundColor: "#e1306c",
          },
        },
      },
      {
        id: 3,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1090/1930",
          type: "image",
        },
        layout: {
          likeButton: true,
        },
      },
      {
        id: 4,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1070/1990",
          type: "image",
          timeout: 4000,
        },
        layout: {
          design: 1,
          likeButton: true,
          isLiked: true,
          author: "https://picsum.photos/103/103",
          title: "Elevate Your Fitness Journey",
          description: "by Dr. Barbara Sturm",
        },
      },
      {
        id: 5,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1085/1930",
          type: "image",
        },
        enhancements: {
          audio: {
            src: "https://cdn.shopify.com/s/files/1/0762/0499/8931/files/mixkit-intro-transition-1146.wav?v=1689275489",
          },
        },
      },
    ],
  },
  {
    id: "story-2",
    container: {
      border: {
        color: "#e1306c",
        width: 4,
      },
      background: {
        src: "https://picsum.photos/151/251",
      },
      author: {
        src: "https://picsum.photos/209/211",
      },
      isViewed: false,
    },
    player: [
      {
        id: 6,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1080/1921",
          type: "image",
          timeout: 3000,
        },
        enhancements: {
          audio: {
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          },
        },
        layout: {
          design: 1,
          likeButton: true,
          isLiked: true,
          author: "https://picsum.photos/104/101",
          title: "Unlock Inner Peace",
          description: "by Vex King",
          cta: {
            text: "SHOP NOW",
            link: "https://google.com",
            backgroundColor: "#3498db",
          },
        },
      },
    ],
  },
  {
    id: "story-3",
    container: {
      border: {
        color: "#7431f8",
        width: 4,
      },
      background: {
        src: "https://picsum.photos/152/252",
      },
      author: {
        src: "https://picsum.photos/211/207",
      },
      isViewed: false,
    },
    player: [
      {
        id: 7,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1080/1922",
          type: "image",
          timeout: 5000,
        },
      },
      {
        id: 10,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1081/1929",
          type: "image",
          timeout: 3000,
        },
      },
    ],
  },
  {
    id: "story-4",
    container: {
      border: {
        color: "#e1306c",
        width: 4,
      },
      background: {
        src: "https://picsum.photos/153/253",
      },
      author: {
        src: "https://picsum.photos/207/207",
      },
      isViewed: false,
    },
    player: [
      {
        id: 8,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1080/1923",
          type: "image",
          timeout: 4500,
        },
      },
    ],
  },
  {
    id: "story-5",
    container: {
      border: {
        color: "#7431f8",
        width: 4,
      },
      background: {
        src: "https://picsum.photos/154/249",
      },
      author: {
        src: "https://picsum.photos/209/216",
      },
      isViewed: false,
    },
    player: [
      {
        id: 9,
        content: {
          width: 1080,
          height: 1920,
          source: "https://picsum.photos/1080/1919",
          type: "image",
          timeout: 7000,
        },
      },
    ],
  },
];

const REELS_CONFIG_1 = {
  id: "reels-demo-circle",
  config: {
    layout: 2,
    navigation: {
      show: true,
      color: "white",
    },
    container: {
      storiesPerView: {
        mobile: {
          small: 1.5,
          medium: 1.6,
          large: 1.7,
        },
        tablet: 3.7,
        desktop: 3.65,
      },
    },
    overlay: {
      slidesPerView: {
        mobile: 1,
        tablet: 1,
        desktop: 3,
      },
    },
    close: {
      show: true,
      color: "white",
    },
  },
  stories: [...Stories],
};

const REELS_CONFIG_2 = {
  id: "reels-demo-rectangle",
  config: {
    layout: 1,
    navigation: {
      show: true,
      color: "white",
    },
    container: {
      storiesPerView: {
        mobile: {
          small: 1.5,
          medium: 1.6,
          large: 1.7,
        },
        tablet: 3.7,
        desktop: 3.65,
      },
    },
    overlay: {
      slidesPerView: {
        mobile: 1,
        tablet: 1,
        desktop: 3,
      },
    },
    close: {
      show: true,
      color: "white",
    },
  },
  stories: [...Stories],
};

const Reels: React.FC = () => {
  const [reelsSettings, setReelsSettings] = useState(REELS_CONFIG_1);
  const handleToggleChange = (state: string) => {
    setReelsSettings(state === "Circle UI" ? REELS_CONFIG_2 : REELS_CONFIG_1);
  };

  const isCircleUI = reelsSettings?.config?.layout === 1;

  useEffect(() => {
    _loadReels([REELS_CONFIG_1, REELS_CONFIG_2]);
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
          className={`paxify-app ${
            isCircleUI ? styles.active : styles.inactive
          }`}>
          <div>Loading Paxify LLC. Reels...</div>
        </div>
        <div
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
