
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CTA from "@/components/Landing/CTAsection";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import RewardShowcase from "@/components/Landing/Rewardsection";
import Testimonials from "@/components/Landing/TestimonialSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <div className="flex flex-col min-h-screen justify-center bg-white ">
        <Header />
        <Hero />
        <HowItWorks />
        <RewardShowcase />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}
