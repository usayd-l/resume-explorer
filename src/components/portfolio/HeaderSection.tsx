import React, { useState } from 'react';
import { Linkedin, Github, Globe, Mail, Copy, Check } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { SocialLink } from '@/types/portfolio';

interface HeaderSectionProps {
  name: string;
  title: string;
  tagline: string;
  email: string;
  portraitUrl?: string;
  socialLinks: SocialLink[];
}

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  portfolio: Globe,
  twitter: Globe,
  email: Mail,
};

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  name,
  title,
  tagline,
  email,
  portraitUrl,
  socialLinks,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const NameCard = (
    <div className="flex items-center gap-4">
      {portraitUrl && (
        <img
          src={portraitUrl}
          alt={name}
          className="w-20 h-20 rounded-lg object-cover portrait-grayscale"
        />
      )}
      <div>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </div>
    </div>
  );

  return (
    <header className="resume-section border-b-0 pb-8">
      <div className="space-y-4">
        {/* Name with hover card */}
        <HoverCard content={NameCard}>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground cursor-pointer interactive-element">
            {name}
          </h1>
        </HoverCard>

        {/* Title */}
        <p className="text-xl text-muted-foreground font-serif">{title}</p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          {/* Email with copy functionality */}
          <Tooltip content={copied ? 'Copied!' : 'Click to copy'}>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="animated-underline">{email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </Tooltip>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
