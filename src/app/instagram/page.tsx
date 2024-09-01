import Footer from "@/components/Footer/footer";
import styles from "./styles.module.css";

export default function InstagramDataDeletion() {
  return (
    <>
      <div className={styles.container}>
        <h2>Data Deletion Policy for Reelife</h2>
        <p>
          <br />
          <br />
          <b>Last Updated: 09/01/2024</b>
          <br />
          <br />
          This page outlines the policy for data deletion for users of Reelife
          who choose to integrate Instagram in the app. In compliance with
          regulations, we provide a method for users to request the deletion of
          their data.
          <br />
          <br />
          <b>Data Deletion Request</b>
          <br />
          If you wish to have your data deleted from our services, please follow
          the steps below:
          <br />
          <br />
          1. Uninstall the Reelife app from your Shopify store.
          <br />
          2. Once the app is uninstalled, your data will be automatically
          scheduled for deletion from our servers.
          <br />
          3. This process typically takes 2-3 business days.
          <br />
          <br />
          No further action is required on your part after uninstalling the app.
          We ensure that your data is handled with care and respect, and it will
          be completely removed from our systems within the specified timeframe.
          <br />
          <br />
          If you have any questions or concerns about this process, please feel
          free to contact us at support@paxify.io.
          <br />
          <br />
          By using our Instagram integration in Reelife, you acknowledge and
          agree to this data deletion policy.
        </p>
      </div>
      <Footer />
    </>
  );
}
