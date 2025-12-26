import AboutUs from "@/partials/AboutUs";
import Services from "@/partials/Services";
import Home from "@/partials/Home";
import HomeItems from "@/partials/HomeItems";
import Experience from "@/partials/Experience";
import Blog from "@/partials/Blog";
import { ChevronUp } from "lucide-react";
import Testimonials from "@/partials/Tesimonials";
import Problems from "@/partials/Problems";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Home />
      <HomeItems />
      <AboutUs />
      <Services />
      <Experience />
      <Blog />
      <Testimonials />
      <Problems />
      <Footer />
    </>
  )
}