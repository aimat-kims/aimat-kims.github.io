
import React from 'react';
import { 
  Atom, 
  Braces, 
  Database, 
  Cog, 
  BarChart4, 
  Lightbulb 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchAreas = () => {
  const researchAreas = [
    {
      title: "Generative Models for Materials",
      description: "Developing diffusion models and GANs for generating novel material structures with targeted properties.",
      icon: <Atom className="h-10 w-10 text-aimat-primary" />
    },
    {
      title: "Inverse Design Algorithms",
      description: "Creating algorithms that work backwards from desired material properties to optimal chemical compositions.",
      icon: <Braces className="h-10 w-10 text-aimat-primary" />
    },
    {
      title: "Materials Databases & Knowledge Graphs",
      description: "Building comprehensive databases and knowledge graphs of materials properties to train AI models.",
      icon: <Database className="h-10 w-10 text-aimat-primary" />
    },
    {
      title: "Automated Materials Synthesis",
      description: "Developing AI-guided robotic platforms for high-throughput materials synthesis and characterization.",
      icon: <Cog className="h-10 w-10 text-aimat-primary" />
    },
    {
      title: "Materials Property Prediction",
      description: "Utilizing neural networks to accurately predict physical, chemical, and mechanical properties of materials.",
      icon: <BarChart4 className="h-10 w-10 text-aimat-primary" />
    },
    {
      title: "Novel Materials Applications",
      description: "Applying our AI-designed materials to solve challenges in energy, electronics, and healthcare sectors.",
      icon: <Lightbulb className="h-10 w-10 text-aimat-primary" />
    }
  ];

  return (
    <section id="research" className="bg-gray-50 py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">Research Areas</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Our laboratory focuses on cutting-edge research at the intersection of artificial intelligence and materials science, 
          with the goal of accelerating the discovery of novel materials.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="card-hover border-none">
              <CardHeader className="pb-2">
                <div className="mb-4">{area.icon}</div>
                <CardTitle className="font-heading text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{area.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-aimat-primary to-aimat-secondary p-8 rounded-2xl text-white">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="font-heading text-2xl font-bold mb-2">Research Collaboration</h3>
              <p className="text-white/90">
                We actively collaborate with universities, industry partners, and government research institutes. 
                If you're interested in partnering with us, please reach out.
              </p>
            </div>
            <div>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-white text-aimat-primary rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
