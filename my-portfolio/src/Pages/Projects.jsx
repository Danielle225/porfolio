import Works from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 sm:py-28">
      <div className="section-inner">
        <SectionTitle title="Projets" subtitle="Ce que j'ai réalisé" />
        <Works />
      </div>
    </section>
  );
};

export default Projects;
