import { m } from "framer-motion";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-6 w-6",
  "aria-hidden": "true",
};

const CategoryIcon = ({ name }) => {
  if (name === "server") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </svg>
    );
  }

  if (name === "layout") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
};

const SkillsCards = ({ group, index }) => {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group relative flex h-full flex-col rounded-3xl border border-line bg-card p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/30 hover:shadow-soft sm:p-7"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400 transition-colors duration-300 group-hover:bg-primary-400 group-hover:text-white">
          <CategoryIcon name={group.icon} />
        </span>

        <div>
          <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {group.description}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {group.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-xs font-medium text-primary-700 transition-colors duration-300 group-hover:border-primary-500/30 group-hover:bg-primary-500/15"
          >
            {technology}
          </li>
        ))}
      </ul>
    </m.article>
  );
};

export default SkillsCards;
