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
<<<<<<< HEAD
      <div className="size-30 bg-primary">
        <a href="#" className="fixed right-5 bottom-5 text-primary"><ChevronUp /></a>
      </div>
=======
      <Testimonials />
      <Problems />
      <Footer />
      <a href="#" className="fixed p-2 right-5 bottom-5 bg-secondary rounded-full"><ChevronUp color="black" /></a>
>>>>>>> 3d3bce81840322e395a0fc1d0248654add115cd1
    </>
  )
}