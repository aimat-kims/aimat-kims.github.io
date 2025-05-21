import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

type TeamMember = {
  key: string;
  position: string;
  category: 'professor' | 'postdoc' | 'phd' | 'master' | 'alumni';
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
  };
};

type TeamSectionProps = {
  showAll?: boolean;
  showSectionHeader?: boolean;
};

const TeamSection: React.FC<TeamSectionProps> = ({ showAll = false, showSectionHeader = true }) => {
  const { t, language } = useLanguage();
  
  const teamMembers: TeamMember[] = [
    {
      key: "hwlee",
      position: "Principal Investigator",
      category: "professor",
      bio: {
        en: "Leading researcher in AI applications for materials science with expertise in computational materials design and engineering.",
        ko: "전산 재료 설계 및 공학 전문지식을 가진 재료 과학 분야의 AI 응용 선도 연구자."
      },
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTkwNTI5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: true,
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "hwlee@aimat.kr"
      }
    },
    {
      key: "ykim",
      position: "Postdoctoral Researcher",
      category: "postdoc",
      bio: {
        en: "Specializing in advanced materials characterization and AI-driven analysis techniques.",
        ko: "고급 재료 특성 분석 및 AI 기반 분석 기술 전문."
      },
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fHx8MTY3OTkwNTY4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: true,
      socialLinks: {
        linkedin: "#",
        email: "ykim@aimat.kr"
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
      imageSrc: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fDE2Nzk5MDU2MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: true,
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "mtran@aimat.kr"
      }
    },
    {
      key: "phcuong",
      position: "PhD Candidate",
      category: "phd",
      bio: {
        en: "Researching advanced deep learning techniques for materials property prediction and synthesis optimization.",
        ko: "재료 물성 예측 및 합성 최적화를 위한 고급 딥러닝 기술 연구."
      },
      imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fHx8MTY3OTkwNTY4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: false,
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "phcuong@aimat.kr"
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
        github: "#",
        email: "nhnam@aimat.kr"
      }
    },
    {
      key: "hjlee",
      position: "MS Candidate",
      category: "master",
      bio: {
        en: "Focusing on data-driven approaches to predict material properties and optimize processing parameters.",
        ko: "재료 특성 예측 및 공정 매개변수 최적화를 위한 데이터 기반 접근법 연구."
      },
      imageSrc: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fHx8MTY3OTkwNTY4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: false,
      socialLinks: {
        linkedin: "#",
        email: "hjlee@aimat.kr"
      }
    },
    {
      key: "sean",
      position: "MS Candidate",
      category: "master",
      bio: {
        en: "Researching AI applications for rapid materials screening and property prediction.",
        ko: "빠른 재료 스크리닝 및 물성 예측을 위한 AI 응용 연구."
      },
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHdvbWFufHx8fHx8MTY3OTkwNTgxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: false,
      socialLinks: {
        linkedin: "#",
        email: "sean@aimat.kr"
      }
    },
    {
      key: "jkim",
      position: "Senior Researcher",
      category: "alumni",
      bio: {
        en: "Former member specializing in high-throughput computational screening for advanced materials.",
        ko: "고급 재료를 위한 고성능 컴퓨터 스크리닝에 특화된 전 연구원."
      },
      imageSrc: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTkwNTI5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      featured: false,
      socialLinks: {
        linkedin: "#",
        email: "jkim@example.com"
      }
    }
  ];

  // Display only featured members on homepage, or all members on the team page
  const displayMembers = showAll ? teamMembers : teamMembers.filter(member => member.featured);
  
  // For the full team page, separate members by category
  const professors = displayMembers.filter(member => member.category === 'professor');
  const postdocs = displayMembers.filter(member => member.category === 'postdoc');
  const phdStudents = displayMembers.filter(member => member.category === 'phd');
  const masterStudents = displayMembers.filter(member => member.category === 'master');
  const alumni = displayMembers.filter(member => member.category === 'alumni');

  // Helper function to render team member cards
  const renderMemberCard = (member: TeamMember) => (
    <Card key={member.key} className="overflow-hidden border-none shadow-md card-hover">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={member.imageSrc} 
          alt={t(`team.members.${member.key}.name`) || member.key} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-xl">{t(`team.members.${member.key}.name`)}</CardTitle>
        <CardDescription className="text-aimat-primary font-medium">{t(`team.positions.${member.position}`) || member.position}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{member.bio[language]}</p>
      </CardContent>
      {member.socialLinks && (
        <CardFooter className="flex gap-4 text-gray-500">
          {member.socialLinks.github && (
            <a href={member.socialLinks.github} className="hover:text-aimat-primary transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} className="hover:text-aimat-primary transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} className="hover:text-aimat-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          )}
          {member.socialLinks.email && (
            <a href={`mailto:${member.socialLinks.email}`} className="hover:text-aimat-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );

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
                <div className="grid grid-cols-1 max-w-md mx-auto mb-16">
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
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-aimat-primary text-white rounded-lg font-medium hover:bg-aimat-secondary transition"
            >
              {t('team.apply')}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
