import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Certificates } from "@/components/Certificates/Certificates";
import { Contacts } from "@/components/Contacts/Contacts";
import { Hero } from "@/components/Hero/Hero";
import { PromoMarquee } from "@/components/PromoMarquee/PromoMarquee";
import { Quiz } from "@/components/Quiz/Quiz";
import { Reviews } from "@/components/Reviews/Reviews";
import { Services } from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-7xl flex flex-col py-16 px-4 sm:px-8 bg-white dark:bg-black">
        <Hero />
        <PromoMarquee />
        <Services />
        <AboutUs />
        <Quiz />
        <Certificates />
        <Reviews />
        <Contacts />
      </div>
    </div>
  );
}
