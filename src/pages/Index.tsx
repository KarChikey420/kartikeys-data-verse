import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="about">
          <Hero />
        </section>
        <section id="skills">
          <TechnicalSkills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
