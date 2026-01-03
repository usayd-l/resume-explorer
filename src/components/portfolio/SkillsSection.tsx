import React from 'react';
import { Tooltip } from './Tooltip';
import { SkillCategory } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const proficiencyLabels = {
  beginner: 'Learning',
  intermediate: 'Comfortable',
  advanced: 'Proficient',
  expert: 'Expert',
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Skills</h2>
      
      <div className="space-y-6">
        {skills.map((category) => (
          <div key={category.title} className="space-y-3">
            <Tooltip content={category.description || category.title}>
              <h3 className="text-sm font-medium text-foreground cursor-help">
                {category.title}
              </h3>
            </Tooltip>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const tooltipContent = [
                  skill.context && `Used at: ${skill.context}`,
                  skill.proficiency && `Level: ${proficiencyLabels[skill.proficiency]}`,
                ]
                  .filter(Boolean)
                  .join(' • ');

                return (
                  <Tooltip key={skill.name} content={tooltipContent || skill.name}>
                    <span className="skill-badge cursor-help">{skill.name}</span>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
