import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectAreas from '@/components/ResearchAreas';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch } from 'lucide-react';
import { useScrollToTop } from '@/hooks/use-scroll-top';

const Projects = () => {
  // Use the hook to scroll to top when navigating to this page
  useScrollToTop();
  
  // Example data for current running projects
  const currentProjects = [
    {
      title: "Phase Segmentation using Self-Supervised Learning",
      description: "Development of SSL algorithms for accurate phase segmentation in materials microstructures, combined with autonomous lab systems for accelerated materials discovery.",
      status: "Active",
      tags: ["SSL Algorithm", "Phase Segmentation", "Autonomous Lab", "Materials Discovery"]
    },
    {
      title: "AI-based Indentation Testing for Sheet Metal Anisotropy",
      description: "Creating intelligent indentation testing methodologies using deep learning to accurately measure sheet metal anisotropy and mechanical properties.",
      status: "Active",
      tags: ["AI Testing", "Indentation", "Sheet Metal", "Anisotropy Measurement"]
    },
    {
      title: "FLD Prediction using GAN and CNN",
      description: "Developing advanced neural networks including GANs and CNNs for Forming Limit Diagram prediction, with GNN-based finite element modeling for process optimization.",
      status: "Active",
      tags: ["GAN", "CNN", "FLD Prediction", "GNN-based FEM"]
    },
    {
      title: "CPFE-VPSC Multiscale Simulation",
      description: "Implementation of Crystal Plasticity Finite Element and Viscoplastic Self-Consistent methods for forming limit diagram prediction and metallurgical phenomena modeling.",
      status: "Active",
      tags: ["CPFE", "VPSC", "Multiscale Simulation", "Crystal Plasticity"]
    },
    {
      title: "Cellular Automata for Metallurgical Phenomena",
      description: "Advanced cellular automata modeling of phase transformation, static recrystallization, and strain-induced dynamic transformation in metal processing.",
      status: "Active",
      tags: ["Cellular Automata", "Phase Transformation", "Recrystallization", "Dynamic Transformation"]
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
              Advanced AI and machine learning research projects for materials discovery, testing, and processing optimization
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