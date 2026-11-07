import { m, LazyMotion, domAnimation } from "framer-motion";
import { bl33hIcon } from "../assets";

const facts = [
  { label: "Rôle", value: "Développeuse Fullstack" },
  { label: "Orientation", value: "Backend & architecture" },
  { label: "Formation", value: "Sciences informatiques" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl" />
      </div>

      <div className="section-inner relative flex min-h-[calc(100vh-80px)] items-center py-16 md:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="eyebrow">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-primary-400/60"
                />
                Développeuse Fullstack · Backend
              </span>

              <h1 className="mt-6 font-morganite text-6xl leading-[0.85] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Danielle <span className="text-primary-400">Domoraud</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Je conçois des applications web et des API robustes, avec une
                attention particulière à la logique métier, à l&apos;architecture
                logicielle et à la structuration des données.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  Voir mes projets
                </a>
                <a href="#contact" className="btn-secondary">
                  Me contacter
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-400" />
                  </span>
                  Disponible pour de nouvelles opportunités
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-line sm:block"
                />
                <span>Fullstack · Backend oriented</span>
              </div>
            </m.div>
          </LazyMotion>

          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="surface-card relative overflow-hidden p-8">
                <div className="flex items-center justify-between">
                  <img
                    src={bl33hIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-400">
                    DDAB
                  </span>
                </div>

                <div className="mt-10 space-y-4">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-xs uppercase tracking-wider text-muted">
                        {fact.label}
                      </span>
                      <span className="text-right text-sm font-semibold text-ink">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted">
                    Des solutions utiles, évolutives et maintenables.
                  </p>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-2xl bg-primary-500/20"
              />
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default Hero;
