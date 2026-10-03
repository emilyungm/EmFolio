"use client";

import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  href?: string;
  openInNewTab?: boolean;
  size?: number;
  color?: string;
}

const IconButton = ({
  icon: Icon,
  href,
  openInNewTab = true,
  size = 50,
  color = "text-ink",
}: IconButtonProps) => {
  return (
    <a
      href={href}
      className={`${color}`}
      target={openInNewTab ? "_blank" : undefined}
    >
      <Icon size={size} />
    </a>
  );
};

export default IconButton;
