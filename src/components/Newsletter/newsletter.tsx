"use client";

import { poppins } from "@/utils/fonts";
import styles from "./newsletter.module.css";
import { BACKEND_URL } from "@/constants/config";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import LoadingPage from "../Loading/loading";

const Newsletter: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="features"
      className={`${styles.container} ${poppins.className}`}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.headline}>Hear our latest</div>
          <div className={styles.description}>
            Subscibe for news to hear about future launches and tips.
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            fetch(`${BACKEND_URL}/reelife/newsletter`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              // @ts-ignore
              body: JSON.stringify({ email: e.target[0].value }),
            })
              .then(() => {
                // Clear the input field
                // @ts-ignore
                e.target[0].value = "";
                // Refresh the page and take user to the top of the page
                window.location.href = "#";
              })
              .finally(() => setLoading(false));
          }}
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true">
          <label className={styles.label}>
            <input
              required
              type="email"
              name="email"
              placeholder="Your email address"
            />
          </label>

          <button className={styles.submit} type="submit">
            Sign up
          </button>
        </form>
      </div>
      <LoadingPage isLoading={loading} />
    </section>
  );
};

export default Newsletter;
