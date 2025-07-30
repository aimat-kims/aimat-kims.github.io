import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Mail, ArrowUpRight, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type TeamMember = {
  key: string;
  position: string;
  category: 'professor' | 'postdoc' | 'phd' | 'master' | 'postmaster' | 'alumni';
  bio: {
    en: string;
    ko: string;
  };
  imageSrc: string;
  featured?: boolean;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
    googleScholar?: string;
  };
};

type TeamSectionProps = {
  showAll?: boolean;
  showSectionHeader?: boolean;
};

const TeamSection: React.FC<TeamSectionProps> = ({ showAll = false, showSectionHeader = true }) => {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const teamMembers: TeamMember[] = [
    {
      key: "hwlee",
      position: "Principal Investigator",
      category: "professor",
      bio: {
        en: "Leading researcher in AI applications for materials science with expertise in computational materials design and engineering.",
        ko: "전산 재료 설계 및 공학 전문지식을 가진 재료 과학 분야의 AI 응용 선도 연구자."
      },
      imageSrc: "images/lab_members/professor_image.jpeg",
      featured: true,
      socialLinks: {
        googleScholar: "https://scholar.google.com/citations?user=k6UqbkkAAAAJ&hl=ko",
        email: "h.lee@kims.re.kr"
      }
    },
    {
      key: "ykim",
      position: "Postdoctoral Researcher, KIMS",
      category: "postdoc",
      bio: {
        en: "Anisotropy measurement using HE test",
        ko: "HE 시험을 이용한 이방성 측정"
      },
      imageSrc: "images/lab_members/kimyongnam.png",
      featured: true,
      socialLinks: {
        email: "ykim@kims.re.kr"
      }
    },
    {
      key: "mtran",
      position: "Postdoctoral Researcher",
      category: "postdoc",
      bio: {
        en: "Expert in computational modeling of materials properties and machine learning applications for materials science.",
        ko: "재료 물성의 전산 모델링 및 재료 과학을 위한 기계 학습 응용 분야 전문가."
      },
      imageSrc: "images/lab_members/minhtientran.png",
      featured: true,
      socialLinks: {
        email: "mtran@kims.re.kr"
      }
    },
    {
      key: "phcuong",
      position: "PhD Candidate",
      category: "phd",
      bio: {
        en: "Additive manufacturing; Generative models (Stable diffusion, diffusion models); Large Language Models (LLMs)",
        ko: "Additive manufacturing; Generative models (Stable diffusion, diffusion models); Large Language Models (LLMs)"
      },
      imageSrc: "images/lab_members/phan_hoang_cuong.jpg",
      featured: false,
      socialLinks: {
        email: "hoangcuong@kims.re.kr"
      }
    },
    {
      key: "mooyeong_joo",
      position: "PhD Candidate",
      category: "phd",
      bio: {
        en: "Interested in integrating crystal plasticity model with deep learning to develop hybrid frameworks that improve the predictive accuracy and computational efficiency",
        ko: "Interested in integrating crystal plasticity model with deep learning to develop hybrid frameworks that improve the predictive accuracy and computational efficiency"
      },
      imageSrc: "images/lab_members/mooyeong_joo.jpg",
      featured: false,
      socialLinks: {
        googleScholar: "https://scholar.google.com/citations?user=EvrZBGQAAAAJ",
        email: "mooyeongj@kims.re.kr",
      }
    },
    {
      key: "nhnam",
      position: "MS-PhD Integrated Course",
      category: "phd",
      bio: {
        en: "Working on integrating physics-based models with machine learning for accelerated materials discovery.",
        ko: "가속화된 재료 발견을 위한 물리 기반 모델과 기계 학습의 통합 연구."
      },
      imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fHx8MTY3OTkwNTY4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: false,
      socialLinks: {
        googleScholar: "https://scholar.google.com/citations?user=example6",
        email: "nhnam@aimat.kr"
      }
    },
    {
      key: "hjlee",
      position: "Post-Master, PNU & KIMS",
      category: "postmaster",
      bio: {
        en: "FLD Prediction using ResNet",
        ko: "ResNet을 이용한 FLD 예측"
      },
      imageSrc: "images/lab_members/hanjunlee.png",
      featured: false,
      socialLinks: {
        email: "hjlee@kims.re.kr"
      }
    },
    {
      key: "sean",
      position: "Post-Master, PNU & KIMS",
      category: "postmaster",
      bio: {
        en: "AI-based flow stress estimation in Indentation",
        ko: "압입 시험에서 AI 기반 유동 응력 추정"
      },
      imageSrc: "images/lab_members/seongeunan.png",
      featured: false,
      socialLinks: {
        email: "sean@kims.re.kr"
      }
    },
    {
      key: "dhkim",
      position: "Post-Master, UST & KIMS",
      category: "postmaster",
      bio: {
        en: "Classification of aerospace parts by deep learning",
        ko: "딥러닝을 이용한 항공우주 부품 분류"
      },
      imageSrc: "images/lab_members/donghyukkim.png",
      featured: false,
      socialLinks: {
        email: "dhkim@kims.re.kr"
      }
    },
    {
      key: "phannguyenduchieu",
      position: "MS-PhD Integrated Course",
      category: "phd",
      bio: {
        en: "Research focus on Generative AI, LLM, LVLM for scientific question answering and lab automation",
        ko: "생성형 AI, LLM, LVLM을 활용한 과학적 질의응답 및 실험실 자동화 연구"
      },
      imageSrc: "images/lab_members/phannguyenduchieu.jpeg",
      featured: false,
      socialLinks: {
        email: "phannguyenduchieu@kims.re.kr"
      }
    },
    // {
    //   key: "jkim",
    //   position: "Senior Researcher",
    //   category: "alumni",
    //   bio: {
    //     en: "Former member specializing in high-throughput computational screening for advanced materials.",
    //     ko: "고급 재료를 위한 고성능 컴퓨터 스크리닝에 특화된 전 연구원."
    //   },
    //   imageSrc: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTkwNTI5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
    //   featured: false,
    //   socialLinks: {
    //     googleScholar: "https://scholar.google.com/citations?user=example9",
    //     email: "jkim@example.com"
    //   }
    // }
  ];

  // Display only featured members on homepage, or all members on the team page
  const displayMembers = showAll ? teamMembers : teamMembers.filter(member => member.featured);
  
  // For the full team page, separate members by category
  const professors = displayMembers.filter(member => member.category === 'professor');
  const postdocs = displayMembers.filter(member => member.category === 'postdoc');
  const phdStudents = displayMembers.filter(member => member.category === 'phd');
  const postMasterStudents = displayMembers.filter(member => member.category === 'postmaster');
  const masterStudents = displayMembers.filter(member => member.category === 'master');
  const alumni = displayMembers.filter(member => member.category === 'alumni');

  // Helper function to render team member cards
  const renderMemberCard = (member: TeamMember) => {
    if (member.category === 'professor') {
      // For Team page: full-width card with image on left and info on right
      if (showAll) {
        return (
          <Card key={member.key} className="overflow-hidden border-none shadow-lg card-hover w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Image section - Fixed size, bo 4 góc */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="h-96 lg:h-[500px] overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={t(`team.members.${member.key}.name`) || member.key} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105 rounded-lg"
                  />
                </div>
              </div>
              
              {/* Content section - Info cơ bản */}
              <div className="flex-1 flex flex-col">
                <CardHeader className="pb-4 pt-8 px-8">
                  <CardTitle className="font-heading text-3xl mb-4 text-gray-800">{t(`team.members.${member.key}.name`)}</CardTitle>
                  <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                    {t(`team.members.${member.key}.position`).split('||').map((section, sectionIndex) => (
                      <div key={sectionIndex} className={sectionIndex > 0 ? "mt-4" : ""}>
                        {section.split('|').map((line, lineIndex) => (
                          <div key={lineIndex} className={lineIndex === 0 ? "font-bold text-lg text-aimat-primary mb-1" : "text-gray-600 text-sm ml-2"}>
                            {line}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded-lg border-l-4 border-aimat-primary">
                    {t(`team.members.${member.key}.contact`)}
                  </div>
                </CardHeader>
                
                {member.socialLinks && (
                  <CardFooter className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-500 pt-0 px-8">
                    {member.socialLinks.googleScholar && (
                      <a href={member.socialLinks.googleScholar} className="hover:text-aimat-primary transition-colors flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border hover:shadow-md w-full sm:w-auto" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
                        <Globe size={18} />
                        <span className="text-sm font-medium">Google Scholar</span>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className="hover:text-aimat-primary transition-colors bg-white p-2 rounded-lg shadow-sm border hover:shadow-md flex items-center justify-center w-full sm:w-auto" aria-label="Twitter">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a href={`mailto:${member.socialLinks.email}`} className="hover:text-aimat-primary transition-colors flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border hover:shadow-md w-full sm:w-auto" aria-label="Email">
                        <Mail size={18} />
                        <span className="text-sm font-medium">{member.socialLinks.email}</span>
                      </a>
                    )}
                  </CardFooter>
                )}
              </div>
            </div>
            
            {/* Description và View More - Full width xuống dưới */}
            <CardContent className="px-8 pb-8 pt-4 mt-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-8 border border-blue-100">
                <p className="text-gray-700 leading-relaxed font-medium">{member.bio[language]}</p>
              </div>
              
              <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-aimat-primary to-blue-600 text-white border-none hover:from-aimat-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 py-4 px-6 rounded-xl font-semibold text-base"
                  >
                    {isExpanded ? t('team.viewLessDetails') : t('team.viewMoreDetails')}
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-6 space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg text-aimat-primary mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-aimat-primary rounded-full"></div>
                      {t('team.professionalExperience')}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{t(`team.members.${member.key}.experience`)}</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg text-aimat-primary mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-aimat-primary rounded-full"></div>
                      {t('team.education')}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{t(`team.members.${member.key}.education`)}</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg text-aimat-primary mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-aimat-primary rounded-full"></div>
                      {t('team.dissertation')}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line italic">{t(`team.members.${member.key}.dissertation`)}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <h4 className="font-bold text-lg text-green-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      {t('team.researchInterests')}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{t(`team.members.${member.key}.interests`)}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                    <h4 className="font-bold text-lg text-purple-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      {t('team.professionalService')}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{t(`team.members.${member.key}.service`)}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                    <h4 className="font-bold text-lg text-orange-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                      {t('team.awards')}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{t(`team.members.${member.key}.awards`)}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        );
      } else {
        // For Home page: simple card without view details button
        return (
          <Card key={member.key} className="overflow-hidden border-none shadow-md card-hover">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img 
                src={member.imageSrc} 
                alt={t(`team.members.${member.key}.name`) || member.key} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-heading text-xl">{t(`team.members.${member.key}.name`)}</CardTitle>
          <CardDescription className="text-aimat-primary font-medium">{t(`team.positions.${member.position.split(',')[0]}`) || member.position}</CardDescription>
        </CardHeader>            {member.socialLinks && (
              <CardFooter className="flex gap-4 text-gray-500">
                {member.socialLinks.googleScholar && (
                  <a href={member.socialLinks.googleScholar} className="hover:text-aimat-primary transition-colors flex items-center gap-2" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
                    <Globe size={20} />
                    <span className="text-sm">Google Scholar</span>
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} className="hover:text-aimat-primary transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                )}
                {member.socialLinks.email && (
                  <a href={`mailto:${member.socialLinks.email}`} className="hover:text-aimat-primary transition-colors flex items-center gap-2" aria-label="Email">
                    <Mail size={20} />
                    <span className="text-sm">{member.socialLinks.email}</span>
                  </a>
                )}
              </CardFooter>
            )}
            
            <CardContent>
              <p className="text-gray-600">{member.bio[language]}</p>
            </CardContent>
          </Card>
        );
      }
    }

    // Default card for other members
    return (
      <Card key={member.key} className="overflow-hidden border-none shadow-md card-hover">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <img 
            src={member.imageSrc} 
            alt={t(`team.members.${member.key}.name`) || member.key} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-heading text-xl">{t(`team.members.${member.key}.name`)}</CardTitle>
          <CardDescription className="text-aimat-primary font-medium">{t(`team.positions.${member.position.split(',')[0]}`) || member.position}</CardDescription>
        </CardHeader>
        
        {member.socialLinks && (
          <CardFooter className="flex gap-4 text-gray-500">
            {member.socialLinks.googleScholar && (
              <a href={member.socialLinks.googleScholar} className="hover:text-aimat-primary transition-colors flex items-center gap-2" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
                <Globe size={20} />
                <span className="text-sm">Google Scholar</span>
              </a>
            )}
            {member.socialLinks.twitter && (
              <a href={member.socialLinks.twitter} className="hover:text-aimat-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            )}
            {member.socialLinks.email && (
              <a href={`mailto:${member.socialLinks.email}`} className="hover:text-aimat-primary transition-colors flex items-center gap-2" aria-label="Email">
                <Mail size={20} />
                <span className="text-sm">{member.socialLinks.email}</span>
              </a>
            )}
          </CardFooter>
        )}
        <CardContent>
          <p className="text-gray-600">{member.bio[language]}</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="team">
      <div className="container-section">
        {showSectionHeader && (
          <>
            <h2 className="section-heading">{t('team.title')}</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              {t('team.subtitle')}
            </p>
          </>
        )}
        
        {/* For homepage, show the original grid layout for featured members */}
        {!showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayMembers.map(renderMemberCard)}
          </div>
        )}
        
        {/* For the team page, organize by categories */}
        {showAll && (
          <>
            {/* Professor - Single row */}
            {professors.length > 0 && (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Principal Investigator</h3>
                <div className="mb-16">
                  {professors.map(renderMemberCard)}
                </div>
              </>
            )}
            
            {/* Postdoctoral/Senior Researchers */}
            {postdocs.length > 0 && (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Postdoctoral/Senior Researchers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {postdocs.map(renderMemberCard)}
                </div>
              </>
            )}
            
            {/* PhD/Integrated Students */}
            {phdStudents.length > 0 && (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-8 text-center">PhD/Integrated Students</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {phdStudents.map(renderMemberCard)}
                </div>
              </>
            )}
            
            {/* Post-Master Researchers */}
            {postMasterStudents.length > 0 && (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Post-Master Researchers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {postMasterStudents.map(renderMemberCard)}
                </div>
              </>
            )}
            
            {/* Master Students */}
            {masterStudents.length > 0 && (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Master Students</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {masterStudents.map(renderMemberCard)}
                </div>
              </>
            )}
            
            {/* Alumni */}
            {alumni.length > 0 && (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Alumni</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {alumni.map(renderMemberCard)}
                </div>
              </>
            )}
          </>
        )}
        
        {!showAll && (
          <div className="mt-12 text-center">
            <Link to="/team#top">
              <Button variant="outline" className="border-aimat-primary text-aimat-primary hover:bg-aimat-light">
                {t('team.viewAll')}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
        
        {showAll && (
          <div className="mt-16 text-center">
            <h3 className="font-heading text-2xl font-semibold mb-4">{t('team.join')}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {t('team.joinDescription')}
            </p>
            <Link 
              to="/join-us" 
              className="inline-block px-6 py-3 bg-aimat-primary text-white rounded-lg font-medium hover:bg-aimat-secondary transition"
            >
              {t('team.apply')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
