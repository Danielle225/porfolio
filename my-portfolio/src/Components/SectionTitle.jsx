import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 sm:mb-14"
      >
        {subtitle && (
          <span className="eyebrow">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-primary-400/60"
            />
            {subtitle}
          </span>
        )}
        <h2 className="mt-4 font-morganite text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
