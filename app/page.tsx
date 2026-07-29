import { Hero } from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Journey from "@/components/home/journey";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Portfolio() {
  return (
    <MaxWidthWrapper className="mb-14 space-y-16 md:space-y-24">
      <Hero />
      <Journey />
      <Projects />
    </MaxWidthWrapper>
  );
}
