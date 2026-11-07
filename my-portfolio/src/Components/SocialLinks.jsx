import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Danielle225",
    icon: icons.faGithub,
    external: true,
  },
  {
    label: "Envoyer un e-mail",
    href: "mailto:danielle.domoraud@epitech.eu",
    icon: icons.faEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danielle-domoraud/",
    icon: icons.faLinkedin,
    external: true,
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            aria-label={link.label}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all duration-300 hover:border-primary-400 hover:text-primary-400"
          >
            <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
