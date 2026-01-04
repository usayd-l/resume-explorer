import { usePDF } from 'react-to-pdf';
import { Download } from 'lucide-react';
import { HeaderSection } from '@/components/portfolio/HeaderSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { LeadershipSection } from '@/components/portfolio/LeadershipSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { CertificationsSection } from '@/components/portfolio/CertificationsSection';
import { portfolioData } from '@/data/portfolioData';

const Index = () => {
  // Portfolio page component
  const { toPDF, targetRef } = usePDF({
    filename: `${portfolioData.name.replace(/\s+/g, '-')}-Resume.pdf`,
    page: {
      margin: 20,
      format: 'A4',
    },
  });

  const handleScrollToProject = (projectId: string) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Export PDF Button */}
      <button
        onClick={() => toPDF()}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md shadow-lg hover:bg-primary/90 transition-colors print:hidden"
      >
        <Download className="w-4 h-4" />
        Export PDF
      </button>

      {/* Main resume container */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <article ref={targetRef} className="space-y-0 bg-background">
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
          
          <LeadershipSection 
            leadership={portfolioData.leadership}
            onScrollToProject={handleScrollToProject}
          />
          
          <ProjectsSection projects={portfolioData.projects} />
          
          <SkillsSection skills={portfolioData.skills} />
          
          <CertificationsSection certifications={portfolioData.certifications} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-resume-divider text-center print:hidden">
          <p className="text-xs text-muted-foreground">
            Built with intention. Every element is interactive.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
