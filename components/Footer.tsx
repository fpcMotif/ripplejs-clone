
import React from 'react';
import SocialLink from './SocialLink';
import { GithubIcon } from './icons/GithubIcon';
import { DiscordIcon } from './icons/DiscordIcon';

const Footer: React.FC = () => {
    return (
        <div className="flex flex-row flex-wrap gap-3 md:gap-4 justify-center items-stretch my-6">
            <SocialLink href="https://github.com/Ripple-TS/ripple" icon={<GithubIcon />} text="View on GitHub" />
            <SocialLink href="https://discord.gg/JBF2ySrh2W" icon={<DiscordIcon />} text="Join Discord" />
        </div>
    );
};

export default Footer;
