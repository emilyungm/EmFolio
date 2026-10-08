import { IconType } from "react-icons";

interface IconButtonLinkProps {
  icon: IconType;
  href: string;
  label: string;
  openInNewTab?: boolean;
  size?: number;
  color?: string;
}

const IconButtonLink = ({
  icon: Icon,
  href,
  label,
  openInNewTab = true,
  size = 50,
  color = "text-ink",
}: IconButtonLinkProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      className={`${color}`}
      target={openInNewTab ? "_blank" : undefined}
    >
      <Icon size={size} />
    </a>
  );
};

export default IconButtonLink;
