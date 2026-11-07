import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { experiences } from "../Constants/constants";

const Experiences = () => {
  return (
    <section id="experiences" className="w-full py-20 sm:py-28">
      <div className="section-inner">
        <SectionTitle title="Expériences" subtitle="Parcours professionnel" />

        <LazyMotion features={domAnimation} strict>
          <div className="relative mx-auto max-w-3xl">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-line"
            />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <m.div
                  key={experience.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="relative pl-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-2 border-surface bg-primary-400"
                  />

                  <div className="surface-card p-6 transition-shadow duration-300 hover:shadow-soft sm:p-7">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                      {experience.company}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-ink sm:text-xl">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {experience.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Experiences;
