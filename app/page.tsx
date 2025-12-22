import { Hero } from "@/components/sections/Hero";
import { Games } from "@/components/sections/Games";
import { Shop } from "@/components/sections/Shop";
import { Projects } from "@/components/sections/Projects";
import { Posts } from "@/components/sections/Posts";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="w-full h-px bg-black opacity-10 mx-auto max-w-7xl"></div>
      <Games />
      <Shop />
      <Projects />
      <Posts />
      <About />
      <Contact />
    </main>
  );
}
