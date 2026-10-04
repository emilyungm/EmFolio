"use client";

import { ContactInfoFields } from "@/app/layout";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import IconButtonLink from "./IconButtonLink";

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
          <IconButtonLink
            icon={TbMail}
            href={`mailto:${contactInfo.email}`}
            label="Send an email to Emily"
            size={iconButtonSize}
            color={iconButtonColor}
          />
        )}
        {contactInfo.linkedinLink && (
          <IconButtonLink
            icon={TbBrandLinkedin}
            href={contactInfo.linkedinLink}
            label="Open Emily's LinkedIn Profile in a new tab"
            size={iconButtonSize}
            color={iconButtonColor}
          />
        )}
        {contactInfo.githubLink && (
          <IconButtonLink
            icon={TbBrandGithub}
            href={contactInfo.githubLink}
            label="Open Emily's GitHub Profile in a new tab"
            size={iconButtonSize}
            color={iconButtonColor}
          />
        )}
      </div>
    </footer>
  );
};

export default Footer;
