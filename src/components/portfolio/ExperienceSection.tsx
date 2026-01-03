import React from 'react';
import { ExternalLink } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { LogoPlaceholder } from './LogoPlaceholder';
import { Experience } from '@/types/portfolio';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Experience</h2>
      
      <div className="space-y-8">
        {experience.map((exp) => {
          const CompanyCard = (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LogoPlaceholder
                  name={exp.company}
                  src={exp.companyLogo}
                />
                <div>
                  <p className="font-medium text-foreground">{exp.company}</p>
                  {exp.industry && (
                    <span className="skill-badge text-xs">{exp.industry}</span>
                  )}
                </div>
              </div>
              {exp.companyDescription && (
                <p className="text-sm text-muted-foreground">{exp.companyDescription}</p>
              )}
            </div>
          );

          return (
            <div key={exp.id} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="space-y-1">
                  <HoverCard content={CompanyCard}>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-serif font-medium text-foreground animated-underline interactive-element inline-flex items-center gap-1.5 group"
                    >
                      {exp.company}
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </HoverCard>
                  
                  <Tooltip content={exp.roleScope || exp.role}>
                    <p className="text-muted-foreground">{exp.role}</p>
                  </Tooltip>
                </div>
                
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              {/* Impact summary with metrics */}
              <Tooltip content={exp.metrics || exp.summary}>
                <p className="text-foreground text-sm">{exp.summary}</p>
              </Tooltip>

              {/* Bullet points */}
              <ul className="space-y-2 ml-4">
                {exp.bullets.map((bullet, index) => (
                  <li key={index} className="relative pl-4 text-sm text-muted-foreground before:content-['•'] before:absolute before:left-0 before:text-accent">
                    <Tooltip content={bullet.tools?.join(', ') || 'Various tools'}>
                      <span>
                        {bullet.projectUrl ? (
                          <a
                            href={bullet.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animated-underline hover:text-foreground transition-colors"
                          >
                            {bullet.text}
                          </a>
                        ) : (
                          bullet.text
                        )}
                      </span>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
