import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Certificates } from "@/components/Certificates/Certificates";
import { Hero } from "@/components/Hero/Hero";
import { Quiz } from "@/components/Quiz/Quiz";
import { Reviews } from "@/components/Reviews/Reviews";
import { Services } from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Services />
        <AboutUs />
        <Quiz />
        <Certificates />
        <Reviews />
      </main>
    </div>
  );
}
