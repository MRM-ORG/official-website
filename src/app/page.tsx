import Footer from "@/components/Footer/footer";
import { Suspense, lazy } from "react";
import styles from "./page.module.css";
import Support from "@/components/Support/support";

const Home = lazy(() => import("../components/Home/home"));
const Features = lazy(() => import("../components/Features/features"));
const Demonstration = lazy(
  () => import("../components/Demonstration/demonstration")
);
const Reels = lazy(() => import("../components/Reels/reels"));
const Pricing = lazy(() => import("../components/Pricing/pricing"));

export default function Main() {
  return (
    <main className={styles.main}>
      <Home />
      <Features />
      <Support />
      <Suspense fallback={<div>Loading...</div>}>
        <Demonstration />
        <Reels />
        <Pricing />
      </Suspense>
      <Footer />
    </main>
  );
}
