import React from 'react';
import { 
  Brain, 
  Search, 
  FlaskConical, 
  Cog, 
  Bot, 
  Layers,
  ArrowUpRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

type ProjectArea = {
  key: string;
  icon: JSX.Element;
  featured?: boolean;
};

type ProjectAreasProps = {
  showAll?: boolean;
  showSectionHeader?: boolean;
};

const ProjectAreas: React.FC<ProjectAreasProps> = ({ showAll = false, showSectionHeader = true }) => {
  const { t } = useLanguage();
  
  const projectAreas: ProjectArea[] = [
    {
      key: "deeplearning",
      icon: <Brain className="h-10 w-10 text-aimat-primary" />,
      featured: true
    },
    {
      key: "mldiscovery",
      icon: <Search className="h-10 w-10 text-aimat-primary" />,
      featured: true
    },
    {
      key: "mltest",
      icon: <FlaskConical className="h-10 w-10 text-aimat-primary" />,
      featured: true
    },
    {
      key: "mlprocess",
      icon: <Cog className="h-10 w-10 text-aimat-primary" />,
      featured: false
    },
    {
      key: "autonomouslab",
      icon: <Bot className="h-10 w-10 text-aimat-primary" />,
      featured: false
    },
    {
      key: "multiscale",
      icon: <Layers className="h-10 w-10 text-aimat-primary" />,
      featured: false
    }
  ];

  // Display only featured project areas on homepage, or all project areas on the dedicated page
  const displayProjects = showAll ? projectAreas : projectAreas.filter(project => project.featured);

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="container-section">
        {showSectionHeader && (
          <>
            <h2 className="section-heading">{t('projects.title')}</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              {t('projects.subtitle')}
            </p>
          </>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((area) => (
            <Card key={area.key} className="card-hover border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{area.icon}</div>
                <CardTitle className="font-heading text-xl">{t(`projects.${area.key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{t(`projects.${area.key}.description`)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {!showAll && (
          <div className="mt-12 text-center">
            <Link to="/projects#top">
              <Button variant="outline" className="border-aimat-primary text-aimat-primary hover:bg-aimat-light">
                {t('projects.viewAll')}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}

        {showAll && (
          <div className="mt-16 bg-gradient-to-r from-aimat-primary to-aimat-secondary p-8 rounded-2xl text-white">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h3 className="font-heading text-2xl font-bold mb-2">{t('projects.collaboration.title')}</h3>
                <p className="text-white/90">
                  {t('projects.collaboration.description')}
                </p>
              </div>
              <div>
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-white text-aimat-primary rounded-lg font-medium hover:bg-gray-100 transition"
                >
                  {t('projects.collaboration.contactUs')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectAreas;
