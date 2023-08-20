import Button from "@/atoms/Button/button";
import Image from "next/image";
import styles from "./footer.module.css";
import { USER_DASHBOARD } from "@/utils/routes";

const socials = [
  {
    alt: "linked-in",
    src: "./assets/socials/linkedin-in.svg",
    href: "https://linkedin.com/in/paxify",
  },
  {
    alt: "twitter",
    src: "./assets/socials/twitter.svg",
    href: "https://twitter.com/paxify",
  },
  {
    alt: "facebook",
    src: "./assets/socials/facebook-f.svg",
    href: "https://facebook.com/paxify",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerCta}>
          <div className={styles.label}>
            Join our community by using our services to grow your business.
          </div>
          <Button text="Try It For Free" cta={USER_DASHBOARD()}></Button>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <div className={styles.flex}>
            <Image
              className={styles.logo}
              width={300}
              height={100}
              src="/assets/logo/logoV2.png"
              alt="logo"
            />
          </div>
          <div className={styles.flex}>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a key={social.alt} href={social.href} target="_blank">
                  <Image
                    width={20}
                    height={20}
                    src={social.src}
                    alt={social.alt}
                    className={styles.socialIcon}></Image>
                </a>
              ))}
            </div>
            <div>
              00 (123) 456 78 90
              <br /> 312 W 2nd St , Casper <br />
              82601, WY, Wyoming, United States
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
