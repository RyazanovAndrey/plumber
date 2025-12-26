import AboutUs from "@/partials/AboutUs";
import Services from "@/partials/Services";
import Home from "@/partials/Home";
import HomeItems from "@/partials/HomeItems";
import Experience from "@/partials/Experience";
import Blog from "@/partials/Blog";
import { ChevronUp } from "lucide-react";

export default function Page() {
  return (
    <>
      <Home />
      <HomeItems />
      <AboutUs />
      <Services />
      <Experience />
      <Blog />
      <div className="size-30 bg-primary">
        <a href="#" className="fixed right-5 bottom-5 text-primary"><ChevronUp /></a>
      </div>
    </>
  )
}