import Image from "next/image";

import GlobeIcon from "@/public/assets/images/globe.svg";
import Header from "@/components/common/Header";
import AboutUs from "@/components/home/AboutUs";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";
import Products from "@/components/home/Products";
import FAQ from "@/components/home/FAQ";
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <AboutUs />
      <OurServices />
      {/*<Testimonials/> */}
      <Products />
      <FAQ />
      <ContactUs />
    </main>
  );
}
