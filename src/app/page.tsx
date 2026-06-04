import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { AppPreview } from "@/components/app-preview";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { Testimonial } from "@/components/testimonial";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="grain relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <AppPreview />
      <WhyUs />
      <Stats />
      <Process />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
