import React, { useState } from 'react';
import { ArrowUpRight, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  tags: string[];
  featured?: boolean;
};

type PublicationsSectionProps = {
  showAll?: boolean;
  showSectionHeader?: boolean;
};

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ showAll = false, showSectionHeader = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  const publications: Publication[] = [
    {
      title: "Prediction of crater formation in a large pulsed electron beam (LPEB) irradiation process using deep learning",
      authors: "Oh, M., Lee, Y., Kim, H., Jung, J., Oh, Y.S., Lee, H.W., Kang, S.H., Kim, S.J., Kim, J., et al.",
      journal: "Journal of Alloys and Compounds",
      year: 2025,
      doi: "10.1016/j.jallcom.2024.177929",
      tags: ["Deep Learning", "Electron Beam", "Materials Processing"],
      featured: true
    },
    {
      title: "Exceptional cryogenic impact and fatigue properties of additively manufactured CrCoNi medium entropy alloy",
      authors: "Hwang, S.K., Tran, M.T., Dang, C.H., Heo, J.M., Lee, H.W., Jung, K.H., Kim, D.K.",
      journal: "International Journal of Fatigue",
      year: 2025,
      doi: "10.1016/j.ijfatigue.2024.108767",
      tags: ["Additive Manufacturing", "Medium Entropy Alloy", "Cryogenic Properties"],
      featured: true
    },
    {
      title: "Physics-guided machine learning for forming-limit assessments of advanced high-strength steels",
      authors: "Nguyen, N.T., Tran, M.T., Nguyen, X.M., Lee, H.W., Kang, S.H., Oh, Y.S., Kim, H., et al.",
      journal: "International Journal of Mechanical Sciences",
      year: 2025,
      doi: "10.1016/j.ijmecsci.2024.109959",
      tags: ["Machine Learning", "High-Strength Steels", "Physics-guided ML"],
      featured: true
    },
    {
      title: "Robust detection of ductile fracture by acoustic emission data-driven unsupervised learning",
      authors: "Kwon, J.H., Nguyen, N.T., Tran, M.T., Lee, H.W., Joo, H.S., Rhee, K.H., Park, S.S., et al.",
      journal: "International Journal of Mechanical Sciences",
      year: 2024,
      doi: "10.1016/j.ijmecsci.2024.109420",
      tags: ["Unsupervised Learning", "Acoustic Emission", "Ductile Fracture"],
      featured: false
    },
    {
      title: "Correlation of cryogenic deformation mechanisms to excellent strength-ductility of CrCoNi medium entropy alloy processed by selective laser melting",
      authors: "Jung, K.H., Tran, M.T., Shan, Z., Lee, H.W., Hwang, S.K., Kim, H.G., Kim, D.K.",
      journal: "Journal of Materials Research and Technology",
      year: 2023,
      doi: "10.1016/j.jmrt.2022.12.077",
      tags: ["Selective Laser Melting", "Medium Entropy Alloy", "Cryogenic Deformation"],
      featured: false
    },
    {
      title: "Microstructure-dependent etching behavior of a partially recrystallized Invar alloy",
      authors: "Park, S.J., Jo, S.H., Oh, S., Oh, Y.S., Kim, S.J., Lee, H.W., Kang, S.H., Moon, Y.H., et al.",
      journal: "Materials & Design",
      year: 2022,
      doi: "10.1016/j.matdes.2022.110631",
      tags: ["Invar Alloy", "Microstructure", "Etching"],
      featured: false
    },
    {
      title: "Modeling the stress–strain curves and dynamic recrystallization of nickel-based A230 alloy during hot deformation",
      authors: "Yu, J., Moon, I.Y., Jeong, H.W., Lee, H.W., Kim, J.H., Kang, S.H.",
      journal: "Metals and Materials International",
      year: 2022,
      doi: "10.1007/s12540-022-01256-0",
      tags: ["Nickel Alloy", "Dynamic Recrystallization", "Hot Deformation"],
      featured: false
    }
  ];

  // Display only featured publications on homepage, or all publications on the dedicated page
  const displayPublications = showAll ? publications : publications.filter(pub => pub.featured);
  
  // Pagination logic
  const totalPages = Math.ceil(displayPublications.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayPublications.slice(indexOfFirstItem, indexOfLastItem);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (showAll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Show max 5 page numbers
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // Calculate start and end of page range around current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if range is at the edges
      if (currentPage <= 2) {
        end = Math.min(4, totalPages - 1);
      } else if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3);
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pageNumbers.push('ellipsis');
      }
      
      // Add pages in range
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pageNumbers.push('ellipsis');
      }
      
      // Always include last page if totalPages > 1
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <section id="publications" className='bg-gray-50'>
      <div className="container-section">
        {showSectionHeader && (
          <>
            <h2 className="section-heading">Recent Publications</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              Our research results are published in leading scientific journals. 
              Explore our recent contributions to the fields of AI and materials science.
            </p>
          </>
        )}
        
        {showAll && (
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Show</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => {
                  setItemsPerPage(Number(value));
                  setCurrentPage(1); // Reset to first page when changing items per page
                }}
              >
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="5" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-500">per page</span>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-6 mb-12">
          {(showAll ? currentItems : displayPublications).map((pub, index) => (
            <Card key={index} className="flex flex-col h-full card-hover border-none shadow-md">
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
        
        {showAll && totalPages > 1 && (
          <Pagination className="mb-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {getPageNumbers().map((page, index) => (
                page === 'ellipsis' ? (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={`page-${page}`}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => handlePageChange(Number(page))}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        
        {!showAll && (
          <div className="text-center">
            <Link to="/publications#top">
              <Button variant="outline" className="border-aimat-primary text-aimat-primary hover:bg-aimat-light">
                View All Publications
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
