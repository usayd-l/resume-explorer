import React from 'react';
import { ExternalLink } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { LogoPlaceholder } from './LogoPlaceholder';
import { Leadership } from '@/types/portfolio';

interface LeadershipSectionProps {
  leadership: Leadership[];
  onScrollToProject?: (projectId: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  leadership,
  onScrollToProject,
}) => {
  if (!leadership || leadership.length === 0) return null;

  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Leadership & Community Service</h2>

      <div className="space-y-6">
        {leadership.map((entry) => (
          <article key={entry.id} className="group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div className="flex-1">
                {/* Organization with hover card */}
                <HoverCard
                  content={
                    <div className="flex items-start gap-3">
                      <LogoPlaceholder
                        name={entry.organization}
                        src={entry.organizationLogo}
                        size="lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {entry.organization}
                        </h4>
                        {entry.organizationDescription && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {entry.organizationDescription}
                          </p>
                        )}
                      </div>
                    </div>
                  }
                >
                  {entry.organizationUrl ? (
                    <a
                      href={entry.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-foreground animated-underline interactive-element inline-flex items-center gap-1.5 group"
                    >
                      {entry.organization}
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <h3 className="text-base font-medium text-foreground interactive-element inline">
                      {entry.organization}
                    </h3>
                  )}
                </HoverCard>

                {/* Role with tooltip */}
                <div className="mt-0.5">
                  {entry.roleScope ? (
                    <Tooltip content={entry.roleScope}>
                      <span className="text-sm text-muted-foreground cursor-pointer">
                        {entry.role}
                      </span>
                    </Tooltip>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {entry.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Dates */}
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {entry.startDate} – {entry.endDate}
              </span>
            </div>

            {/* Bullet points */}
            <ul className="space-y-1.5 mt-3">
              {entry.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="text-sm text-foreground/90 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground"
                >
                  {bullet.context ? (
                    <Tooltip content={bullet.context}>
                      <span className="cursor-pointer">{bullet.text}</span>
                    </Tooltip>
                  ) : bullet.linkedProjectId && onScrollToProject ? (
                    <button
                      onClick={() => onScrollToProject(bullet.linkedProjectId!)}
                      className="text-left hover:text-accent transition-colors animated-underline"
                    >
                      {bullet.text}
                    </button>
                  ) : (
                    <span>{bullet.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
