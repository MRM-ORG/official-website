"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./support.module.css";
import { poppins } from "@/utils/fonts";
import ReactLoading from "react-loading";
import { sendFeedbackEmail, sendSupportEmail } from "@/actions/emailSupport";
import { dataLayerPush, getEventPayload } from "@/constants/helpers";
import { Events } from "@/enums/events";
import StarVector from "@/vectors/Star";

const Star = (props: any) => {
  const { selected, onClick } = props;

  return (
    <span onClick={onClick}>
      <StarVector state={selected ? "FILLED" : "EMPTY"} />
    </span>
  );
};

const Support = () => {
  const [form, setForm] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  const StarRating = () => {
    const handleStarClick = (selectedRating: number) => {
      setRating(selectedRating);
    };

    return (
      <div>
        <p>Tell us how you feel about Reelife</p>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              selected={star <= rating}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>
        <p>Your rating {rating} / 5</p>
      </div>
    );
  };

  useEffect(() => {
    setName("");
    setEmail("");
    setContent("");
    setRating(0);
  }, [form]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleRequestSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    sendSupportEmail({
      name,
      email,
      content,
    })
      .then((res) => {
        dataLayerPush(getEventPayload(Events.LEAD_GENERATION));
        setName("");
        setEmail("");
        setContent("");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        setIsSent(true);
      });
  };

  const handleFeedbackSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    sendFeedbackEmail({
      name,
      email,
      content,
      rating,
    })
      .then((res) => {
        dataLayerPush(getEventPayload(Events.LEAD_GENERATION));
        setName("");
        setEmail("");
        setContent("");
      })
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
      <div
        id="chatSupport"
        className={styles.chatSupportBar}
        onClick={toggleForm}>
        {!form
          ? "Get in touch!"
          : form === "request"
          ? "Submit a request"
          : "We love to hear from you!"}
      </div>

      {isOpen && !isSent && !form && (
        <div className={`${styles.chatSupportForm} ${styles.options}`}>
          <div
            className={styles.option}
            onClick={() => {
              setIsLoading(false);
              setForm("request");
            }}>
            Get Support
          </div>
          <div
            onClick={() => {
              setIsLoading(false);
              setForm("feedback");
            }}
            className={styles.option}>
            Share Feedback
          </div>
        </div>
      )}

      {isOpen && !isSent && form == "request" && (
        <form
          className={`${styles.chatSupportForm} ${isOpen && "active"} ${
            isLoading && styles.loading
          }`}
          onSubmit={handleRequestSubmit}>
          {isLoading && (
            <>
              <p>Sending your request...</p>
              <ReactLoading type="balls" color={"#7431f8"} />
            </>
          )}
          {!isLoading && (
            <>
              <input
                required
                type="text"
                placeholder="Name"
                data-hj-allow
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="Email"
                data-hj-allow
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                required
                data-hj-allow
                placeholder="Tell us how we can help you."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div className={styles.buttonGroup}>
                <button
                  onClick={() => setForm(null)}
                  className={`${styles.button} ${styles.backButton}`}>
                  Go Back
                </button>

                <button className={styles.button} type="submit">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      )}

      {isOpen && isSent && form === "request" && (
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
          <button
            className={styles.button}
            onClick={() => {
              setForm(null);
              setIsSent(false);
            }}>
            Go Back
          </button>
        </div>
      )}

      {isOpen && isSent && form === "feedback" && (
        <div
          className={`${styles.chatSupportForm} ${styles.mailSent} ${
            isOpen && "active"
          }`}>
          <img src="/assets/icons/check.svg" width={100} alt="Mail Sent" />
          <div className={styles.message}>
            Thank you for your feedback. We really appreciate your input and
            will use it to improve our services.
            <br />
          </div>
          <br />
          <button
            className={styles.button}
            onClick={() => {
              setForm(null);
              setIsSent(false);
            }}>
            Go Back
          </button>
        </div>
      )}

      {isOpen && !isSent && form === "feedback" && (
        <form
          className={`${styles.chatSupportForm} ${isOpen && "active"} ${
            isLoading && styles.loading
          }`}
          onSubmit={handleFeedbackSubmit}>
          {isLoading && (
            <>
              <p>Sending your feedback...</p>
              <ReactLoading type="balls" color={"#7431f8"} />
            </>
          )}
          {!isLoading && (
            <>
              <StarRating />
              <input
                type="text"
                placeholder="Name (Optional)"
                value={name}
                data-hj-allow
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                data-hj-allow
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                required
                data-hj-allow
                placeholder="Your Feedback, Suggestions, or Comments. Please be as detailed as possible. Thank you!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div className={styles.buttonGroup}>
                <button
                  onClick={() => setForm(null)}
                  className={`${styles.button} ${styles.backButton}`}>
                  Go Back
                </button>

                <button className={styles.button} type="submit">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default Support;
