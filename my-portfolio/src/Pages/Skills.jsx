import { LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";
import { skillGroups } from "../Constants/constants";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 sm:py-28">
      <div className="section-inner">
        <SectionTitle title="Compétences" subtitle="Ce que je maîtrise" />

        <LazyMotion features={domAnimation} strict>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <SkillsCards key={group.id} group={group} index={index} />
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Skills;
