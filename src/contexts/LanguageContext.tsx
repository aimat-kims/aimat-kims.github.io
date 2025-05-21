import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ko';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, lang?: Language) => string;
};

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": {
    en: "Home",
    ko: "홈"
  },
  "nav.projects": {
    en: "Projects",
    ko: "프로젝트"
  },
  "nav.team": {
    en: "Team",
    ko: "팀"
  },
  "nav.publications": {
    en: "Publications",
    ko: "논문"
  },
  "nav.contact": {
    en: "Contact",
    ko: "연락처"
  },
  "nav.joinLab": {
    en: "Join Our Lab",
    ko: "연구실 지원"
  },

  // Hero Section
  "hero.title": {
    en: "AI-powered Materials Discovery",
    ko: "AI 기반 재료 발견"
  },
  "hero.subtitle": {
    en: "AIMAT at the Korea Institute of Materials Science explores generative deep learning models to automate materials discovery through inverse design processes.",
    ko: "한국재료연구원 AIMAT는 역설계 프로세스를 통해 재료 발견을 자동화하는 생성형 딥러닝 모델을 연구합니다."
  },
  "hero.exploreButton": {
    en: "Explore Research",
    ko: "연구 살펴보기"
  },
  "hero.joinButton": {
    en: "Join Our Team",
    ko: "팀 합류하기"
  },
  "hero.imageAlt": {
    en: "AI Materials Research",
    ko: "AI 재료 연구"
  },

  // Research/Projects Section
  "projects.title": {
    en: "Research Areas",
    ko: "연구 분야"
  },
  "projects.subtitle": {
    en: "Our laboratory focuses on cutting-edge projects at the intersection of artificial intelligence and materials science, with the goal of accelerating the discovery of novel materials.",
    ko: "우리 연구실은 인공지능과 재료과학의 교차점에서 첨단 프로젝트에 중점을 두고 있으며, 새로운 재료 발견을 가속화하는 것을 목표로 합니다."
  },
  "projects.viewAll": {
    en: "View All Projects",
    ko: "모든 프로젝트 보기"
  },
  
  // Project area specific translations
  "projects.generative.title": {
    en: "Generative Models for Materials",
    ko: "재료를 위한 생성 모델"
  },
  "projects.generative.description": {
    en: "Developing diffusion models and GANs for generating novel material structures with targeted properties.",
    ko: "목표 특성을 가진 새로운 재료 구조를 생성하기 위한 확산 모델 및 GAN 개발."
  },
  "projects.inverse.title": {
    en: "Inverse Design Algorithms",
    ko: "역설계 알고리즘"
  },
  "projects.inverse.description": {
    en: "Creating algorithms that work backwards from desired material properties to optimal chemical compositions.",
    ko: "원하는 재료 특성으로부터 최적의 화학 조성으로 역으로 작동하는 알고리즘 개발."
  },
  "projects.database.title": {
    en: "Materials Databases & Knowledge Graphs",
    ko: "재료 데이터베이스 및 지식 그래프"
  },
  "projects.database.description": {
    en: "Building comprehensive databases and knowledge graphs of materials properties to train AI models.",
    ko: "AI 모델을 훈련시키기 위한 포괄적인 재료 속성 데이터베이스 및 지식 그래프 구축."
  },
  "projects.synthesis.title": {
    en: "Automated Materials Synthesis",
    ko: "자동화된 재료 합성"
  },
  "projects.synthesis.description": {
    en: "Developing AI-guided robotic platforms for high-throughput materials synthesis and characterization.",
    ko: "고처리량 재료 합성 및 특성 평가를 위한 AI 기반 로봇 플랫폼 개발."
  },
  "projects.prediction.title": {
    en: "Materials Property Prediction",
    ko: "재료 특성 예측"
  },
  "projects.prediction.description": {
    en: "Utilizing neural networks to accurately predict physical, chemical, and mechanical properties of materials.",
    ko: "신경망을 활용하여 재료의 물리적, 화학적, 기계적 특성을 정확하게 예측."
  },
  "projects.applications.title": {
    en: "Novel Materials Applications",
    ko: "신소재 응용"
  },
  "projects.applications.description": {
    en: "Applying our AI-designed materials to solve challenges in energy, electronics, and healthcare sectors.",
    ko: "에너지, 전자, 헬스케어 분야의 문제 해결을 위한 AI 설계 재료 응용."
  },
  "projects.collaboration.title": {
    en: "Project Collaboration",
    ko: "프로젝트 협업"
  },
  "projects.collaboration.description": {
    en: "We actively collaborate with universities, industry partners, and government research institutes. If you're interested in partnering with us, please reach out.",
    ko: "우리는 대학, 산업 파트너 및 정부 연구소와 적극적으로 협력합니다. 협력에 관심이 있으시면 연락주세요."
  },
  "projects.collaboration.contactUs": {
    en: "Contact Us",
    ko: "연락하기"
  },
  
  // Team Section
  "team.title": {
    en: "Our Team",
    ko: "연구팀"
  },
  "team.subtitle": {
    en: "Our interdisciplinary team combines expertise in materials science, AI, computational physics, and engineering.",
    ko: "우리 팀은 재료 과학, AI, 전산 물리학 및 공학 분야의 전문 지식을 결합한 학제 간 팀입니다."
  },
  "team.viewAll": {
    en: "View All Team Members",
    ko: "모든 팀원 보기"
  },
  "team.join": {
    en: "Join Our Team",
    ko: "팀에 합류하기"
  },
  "team.joinDescription": {
    en: "We're always looking for talented researchers, postdocs, and graduate students to join our team. If you're passionate about AI and materials science, we'd love to hear from you.",
    ko: "우리는 항상 재능 있는 연구원, 박사 후 연구원 및 대학원생이 팀에 합류하기를 기대합니다. AI와 재료 과학에 열정이 있다면 연락해 주세요."
  },
  "team.apply": {
    en: "Apply to Join",
    ko: "지원하기"
  },
  
  // Team member roles
  "team.positions.Principal Investigator": {
    en: "Principal Investigator",
    ko: "수석 연구원"
  },
  "team.positions.Postdoctoral Researcher": {
    en: "Postdoctoral Researcher",
    ko: "박사후 연구원"
  },
  "team.positions.PhD Candidate": {
    en: "PhD Candidate",
    ko: "박사 과정"
  },
  "team.positions.MS-PhD Integrated Course": {
    en: "MS-PhD Integrated Course",
    ko: "석박사 통합과정"
  },
  "team.positions.MS Candidate": {
    en: "MS Candidate",
    ko: "석사 과정"
  },
  
  // Team member names
  "team.members.hwlee.name": {
    en: "Prof. Ho Won Lee",
    ko: "이호원 교수"
  },
  "team.members.ykim.name": {
    en: "Dr. Yong-Nam Kim",
    ko: "김용남 박사"
  },
  "team.members.mtran.name": {
    en: "Dr. Minh Tien Tran",
    ko: "민 티엔 트란 박사"
  },
  "team.members.phcuong.name": {
    en: "Phan Hoang Cuong",
    ko: "Phan Hoang Cuong"
  },
  "team.members.nhnam.name": {
    en: "Nguyen Hai Nam",
    ko: "응우옌 하이 남"
  },
  "team.members.hjlee.name": {
    en: "Han-Jun Lee",
    ko: "이한준"
  },
  "team.members.sean.name": {
    en: "Seong-Eun An",
    ko: "안성은"
  },

  // Publications Section
  "publications.title": {
    en: "Recent Publications",
    ko: "최근 논문"
  },
  "publications.viewPublication": {
    en: "View Publication",
    ko: "논문 보기"
  },
  "publications.viewAll": {
    en: "View All Publications",
    ko: "모든 논문 보기"
  },

  // Equipment Section
  "equipments.title": {
    en: "Lab Equipments",
    ko: "실험실 장비"
  },
  "equipments.description": {
    en: "State-of-the-art equipment including automatic rolling mill, automatic laser processing machine, XRD, 3D scanner, automatic tensile testing machine, AI server (16×A100, 20×A6000), etc.",
    ko: "자동 롤링 밀, 자동 레이저 가공기, XRD, 3D 스캐너, 자동 인장 시험기, AI 서버(16×A100, 20×A6000) 등 최첨단 장비를 갖추고 있습니다."
  },
  "equipments.a100": {
    en: "16 x A100 GPU Server",
    ko: "16 x A100 GPU 서버"
  },
  "equipments.a6000": {
    en: "20 x A6000 GPU Server",
    ko: "20 x A6000 GPU 서버"
  },
  "equipments.rollingMill": {
    en: "Automatic Rolling Mill",
    ko: "자동 롤링 밀"
  },
  "equipments.laserMachine": {
    en: "Laser Machine",
    ko: "레이저 가공기"
  },
  "equipments.xrd": {
    en: "XRD",
    ko: "XRD"
  },
  "equipments.3dScanner": {
    en: "3D Scanner",
    ko: "3D 스캐너"
  },
  "equipments.tensileMachine": {
    en: "Tensile Testing Machine",
    ko: "인장 시험기"
  },
  "equipments.servoPress": {
    en: "Servo Press",
    ko: "서보 프레스"
  },

  // Contact Section
  "contact.title": {
    en: "Contact Us",
    ko: "연락처"
  },
  "contact.subtitle": {
    en: "Get in touch with our team for collaborations, inquiries, or to join our lab.",
    ko: "공동 연구, 문의 또는 연구실 합류를 위해 저희 팀에 연락하세요."
  },
  "contact.location": {
    en: "Location",
    ko: "위치"
  },
  "contact.email": {
    en: "Email",
    ko: "이메일"
  },
  "contact.phone": {
    en: "Phone",
    ko: "전화"
  },
  "contact.getInTouch": {
    en: "Get in Touch",
    ko: "연락하기"
  },

  // Footer
  "footer.quickLinks": {
    en: "Quick Links",
    ko: "빠른 링크"
  },
  "footer.resources": {
    en: "Resources",
    ko: "리소스"
  },
  "footer.rights": {
    en: "All rights reserved.",
    ko: "모든 권리 보유."
  },

  // Language Switcher
  "language.english": {
    en: "English",
    ko: "영어"
  },
  "language.korean": {
    en: "Korean",
    ko: "한국어"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, lang?: Language): string => {
    const currentLang = lang || language;
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][currentLang] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};