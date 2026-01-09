import AboutUs from "@/partials/AboutUs";
import Services from "@/partials/Services";
import Home from "@/partials/Home";
import HomeItems from "@/partials/HomeItems";
import Experience from "@/partials/Experience";
import Blog from "@/partials/Blog";
import Testimonials from "@/partials/Tesimonials";
import Problems from "@/partials/Problems";

export default function Page() {
  return (
    <>
      <Home />
      <HomeItems />
      <AboutUs />
      <Services count={7} exploreBlock={true} />
      <Experience />
      <Blog />
      <Testimonials />
      <Problems />
    </>
  )
}