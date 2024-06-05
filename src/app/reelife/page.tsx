"use client";

import Demonstration from "@/components/Demonstration/demonstration";
import Footer from "@/components/Footer/footer";
import Home from "@/components/Home/home";
import Newsletter from "@/components/Newsletter/newsletter";
import Platforms from "@/components/Platforms/platforms";
import Pricing from "@/components/Pricing/pricing";
import { Reelife } from "@/components/Reelife/reelife";
import Reels from "@/components/Reels/reels";
import Shoppable from "@/components/Shoppable/shoppable";
import Support from "@/components/Support/support";

export default function Main(props: any) {
  return (
    <main>
      <Home />
      {/* <Features /> */}
      <Support />
      <Reelife />
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
