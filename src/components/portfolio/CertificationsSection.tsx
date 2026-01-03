import React from 'react';
import { ExternalLink } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { LogoPlaceholder } from './LogoPlaceholder';
import { Certification } from '@/types/portfolio';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Certifications</h2>
      
      <div className="space-y-4">
        {certifications.map((cert) => {
          const CertCard = (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LogoPlaceholder
                  name={cert.issuer}
                  src={cert.issuerLogo}
                />
                <div>
                  <p className="font-medium text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              {cert.thumbnailUrl && (
                <img
                  src={cert.thumbnailUrl}
                  alt={cert.name}
                  className="w-full h-32 object-cover rounded-md"
                />
              )}
            </div>
          );

          return (
            <div key={cert.id} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="space-y-1">
                <HoverCard content={CertCard}>
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-foreground animated-underline interactive-element inline-flex items-center gap-1.5 group"
                  >
                    {cert.name}
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </HoverCard>
                
                <Tooltip content={cert.issuerContext || cert.issuer}>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </Tooltip>
              </div>
              
              <span className="text-sm text-muted-foreground">{cert.date}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
