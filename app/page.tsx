
import Header from "@/components/Header";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-white ">
      <Header />
      <Hero />
      <HowItWorks />
    </div>
  );
}
