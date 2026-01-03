import React from 'react';
import { ExternalLink } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { LogoPlaceholder } from './LogoPlaceholder';
import { Education } from '@/types/portfolio';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu) => {
          const InstitutionCard = (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LogoPlaceholder
                  name={edu.institution}
                  src={edu.institutionLogo}
                />
                <div>
                  <p className="font-medium text-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.degree} in {edu.field}</p>
                </div>
              </div>
              {edu.gpa && (
                <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.honors.map((honor) => (
                    <span key={honor} className="skill-badge text-xs">
                      {honor}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );

          return (
            <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <HoverCard content={InstitutionCard}>
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-serif font-medium text-foreground animated-underline interactive-element inline-flex items-center gap-1.5"
                    >
                      {edu.institution}
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                    </a>
                  </HoverCard>
                </div>
                <p className="text-muted-foreground">
                  {edu.degree}, {edu.field}
                </p>
              </div>
              
              <Tooltip content={edu.context || 'Full-time program'}>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.startDate} — {edu.endDate}
                </span>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </section>
  );
};
