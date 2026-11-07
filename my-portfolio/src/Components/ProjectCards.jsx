import { motion } from "framer-motion";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";

const fadeIn = (delay) => ({
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.article
      variants={fadeIn(index * 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le code source de ${name}`}
              className="shrink-0 rounded-full p-1.5 transition-colors hover:bg-primary-500/10"
            >
              <img
                src={githubIcon}
                alt=""
                className="h-5 w-5 object-contain"
              />
            </a>
          )}
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        {demo_link && (
          <a
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Voir la démo
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Works = () => {
  const sortedProjects = [...projects].sort((a, b) => {
    const aHasDemo = a.demo_link ? 1 : 0;
    const bHasDemo = b.demo_link ? 1 : 0;
    return bHasDemo - aHasDemo;
  });

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedProjects.map((project, index) => (
        <ProjectCard key={project.name} index={index} {...project} />
      ))}
    </div>
  );
};

export default Works;
