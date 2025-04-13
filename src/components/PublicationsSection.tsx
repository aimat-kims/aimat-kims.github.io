
import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  tags: string[];
};

const PublicationsSection = () => {
  const publications: Publication[] = [
    {
      title: "Inverse design of functional materials with generative diffusion models",
      authors: "Park, M.S., Kim, J.H., Lee, T.Y., & Choi, J.W.",
      journal: "Nature Materials",
      year: 2024,
      doi: "10.1038/s41586-023-06744-w",
      tags: ["Diffusion Models", "Inverse Design", "Functional Materials"]
    },
    {
      title: "AI-driven discovery of high-entropy alloys with enhanced mechanical properties",
      authors: "Kim, J.H., Kang, M.S., Park, Y.J., & Park, M.S.",
      journal: "Science Advances",
      year: 2023,
      doi: "10.1126/sciadv.abm3542",
      tags: ["Alloys", "AI Discovery", "Mechanical Properties"]
    },
    {
      title: "Deep learning approaches for accelerated materials property prediction",
      authors: "Lee, T.Y., Choi, J.W., & Park, M.S.",
      journal: "Journal of Materials Chemistry A",
      year: 2023,
      doi: "10.1039/D0TA00594K",
      tags: ["Deep Learning", "Property Prediction", "High-throughput"]
    },
    {
      title: "Reinforcement learning strategies for optimal experimental design in materials synthesis",
      authors: "Park, Y.J., Kang, M.S., & Park, M.S.",
      journal: "Advanced Materials",
      year: 2022,
      doi: "10.1002/adma.202107787",
      tags: ["Reinforcement Learning", "Experimental Design", "Synthesis"]
    },
    {
      title: "Knowledge graph embeddings for accelerated discovery of energy materials",
      authors: "Choi, J.W., Kim, J.H., & Park, M.S.",
      journal: "npj Computational Materials",
      year: 2022,
      doi: "10.1038/s41524-022-00712-y",
      tags: ["Knowledge Graphs", "Energy Materials", "Materials Discovery"]
    },
    {
      title: "Generative adversarial networks for de novo molecular design with desired properties",
      authors: "Kim, J.H., Lee, T.Y., & Park, M.S.",
      journal: "Chemical Science",
      year: 2021,
      doi: "10.1039/D1SC00231G",
      tags: ["GANs", "Molecular Design", "Drug Discovery"]
    }
  ];

  return (
    <section id="publications" className="bg-gray-50 py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">Recent Publications</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Our research results are published in leading scientific journals. 
          Explore our recent contributions to the fields of AI and materials science.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {publications.map((pub, index) => (
            <Card key={index} className="flex flex-col h-full card-hover border-none">
              <CardHeader>
                <CardTitle className="font-heading text-lg md:text-xl">{pub.title}</CardTitle>
                <CardDescription className="text-gray-600">{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">{pub.journal}</span>, {pub.year}
                  {pub.doi && <span> • DOI: {pub.doi}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-aimat-light text-aimat-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {pub.doi && (
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aimat-primary hover:text-aimat-secondary flex items-center gap-1 text-sm font-medium"
                  >
                    <FileText className="h-4 w-4" />
                    View Publication
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-aimat-primary text-aimat-primary hover:bg-aimat-light">
            View All Publications
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
