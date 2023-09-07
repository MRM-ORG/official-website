"use client";

import { poppins } from "@/utils/fonts";
import styles from "./pricing.module.css";
import CheckMark from "@/vectors/CheckMark";
import { DASHBOARD_SIGN_UP, USER_DASHBOARD } from "@/utils/routes";
import ModalComponent from "../UI/Modal";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { dataLayerPush, getEventPayload } from "@/constants/helpers";
import { Events } from "@/enums/events";

interface ISubscription {
  id: number;
  name: string;
  isEnterprise?: boolean;
  comingSoon?: boolean;
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
            Upto <strong>5</strong> Stories
          </span>
        ),
      },
      {
        id: 2,
        label: (
          <span>
            <strong>1</strong> Component
          </span>
        ),
      },
      {
        id: 3,
        label: (
          <span>
            Ability to customize <strong>1</strong> Store or Business
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            Limited <strong>tracking</strong>
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
            <strong>50K</strong> page views
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
        id: 8,
        neutralFeature: true,
        label: <span>Paxify Logo</span>,
      },
    ],
  },
  {
    id: 2,
    name: "Pro",
    comingSoon: true,
    price: "XX",
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
        id: 2,
        label: (
          <span>
            Deeper <strong>insights</strong> & <strong>analytics</strong>
          </span>
        ),
      },
      {
        id: 3,
        label: (
          <span>
            Ability to customize <strong>1</strong> Store or Business
          </span>
        ),
      },
      {
        id: 4,
        label: (
          <span>
            <strong>Customization</strong> to match your brand
          </span>
        ),
      },
      {
        id: 6,
        label: (
          <span>
            <strong>1M</strong> page views
          </span>
        ),
      },
      {
        id: 7,
        label: (
          <span>
            <strong>Priority</strong> email support
          </span>
        ),
      },
      {
        id: 8,
        label: (
          <span>
            <strong>No</strong> Paxify branding
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    name: "Pro Plus",
    comingSoon: true,
    price: "XX",
    cta: {
      label: "Sign Up!",
      href: USER_DASHBOARD(),
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
            <strong>Automatic</strong> publishing of your stories
          </span>
        ),
      },
      {
        id: 3,
        label: (
          <span>
            Generate stories using <strong>AI</strong>
          </span>
        ),
      },
      {
        id: 3,
        label: (
          <span>
            Ability to customize<strong>2</strong> Stores or Business
          </span>
        ),
      },
      {
        id: 6,
        label: (
          <span>
            <strong>2M</strong> page views
          </span>
        ),
      },
      {
        id: 7,
        label: (
          <span>
            <strong>Dedicated</strong> email support
          </span>
        ),
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
            Customize <strong>all</strong> Stores or Businesses under your brand
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
        id: 4,
        label: (
          <span>
            <strong>Personalized</strong> help with installation process
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
  const [modal, setModal] = useState({
    open: false,
    plan: -1,
  });

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
              onClick={() =>
                setModal({
                  open: true,
                  plan: subscription.id,
                })
              }>
              Learn More
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
      <ModalComponent
        isVisible={modal.open}
        onClose={() => {
          setModal({
            open: false,
            plan: -1,
          });
        }}>
        <div className={`${styles.modalComponent} ${poppins.className}`}>
          <div className={styles.title}>
            🚀 Be the first to know when we launch this plan 🚀
          </div>
        </div>
      </ModalComponent>
    </section>
  );
};

export default Pricing;
