import { poppins } from "@/utils/fonts";
import styles from "./pricing.module.css";
import CheckMark from "@/vectors/CheckMark";
import { USER_DASHBOARD } from "@/utils/routes";

const SUBSCRIPTIONS = [
  {
    id: 1,
    name: "Basic Plan",
    price: 0,
    cta: {
      label: "Sign Up!",
      href: USER_DASHBOARD(),
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
        label: <span>Paxify Logo</span>,
      },
    ],
  },
  {
    id: 2,
    name: "Premium Plan",
    price: 99,
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
        id: 5,
        label: (
          <span>
            Add Stories on<strong>multiple</strong> pages of your website
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
    ],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    isEnterprise: true,
    price: "ASK FOR QUOTE",
    cta: {
      label: "Contact Us!",
      href: "mailto:paxifydev@gmail.com?subject=Enterprise Plan&body=Hi Paxify, I want to know more about your Enterprise Plan.",
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

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={`${styles.pricing} ${poppins.className}`}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Pricing Plan</h2>
        </div>
        <div className={styles.subscriptions}>
          {SUBSCRIPTIONS.map((subscription) => (
            <div key={subscription.id} className={styles.card}>
              <div className={styles.planName}>
                <div>{subscription?.name}</div>
              </div>
              <div className={styles.features}>
                {subscription?.features.map((feature) => (
                  <div key={feature.id} className={styles.feature}>
                    <CheckMark />
                    {feature?.label}
                  </div>
                ))}
              </div>
              <div className={styles.subscriptionLabel}>
                <div
                  className={
                    subscription.isEnterprise
                      ? styles.standardText
                      : styles.price
                  }>
                  {!subscription.isEnterprise && (
                    <div className={styles.priceLabel}>USD</div>
                  )}
                  {subscription?.price}
                </div>
                {!subscription?.isEnterprise && (
                  <div className={styles.priceFrequency}>Per month</div>
                )}
              </div>
              <div className={styles.chooseButton}>
                <a href={subscription.cta.href}>{subscription.cta.label}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
