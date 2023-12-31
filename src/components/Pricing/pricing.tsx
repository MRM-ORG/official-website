"use client";

import { poppins } from "@/utils/fonts";
import styles from "./pricing.module.css";
import CheckMark from "@/vectors/CheckMark";
import { DASHBOARD_SIGN_UP, USER_DASHBOARD } from "@/utils/routes";
import ModalComponent from "../UI/Modal";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { dataLayerPush, getEventPayload } from "@/constants/helpers";
import { Events } from "@/enums/events";
import { subscribeToNewsletter } from "@/actions/subscribe";
import { createPaymentSession } from "@/actions/stripe";
import LoadingPage from "../Loading/loading";

interface ISubscription {
  id: number;
  name: string;
  isEnterprise?: boolean;
  comingSoon?: boolean;
  lookup?: any;
  price: number | string;
  cta: {
    label: string;
    href: string;
  };
  features: {
    id: number;
    label: JSX.Element;
    neutralFeature?: boolean;
  }[];
}

const SUBSCRIPTIONS: ISubscription[] = [
  {
    id: 1,
    name: "Basic",
    price: 0,
    cta: {
      label: "Sign Up!",
      href: DASHBOARD_SIGN_UP(),
    },
    features: [
      {
        id: 1,
        label: (
          <span>
            Upto <strong>3</strong> Stories
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            Limited <strong>tracking</strong> & <strong>analytics</strong>
          </span>
        ),
      },
      {
        id: 5,
        label: (
          <span>
            Limited <strong>customization</strong>
          </span>
        ),
      },
      {
        id: 6,
        label: (
          <span>
            <strong>2K</strong> page views per month
          </span>
        ),
      },
      {
        id: 7,
        label: (
          <span>
            Support via <strong>email</strong>
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            Installation <strong>support</strong>
          </span>
        ),
      },
      {
        id: 8,
        neutralFeature: true,
        label: <span>Paxify Logo</span>,
      },
    ],
  },
  {
    id: 2,
    name: "Starter",
    comingSoon: false,
    price: "14.99",
    lookup: {
      monthly: {
        lookupKey: "reelife-starter-standard-monthly",
      },
      yearly: {
        lookupKey: "reelife-starter-standard-quarterly",
      },
    },
    cta: {
      label: "Sign Up!",
      href: USER_DASHBOARD(),
    },
    features: [
      {
        id: 1,
        label: (
          <span>
            <strong>Unlimited</strong> Stories
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            Richer <strong>tracking</strong> & <strong>analytics</strong>
          </span>
        ),
      },
      {
        id: 5,
        label: (
          <span>
            Better <strong>customization</strong>
          </span>
        ),
      },
      {
        id: 6,
        label: (
          <span>
            <strong>100K</strong> page views per month
          </span>
        ),
      },
      {
        id: 7,
        label: (
          <span>
            Priority support via <strong>email</strong>
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            Installation <strong>support</strong>
          </span>
        ),
      },
      {
        id: 8,
        label: <span>No Paxify Branding</span>,
      },
    ],
  },
  {
    id: 3,
    name: "Professional",
    comingSoon: false,
    price: "24.99",
    cta: {
      label: "Sign Up!",
      href: USER_DASHBOARD(),
    },
    lookup: {
      monthly: {
        lookupKey: "reelife-professional-standard-monthly",
      },
      yearly: {
        lookupKey: "reelife-professional-standard-quarterly",
      },
    },
    features: [
      {
        id: 1,
        label: (
          <span>
            <strong>Unlimited</strong> Stories
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            Richer <strong>tracking</strong> & <strong>analytics</strong>
          </span>
        ),
      },
      {
        id: 5,
        label: (
          <span>
            Unlimited <strong>customization</strong>
          </span>
        ),
      },
      {
        id: 6,
        label: (
          <span>
            <strong>Unlimited</strong> page views per month
          </span>
        ),
      },
      {
        id: 7,
        label: (
          <span>
            Dedicated <strong>Slack</strong> support
          </span>
        ),
      },
      {
        id: 8,
        label: <span>No Paxify Branding</span>,
      },
    ],
  },
  {
    id: 4,
    name: "Enterprise",
    isEnterprise: true,
    comingSoon: true,
    price: "ASK FOR QUOTE",
    cta: {
      label: "Contact Us!",
      href: "mailto:support@paxify.io?subject=Enterprise Plan&body=Hi Paxify, I want to know more about your Enterprise Plan.",
    },
    features: [
      {
        id: 1,
        label: (
          <span>
            <strong>Everything</strong> in Pro Plan
          </span>
        ),
      },
      {
        id: 2,
        label: (
          <span>
            <strong>Customize</strong> Stores or Businesses
          </span>
        ),
      },
      {
        id: 3,
        label: (
          <span>
            Richer <strong>insights</strong> for <strong>all</strong> of your
            stories
          </span>
        ),
      },
      {
        id: 5,
        label: (
          <span>
            <strong>Custom</strong> page views
          </span>
        ),
      },
    ],
  },
];

