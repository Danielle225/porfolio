import { m, LazyMotion, domAnimation } from "framer-motion";
import { introduction, memoji } from "../Constants/constants";

const About = () => {
  const [greeting, profile, approach, experience, vision] = introduction.text;
  const visionText = vision.split(":").slice(1).join(":");

  return (
    <section id="about" className="w-full py-20 sm:py-28">
      <div className="section-inner">
        <LazyMotion features={domAnimation} strict>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-12 sm:mb-16"
          >
            <span className="eyebrow">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-primary-400/60"
              />
              À propos de moi
            </span>
          </m.div>
        </LazyMotion>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-400">
                Qui suis-je ?
              </span>

              <h2 className="mt-4 font-morganite text-5xl leading-[0.9] tracking-tight text-ink sm:text-6xl md:text-7xl">
                Concevoir.
                <br />
                Développer.
                <br />
                <span className="text-primary-400">Connecter.</span>
              </h2>

              <div className="mt-7 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                <p className="text-base font-semibold text-ink sm:text-lg">
                  {greeting}
                </p>
                <p>{profile}</p>
                <p>{approach}</p>
                <p>{experience}</p>
                <p className="rounded-2xl border-l-2 border-primary-400 bg-primary-500/5 px-5 py-4 text-ink">
                  <span className="font-semibold">
                    Ma vision du développement :
                  </span>
                  {visionText}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="cv/cv danielle.pdf" download className="btn-primary">
                  Télécharger mon CV
                </a>
                <a href="#contact" className="btn-secondary">
                  Me contacter
                </a>
              </div>
            </m.div>
          </LazyMotion>

          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md pb-8"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="blob-shape absolute inset-0 rotate-6 bg-primary-500/20"
                />
                <div className="blob-shape relative overflow-hidden border-4 border-white shadow-panel">
                  <img
                    src={memoji.image[0]}
                    alt="Portrait de Danielle Domoraud"
                    loading="lazy"
                    className="h-[420px] w-full object-cover sm:h-[480px]"
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 left-4 right-4 rounded-2xl border border-line bg-card/95 p-4 shadow-panel backdrop-blur sm:left-8 sm:right-auto sm:w-72">
                <p className="text-sm font-semibold text-ink">
                  Fullstack Developer
                </p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                  Backend Oriented
                </p>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default About;
