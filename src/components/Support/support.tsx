"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./support.module.css";
import { poppins } from "@/utils/fonts";
import ReactLoading from "react-loading";
import { sendSupportEmail } from "@/actions/support";

const Support = () => {
  const [isSent, setIsSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setContent("");

    setIsLoading(true);
    sendSupportEmail({
      name,
      email,
      content,
    })
      .then((res) => console.log(res))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        setIsSent(true);
      });
  };

  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleGlobalClick = (event: any) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleGlobalClick);
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.chatSupport} ${poppins.className}`}>
      <div className={styles.chatSupportBar} onClick={toggleForm}>
        Need help? Get in touch!
      </div>
      {isOpen && !isSent && (
        <form
          className={`${styles.chatSupportForm} ${isOpen && "active"} ${
            isLoading && styles.loading
          }`}
          onSubmit={handleSubmit}>
          {isLoading && <ReactLoading type={"balls"} color={"#7431f8"} />}
          {!isLoading && (
            <>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                required
                placeholder="Message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button className={styles.submit} type="submit">
                Submit
              </button>
            </>
          )}
        </form>
      )}
      {isOpen && isSent && (
        <div
          className={`${styles.chatSupportForm} ${styles.mailSent} ${
            isOpen && "active"
          }`}>
          <img src="/assets/icons/check.svg" width={100} alt="Mail Sent" />
          <div className={styles.message}>
            We have received your message. Someone from our team will review and
            get back to you soon.
            <br />
            <br /> Thank you!
          </div>
          <br />
          <button onClick={() => setIsSent(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Support;
