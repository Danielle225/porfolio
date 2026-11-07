import { m, LazyMotion, domAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../Components/ContactForm";
import { icons } from "../Constants/constants";

const contactLinks = [
  {
    label: "E-mail",
    value: "danielle.domoraud@epitech.eu",
    href: "mailto:danielle.domoraud@epitech.eu",
    icon: icons.faEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/danielle-domoraud",
    href: "https://www.linkedin.com/in/danielle-domoraud/",
    icon: icons.faLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Danielle225",
    href: "https://github.com/Danielle225",
    icon: icons.faGithub,
    external: true,
  },
];

const ContactLink = ({ label, value, href, icon, external }) => {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:shadow-soft"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-colors duration-300 group-hover:bg-primary-400 group-hover:text-white">
        <FontAwesomeIcon icon={icon} className="h-4 w-4" />
      </span>

      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
        <span className="mt-0.5 block break-all text-sm font-medium text-ink">
          {value}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="ml-auto text-muted transition-transform duration-300 group-hover:translate-x-0.5"
      >
        {external ? "↗" : "→"}
      </span>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="w-full pt-20 sm:pt-28">
      <div className="section-inner">
        <LazyMotion features={domAnimation} strict>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="eyebrow">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-primary-400/60"
                />
                Restons en contact
              </span>

              <h2 className="mt-5 font-morganite text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl">
                Un projet ? Une collaboration ?
                <br />
                <span className="text-primary-400">Parlons-en.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Vous avez un projet, une opportunité professionnelle ou
                souhaitez simplement échanger autour d&apos;une idée ? Je serais
                ravie de discuter avec vous.
              </p>

              <div className="mt-9 space-y-3">
                {contactLinks.map((link) => (
                  <ContactLink key={link.label} {...link} />
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-xs font-medium text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
                </span>
                Disponible pour de nouvelles opportunités
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <ContactForm />
            </m.div>
          </div>
        </LazyMotion>
      </div>

      <footer className="mt-20 border-t border-line bg-card">
        <div className="section-inner flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Danielle DOMORAUD (DDAB)</span>
          <span>Conçu et développé avec soin.</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
