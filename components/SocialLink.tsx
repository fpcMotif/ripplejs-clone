
import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      className="text-[rgba(255,255,255,0.7)] no-underline font-medium transition-all duration-300 ease-in-out inline-flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 border border-[rgba(120,219,226,0.3)] rounded-full bg-[rgba(0,0,0,0.2)] backdrop-blur-lg h-12 text-sm md:text-base hover:text-white hover:-translate-y-0.5 hover:border-[rgba(120,219,226,0.6)] hover:shadow-[0_10px_30px_rgba(120,219,226,0.2)] hover:bg-[rgba(120,219,226,0.1)] flex-grow md:flex-grow-0 justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {text}
    </a>
  );
};

export default SocialLink;
