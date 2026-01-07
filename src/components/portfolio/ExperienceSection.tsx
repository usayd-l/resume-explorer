import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { LogoPlaceholder } from './LogoPlaceholder';
import { Experience } from '@/types/portfolio';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Experience</h2>
      
      <div className="space-y-8">
        {experience.map((exp) => {
          const isExpanded = expandedIds.has(exp.id);
          
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
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="space-y-0.5">
                  <HoverCard content={CompanyCard}>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-serif font-medium text-foreground animated-underline interactive-element inline-flex items-center gap-1.5 group"
                    >
                      {exp.company}
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </HoverCard>
                  
                  <Tooltip content={exp.roleScope || exp.role}>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </Tooltip>
                </div>
                
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              {/* Impact summary */}
              <p className="text-foreground text-sm">{exp.summary}</p>

              {/* Collapsible bullet points */}
              {exp.bullets.length > 0 && (
                <div>
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                    />
                    {isExpanded ? 'Hide details' : 'Show details'}
                  </button>
                  
                  {isExpanded && (
                    <ul className="space-y-2 ml-4 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
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
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
