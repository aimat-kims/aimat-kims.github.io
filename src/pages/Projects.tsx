import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectAreas from '@/components/ResearchAreas';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, GitBranch } from 'lucide-react';
import { useScrollToTop } from '@/hooks/use-scroll-top';

const Projects = () => {
  // Use the hook to scroll to top when navigating to this page
  useScrollToTop();
  
  // Example data for current running projects
  const currentProjects = [
    {
      title: "AI-Guided Battery Electrode Design",
      description: "Development of novel electrode materials for high-capacity batteries using diffusion models and generative design algorithms.",
      startDate: "Jan 2025",
      endDate: "Dec 2025",
      status: "Active",
      team: ["Dr. Min-Seok Park", "Dr. Ji-Hyun Kim", "Dr. Tae-Yeon Lee"],
      tags: ["Battery Materials", "Generative AI", "Materials Design"]
    },
    {
      title: "Self-Healing Alloy Development",
      description: "Creating machine learning models to predict and design self-healing metal alloys with enhanced mechanical properties and corrosion resistance.",
      startDate: "Mar 2025",
      endDate: "Feb 2026",
      status: "Active",
      team: ["Dr. Jin-Woo Choi", "Dr. Mi-Sook Kang"],
      tags: ["Alloys", "Self-healing", "Property Prediction"]
    },
    {
      title: "Knowledge Graph-Enhanced Materials Discovery",
      description: "Building comprehensive materials knowledge graphs and using graph neural networks to accelerate the discovery of functional materials.",
      startDate: "Feb 2025",
      endDate: "Oct 2025",
      status: "Active",
      team: ["Dr. Young-Jun Park", "Dr. Ji-Hyun Kim"],
      tags: ["Knowledge Graphs", "Graph Neural Networks", "Materials Informatics"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-aimat-primary to-aimat-secondary py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-white">Our Projects</h1>
            <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
              Exploring the frontiers of AI-driven materials discovery with our innovative research projects
            </p>
          </div>
        </div>

        {/* Current Projects Section */}
        <div className="container mx-auto px-4 pt-8 pb-12">
          
          <div className="grid grid-cols-1 gap-8 mb-16">
            {currentProjects.map((project, index) => (
              <Card key={index} className="h-full card-hover border-none shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-6">
                    {project.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{project.team.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-aimat-light text-aimat-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
       
      </main>
      <Footer />
    </div>
  );
};

export default Projects;