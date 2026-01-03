import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { HoverCard } from './HoverCard';
import { Tooltip } from './Tooltip';
import { Project } from '@/types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project) => {
          const ProjectCard = (
            <div className="space-y-3">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );

          const DescriptionTooltip = project.problem
            ? `Problem: ${project.problem}\n\nSolution: ${project.solution}\n\nOutcome: ${project.outcome}`
            : project.description;

          return (
            <div key={project.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <HoverCard content={ProjectCard}>
                  <span className="text-lg font-serif font-medium text-foreground animated-underline interactive-element cursor-pointer">
                    {project.name}
                  </span>
                </HoverCard>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="animated-underline">Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="animated-underline">Code</span>
                    </a>
                  )}
                </div>
              </div>

              <Tooltip content={DescriptionTooltip}>
                <p className="text-sm text-muted-foreground cursor-help">{project.description}</p>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </section>
  );
};
