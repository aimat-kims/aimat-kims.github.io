import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
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
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback publications data
  const fallbackPublications: Publication[] = [
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

  // Function to extract tags from title and journal
  const extractTags = (title: string, journal: string): string[] => {
    const tags: string[] = [];
    const lowerTitle = title.toLowerCase();
    const lowerJournal = journal.toLowerCase();

    // Machine Learning related
    if (lowerTitle.includes('machine learning') || lowerTitle.includes('ml') || lowerTitle.includes('deep learning') || lowerTitle.includes('neural')) {
      tags.push('Machine Learning');
    }
    if (lowerTitle.includes('deep learning') || lowerTitle.includes('neural network')) {
      tags.push('Deep Learning');
    }
    if (lowerTitle.includes('unsupervised') || lowerTitle.includes('supervised')) {
      tags.push('AI/ML');
    }

    // Materials Science
    if (lowerTitle.includes('alloy') || lowerTitle.includes('steel') || lowerTitle.includes('metal')) {
      tags.push('Materials Science');
    }
    if (lowerTitle.includes('additive manufacturing') || lowerTitle.includes('3d printing')) {
      tags.push('Additive Manufacturing');
    }
    if (lowerTitle.includes('cryogenic')) {
      tags.push('Cryogenic Properties');
    }
    if (lowerTitle.includes('fatigue') || lowerTitle.includes('fracture')) {
      tags.push('Mechanical Properties');
    }

    // Processing techniques
    if (lowerTitle.includes('electron beam') || lowerTitle.includes('laser')) {
      tags.push('Materials Processing');
    }

    // If no specific tags found, add general tags
    if (tags.length === 0) {
      if (lowerJournal.includes('materials')) {
        tags.push('Materials Science');
      } else if (lowerJournal.includes('mechanical')) {
        tags.push('Mechanical Engineering');
      } else {
        tags.push('Research');
      }
    }

    return tags;
  };

  // Function to parse Google Scholar HTML
  const parseGoogleScholarHTML = (html: string): Publication[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const publications: Publication[] = [];
    
    // Try multiple selectors for different Google Scholar layouts
    const possibleSelectors = [
      '.gsc_a_tr',           // Standard citation row
      '.gsc_1usr_cit',       // Alternative layout
      '.gs_r',               // Search result format
    ];
    
    let articles: NodeListOf<Element> | null = null;
    
    for (const selector of possibleSelectors) {
      articles = doc.querySelectorAll(selector);
      if (articles.length > 0) {
        console.log(`Found ${articles.length} articles using selector: ${selector}`);
        break;
      }
    }

    if (!articles || articles.length === 0) {
      console.warn('No articles found with any selector');
      return publications;
    }

    articles.forEach((article, index) => {
      try {
        // Extract title
        let titleElement = article.querySelector('.gsc_a_at') ||
                          article.querySelector('.gs_rt a') ||
                          article.querySelector('a[data-href]') ||
                          article.querySelector('h3 a');
        
        if (!titleElement) return;
        
        const title = titleElement.textContent?.trim() || '';
        
        // Extract year from the right column
        let yearElement = article.querySelector('.gsc_a_y') ||
                         article.querySelector('.gsc_a_h .gsc_a_hc') ||
                         article.querySelector('.gs_fl');
        
        let year = 0;
        if (yearElement) {
          const yearText = yearElement.textContent?.trim() || '';
          const yearMatch = yearText.match(/\b(19|20)\d{2}\b/);
          year = yearMatch ? parseInt(yearMatch[0]) : 0;
        }
        
        // Extract authors and journal from the second row
        // In Google Scholar author page, the structure is usually:
        // Row 1: Title
        // Row 2: Authors (first .gs_gray)
        // Row 3: Journal info (second .gs_gray)
        const grayElements = article.querySelectorAll('.gs_gray');
        
        let authors = '';
        let journal = 'Unknown Journal';
        
        if (grayElements.length >= 2) {
          // First .gs_gray contains authors
          const authorsElement = grayElements[0];
          authors = authorsElement.textContent?.trim() || '';
          
          // Second .gs_gray contains journal, volume, year
          const journalElement = grayElements[1];
          const journalText = journalElement.textContent?.trim() || '';
          
          console.log(`Authors for publication ${index + 1}:`, authors);
          console.log(`Journal text for publication ${index + 1}:`, journalText);
          
          // Parse journal from the journal text
          // Format is usually: "Journal Name Volume, Pages, Year"
          // Examples: 
          // "International Journal of Mechanical Sciences 279, 109615, 2024"
          // "Journal of Alloys and Compounds 1025, 177929, 2025"
          
          if (journalText) {
            // Remove year from the end first
            let cleanedJournalText = journalText.replace(/,?\s*\d{4}\s*$/, '').trim();
            
            // Remove volume and page numbers
            // Pattern: remove numbers at the end like "279, 109615" or "1025, 177929"
            cleanedJournalText = cleanedJournalText.replace(/\s+\d+,?\s*\d*\s*$/, '').trim();
            
            // What's left should be the journal name
            journal = cleanedJournalText || 'Unknown Journal';
            
            // Additional cleanup for specific patterns
            journal = journal.replace(/\s*,\s*$/, '').trim(); // Remove trailing comma
          }
        } else if (grayElements.length === 1) {
          // Fallback: if only one .gs_gray element, it might contain both authors and journal
          const combinedElement = grayElements[0];
          const combinedText = combinedElement.textContent?.trim() || '';
          
          console.log(`Combined text for publication ${index + 1}:`, combinedText);
          
          // Try to parse combined format
          if (combinedText.includes(' - ')) {
            // Format: "Authors - Journal info"
            const parts = combinedText.split(' - ');
            authors = parts[0]?.trim() || '';
            const journalPart = parts[1]?.trim() || '';
            
            // Clean journal part
            journal = journalPart.replace(/,?\s*\d{4}.*$/, '').replace(/\s+\d+.*$/, '').trim();
          } else {
            // Use the previous complex parsing logic as fallback
            const parts = combinedText.split(',').map(p => p.trim());
            let authorParts = [];
            let journalStartIndex = -1;
            
            // Look for journal indicators
            for (let i = 0; i < parts.length; i++) {
              const part = parts[i];
              const lowerPart = part.toLowerCase();
              
              if (
                lowerPart.includes('journal of ') ||
                lowerPart.includes('international journal') ||
                lowerPart.includes('proceedings of ') ||
                (lowerPart.includes('journal') && part.length > 15) ||
                /^[A-Z][a-z]+ [&\w]+ [A-Z][a-z]+$/.test(part)
              ) {
                journalStartIndex = i;
                break;
              }
            }
            
            if (journalStartIndex > 0) {
              authorParts = parts.slice(0, journalStartIndex);
              authors = authorParts.join(', ');
              journal = parts[journalStartIndex].replace(/\s*\d+.*$/, '').trim();
            } else {
              // Conservative approach: treat most as authors
              authors = parts.slice(0, Math.max(1, parts.length - 1)).join(', ');
              const lastPart = parts[parts.length - 1];
              if (lastPart && (lastPart.toLowerCase().includes('journal') || lastPart.length > 20)) {
                journal = lastPart.replace(/\s*\d+.*$/, '').trim();
              }
            }
          }
        }
        
        // Clean up data
        authors = authors.replace(/^,+|,+$/g, '').trim(); // Remove leading/trailing commas
        journal = journal.replace(/\.$/, '').trim(); // Remove trailing period
        
        // If no authors found, try to extract from title area
        if (!authors) {
          authors = 'Unknown Authors';
        }
        
        // Extract link if available
        const linkElement = titleElement as HTMLAnchorElement;
        let url = '';
        if (linkElement && linkElement.href) {
          // Check if it's a relative Google Scholar URL or proxied URL
          if (linkElement.href.startsWith('/citations?') || 
              linkElement.href.includes('citations?view_op=view_citation')) {
            
            // Extract the query parameters part
            let queryPart = '';
            if (linkElement.href.startsWith('/citations?')) {
              queryPart = linkElement.href;
            } else {
              // Extract from full URL (handle proxy cases)
              const urlObj = new URL(linkElement.href);
              queryPart = urlObj.pathname + urlObj.search;
            }
            
            // Convert to absolute Google Scholar URL
            url = `https://scholar.google.com${queryPart}`;
          } else if (linkElement.href.startsWith('http') && 
                     !linkElement.href.includes('localhost') &&
                     !linkElement.href.includes('127.0.0.1')) {
            url = linkElement.href;
          }
        }
        
        const tags = extractTags(title, journal);
        
        console.log(`Parsed publication ${index + 1}:`, {
          title: title.substring(0, 60) + '...',
          authors: authors.substring(0, 50) + '...',
          journal,
          year,
          originalHref: linkElement?.href,
          processedUrl: url,
          tags
        });
        
        publications.push({
          title,
          authors,
          journal,
          year: year || new Date().getFullYear(),
          url,
          tags,
          featured: index < 3 // Mark first 3 as featured
        });
        
      } catch (error) {
        console.error('Error parsing article:', error);
      }
    });

    return publications;
  };

  // Function to fetch publications from Google Scholar
  const fetchPublications = async () => {
    setLoading(true);
    setError(null);

    try {
      // Try different CORS proxy services
      const proxyUrls = [
        'https://api.allorigins.win/get?url=',
        'https://cors-anywhere.herokuapp.com/',
        'https://thingproxy.freeboard.io/fetch/',
      ];

      const scholarUrl = 'https://scholar.google.com/citations?hl=en&user=k6UqbkkAAAAJ&view_op=list_works&sortby=pubdate';
      
      let response: Response | null = null;
      let lastError: Error | null = null;

      // Try each proxy service
      for (const proxyUrl of proxyUrls) {
        try {
          const fullUrl = proxyUrl.includes('allorigins') 
            ? `${proxyUrl}${encodeURIComponent(scholarUrl)}`
            : `${proxyUrl}${scholarUrl}`;
          
          const res = await fetch(fullUrl, {
            method: 'GET',
            headers: {
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
              'Accept-Language': 'en-US,en;q=0.5'
            }
          });

          if (res.ok) {
            response = res;
            break;
          }
        } catch (err) {
          lastError = err as Error;
          console.warn(`Failed with proxy ${proxyUrl}:`, err);
        }
      }

      if (!response) {
        throw lastError || new Error('All proxy services failed');
      }

      let html: string;
      
      if (response.url.includes('allorigins')) {
        const data = await response.json();
        html = data.contents;
      } else {
        html = await response.text();
      }

      // Debug: log the HTML structure to understand the format
      console.log('Fetched HTML snippet:', html.substring(0, 2000));

      const parsedPublications = parseGoogleScholarHTML(html);
      
      if (parsedPublications.length > 0) {
        setPublications(parsedPublications);
        setError(null);
      } else {
        throw new Error('No publications found in response');
      }

    } catch (error) {
      console.error('Error fetching publications:', error);
      setError('Failed to fetch latest publications. Showing cached data.');
      setPublications(fallbackPublications);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

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
            {error && (
              <div className="text-center mb-6">
                <p className="text-amber-600 text-sm bg-amber-50 px-4 py-2 rounded-md inline-block">
                  {error}
                </p>
              </div>
            )}
          </>
        )}

        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-aimat-primary" />
            <span className="ml-2 text-gray-600">Loading publications...</span>
          </div>
        )}
        
        {showAll && !loading && (
          <div className="flex justify-between items-center mb-4">
            <a
              href="https://scholar.google.com/citations?hl=en&user=k6UqbkkAAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-aimat-primary text-aimat-primary hover:bg-aimat-light"
              >
                <ArrowUpRight className="h-4 w-4 mr-2" />
                View All Publications
              </Button>
            </a>
            <div className="hidden md:flex items-center gap-2">
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
        
        {!loading && (
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
                  {pub.doi ? (
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
                  ) : pub.url ? (
                    <a 
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-aimat-primary hover:text-aimat-secondary flex items-center gap-1 text-sm font-medium"
                    >
                      <FileText className="h-4 w-4" />
                      View Publication
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <a 
                      href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-aimat-primary hover:text-aimat-secondary flex items-center gap-1 text-sm font-medium"
                    >
                      <FileText className="h-4 w-4" />
                      Search Publication
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {showAll && totalPages > 1 && !loading && (
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
        
        {!showAll && !loading && (
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
