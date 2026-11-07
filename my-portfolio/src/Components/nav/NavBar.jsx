import { useEffect, useState } from "react";
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);

    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const offset = 140;
      let current = "";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      });

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setToggle(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/80 shadow-[0_1px_0_rgba(41,33,42,0.03)] backdrop-blur-md"
          : "border-b border-transparent bg-surface/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="section-inner flex h-[80px] items-center justify-between"
      >
        <a
          href="#hero"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center"
        >
          <img
            src={bl33hIcon}
            alt="DDAB — Danielle Domoraud"
            className="h-11 w-auto object-contain"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            const isContact = link.id === "contact";

            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isContact
                      ? "ml-3 inline-flex items-center justify-center rounded-full bg-primary-400 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-md"
                      : `relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-primary-400"
                            : "text-muted hover:text-ink"
                        }`
                  }
                >
                  {link.title}
                  {!isContact && (
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary-400 transition-all duration-300 ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={toggle ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          onClick={() => setToggle((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:bg-primary-500/10 lg:hidden"
        >
          <img
            className="h-5 w-5 object-contain"
            src={toggle ? close : menu}
            alt=""
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          toggle
            ? "visible max-h-[420px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <ul className="section-inner flex flex-col gap-1 border-t border-line bg-surface/95 py-4 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            const isContact = link.id === "contact";

            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isContact
                      ? "mt-2 flex items-center justify-center rounded-full bg-primary-400 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                      : `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary-500/10 text-primary-400"
                            : "text-muted hover:bg-primary-500/10 hover:text-ink"
                        }`
                  }
                >
                  {link.title}
                  {!isContact && isActive && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-primary-400"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
