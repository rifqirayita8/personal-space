import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Opening } from "@/components/sections/Opening";

export default function Home() {
  return (
    <>
      <Opening />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
