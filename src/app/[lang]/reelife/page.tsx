"use client";

import Demonstration from "@/components/Demonstration/demonstration";
import Features from "@/components/Features/features";
import Footer from "@/components/Footer/footer";
import Home from "@/components/Home/home";
import Newsletter from "@/components/Newsletter/newsletter";
import Platforms from "@/components/Platforms/platforms";
import Pricing from "@/components/Pricing/pricing";
import Reels from "@/components/Reels/reels";
import Shoppable from "@/components/Shoppable/shoppable";
import Support from "@/components/Support/support";
import { getTranslator } from "@/i18n";
import { useEffect } from "react";

// interface IMainProps {
//   translate: (key: string) => string;
//   params: {
//     lang: string;
//   };
// }

export default function Main(props: any) {
  useEffect(() => {
    const fetchTranslations = async () => {
      const translate = await getTranslator(`${props.params.lang}`);
      // console.log(translate("welcome.helloWorld"));
    };

    fetchTranslations();
  }, []);

  return (
    <main>
      <Home />
      {/* <Features /> */}
      <Support />
      <Demonstration />
      <Reels />
      <Shoppable />
      <Platforms />
      <Pricing />
      <Newsletter />
      <Footer />
    </main>
  );
}
