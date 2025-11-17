
import React from 'react';
import SocialLink from './SocialLink';
import { GithubIcon } from './icons/GithubIcon';
import { DiscordIcon } from './icons/DiscordIcon';
import { DocsIcon } from './icons/DocsIcon';
import { PlayIcon } from './icons/PlayIcon';

const Header: React.FC = () => {
  return (
    <>
      <h1 className="sr-only">Ripple</h1>
      <img 
        src="https://www.ripplejs.com/ripple-logo-horizontal.png" 
        alt="Ripple Logo" 
        className="logo-animate w-full max-w-[400px] py-5 mx-auto"
      />
      <p className="text-xl md:text-2xl font-normal mb-12 opacity-80 leading-relaxed text-[rgba(255,255,255,0.8)] [font-variation-settings:'CASL'_0.5] text-shadow-[0_0_20px_rgba(120,219,226,0.2)]">
        the elegant TypeScript UI framework
      </p>
      <div className="flex flex-row flex-wrap gap-3 md:gap-4 justify-center items-baseline mb-8 md:mb-4">
        <SocialLink href="https://github.com/Ripple-TS/ripple" icon={<GithubIcon />} text="GitHub" />
        <SocialLink href="https://discord.gg/JBF2ySrh2W" icon={<DiscordIcon />} text="Discord" />
        <SocialLink href="https://www.ripplejs.com/docs/introduction" icon={<DocsIcon />} text="Docs" />
        <SocialLink href="https://www.ripplejs.com/playground" icon={<PlayIcon />} text="Playground" />
      </div>
    </>
  );
};

export default Header;
