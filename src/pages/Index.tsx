import { HeaderSection } from '@/components/portfolio/HeaderSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { CertificationsSection } from '@/components/portfolio/CertificationsSection';
import { portfolioData } from '@/data/portfolioData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main resume container */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <article className="space-y-0">
          <HeaderSection
            name={portfolioData.name}
            title={portfolioData.title}
            tagline={portfolioData.tagline}
            email={portfolioData.email}
            portraitUrl={portfolioData.portraitUrl}
            socialLinks={portfolioData.socialLinks}
          />
          
          <EducationSection education={portfolioData.education} />
          
          <ExperienceSection experience={portfolioData.experience} />
          
          <ProjectsSection projects={portfolioData.projects} />
          
          <SkillsSection skills={portfolioData.skills} />
          
          <CertificationsSection certifications={portfolioData.certifications} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-resume-divider text-center">
          <p className="text-xs text-muted-foreground">
            Built with intention. Every element is interactive.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