const handleSignUpToDashboard = (cta: string) => {
  window.open(cta, "_blank");
  dataLayerPush(getEventPayload(Events.SIGN_UP));
};

const Pricing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    plan: -1,
  });

  const [hasSubscribed, setHasSubscribed] = useState(false);

  const renderPriceCard = (props: any) => {
    const { tag, subscription } = props;
    const TagComponent = tag || "div";

    return (
      <TagComponent key={subscription.id} className={styles.card}>
        <div className={styles.planName}>
          <div>{subscription?.name}</div>
          {subscription.id === 1 && <div className={styles.pill}>FREE</div>}
        </div>
        <div className={styles.features}>
          {subscription?.features.map((feature: any) => (
            <div key={feature.id} className={styles.feature}>
              {feature?.neutralFeature ? <CheckMark neutral /> : <CheckMark />}
              {feature?.label}
            </div>
          ))}
        </div>
        <div className={styles.subscriptionLabel}>
          {!subscription.comingSoon && (
            <div
              className={
                subscription.isEnterprise ? styles.standardText : styles.price
              }>
              {!subscription.isEnterprise && (
                <div className={styles.priceLabel}>USD</div>
              )}
              {subscription?.price}
            </div>
          )}
          {!subscription?.isEnterprise && !subscription.comingSoon && (
            <div className={styles.priceFrequency}>Per month</div>
          )}
          {subscription.comingSoon && (
            <div className={styles.comingSoon}>Coming Soon</div>
          )}
        </div>
        <div>
          {subscription.id === 1 && (
            <div
              className={styles.chooseButton}
              onClick={() => handleSignUpToDashboard(subscription.cta.href)}>
              {subscription.cta.label}
            </div>
          )}
          {subscription.id !== 1 && (
            <div
              className={styles.chooseButton}
              onClick={() => {
                subscription.id !== 4 && setIsLoading(true);

                subscription.id === 4 &&
                  setModal({
                    open: true,
                    plan: subscription.id,
                  });

                subscription.id !== 4 &&
                  createPaymentSession({
                    lookupKey: subscription?.lookup?.monthly?.lookupKey,
                    intendedPlan: subscription.name,
                  })
                    .then((res) => {
                      setIsLoading(false);
                      window.location.href = res.url;
                    })
                    .catch((error) => {
                      setIsLoading(false);
                      console.error(error);
                      alert("Something went wrong. Please try again.");
                    });
              }}>
              {subscription.id === 4 ? "Learn More" : "Subscribe"}
            </div>
          )}
        </div>
      </TagComponent>
    );
  };

  useEffect(() => {
    const pricing = document.getElementsByClassName(styles.desktopPricing);
    pricing[0].scrollLeft = 500;
  }, []);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const body = {
      email,
    };
    setIsLoading(true);
    subscribeToNewsletter(body)
      .then((res: any) => {
        dataLayerPush(getEventPayload(Events.SUBSCRIBE));
        setHasSubscribed(true);
      })
      .catch((error: any) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => setIsLoading(true));
  };

  return (
    <section id="pricing" className={`${styles.pricing} ${poppins.className}`}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Pricing Plan</h2>
        </div>
        <div className={styles.subscriptions}>
          <Swiper
            centeredSlides
            spaceBetween={30}
            slidesPerView={4}
            // modules={[Pagination]}
            className={styles.desktopPricing}
            pagination={{ clickable: true, dynamicBullets: true }}>
            {SUBSCRIPTIONS.map((subscription) =>
              renderPriceCard({
                tag: SwiperSlide,
                subscription,
              })
            )}
          </Swiper>
          <div className={styles.mobilePricing}>
            {SUBSCRIPTIONS.map((subscription) =>
              renderPriceCard({
                tag: "div",
                subscription,
              })
            )}
          </div>
        </div>
      </div>
      <LoadingPage isLoading={isLoading} />
      <ModalComponent
        isVisible={modal.open}
        onClose={() => {
          setModal({
            open: false,
            plan: -1,
          });
        }}>
        <div className={`${styles.modalComponent} ${poppins.className}`}>
          <div className={styles.title}>🚀 Subscribe 🚀</div>
          <div>Be the first to know when we launch this plan and more!</div>
          <form onSubmit={handleSubscribe} className={styles.subscribe}>
            <input required type="email" placeholder="Email" />
            <button type="submit">Notify Me</button>
          </form>
        </div>
        {hasSubscribed && (
          <div className={`${styles.modalComponent} ${poppins.className}`}>
            <div>Thanks for subscribing!</div>
            <div>We will notify you when this plan is available.</div>
          </div>
        )}
      </ModalComponent>
    </section>
  );
};

export default Pricing;
