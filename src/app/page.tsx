"use client";

import Footer from "@/components/Footer/footer";
import { Suspense, lazy, useEffect } from "react";
import Support from "@/components/Support/support";
import { GTM_HEAD_SCRIPT, GTM_BODY_IFRAME } from "@/constants/config";
import Home from "@/components/Home/home";
import Features from "@/components/Features/features";

const Demonstration = lazy(
  () => import("../components/Demonstration/demonstration")
);
const Reels = lazy(() => import("../components/Reels/reels"));
const Pricing = lazy(() => import("../components/Pricing/pricing"));

export default function Main() {
  useEffect(() => {
    const addGTMScriptToHead = () => {
      const gtmScript = document.createElement("script");
      gtmScript.id = "gtm-script";
      gtmScript.src = GTM_HEAD_SCRIPT;
      gtmScript.async = true;

      const head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(gtmScript);
    };

    const addGTMIFrameToBody = () => {
      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");
      iframe.id = "gtm-frame";
      iframe.src = GTM_BODY_IFRAME;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";

      noscript.appendChild(iframe);

      const body = document.body || document.getElementsByTagName("body")[0];
      body.insertBefore(noscript, body.firstChild);
    };

    addGTMScriptToHead();
    addGTMIFrameToBody();
  }, []);

  return (
    <main>
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
