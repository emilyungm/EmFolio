"use client";

import { ContactInfoFields } from "@/app/layout";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import IconButton from "./IconButton";

interface FooterProps {
  authorName: string;
  contactInfo: ContactInfoFields;
}

const Footer = ({ authorName, contactInfo }: FooterProps) => {
  const iconButtonSize = 35;
  const iconButtonColor = "text-ink";

  return (
    <footer className="mt-auto flex items-center justify-between p-8 mb-0">
      <div className="flex justify-startr">
        <p className="text-ink">&copy; {authorName} 2026</p>
      </div>
      <div className="flex justify-end  gap-5">
        {contactInfo.email && (
          <IconButton
            icon={TbMail}
            size={iconButtonSize}
            color={iconButtonColor}
            href={`mailto:${contactInfo.email}`}
          />
        )}
        {contactInfo.linkedinLink && (
          <IconButton
            icon={TbBrandLinkedin}
            size={iconButtonSize}
            color={iconButtonColor}
            href={contactInfo.linkedinLink}
          />
        )}
        {contactInfo.githubLink && (
          <IconButton
            icon={TbBrandGithub}
            size={iconButtonSize}
            color={iconButtonColor}
            href={contactInfo.githubLink}
          />
        )}
      </div>
    </footer>
  );
};

export default Footer;
