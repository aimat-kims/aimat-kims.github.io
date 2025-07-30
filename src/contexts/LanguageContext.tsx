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
  "projects.deeplearning.title": {
    en: "Deep Learning for Materials and Processing",
    ko: "재료 및 공정을 위한 딥러닝"
  },
  "projects.deeplearning.description": {
    en: "Applying deep learning techniques to materials science and processing, developing advanced neural networks for materials property prediction and process optimization.",
    ko: "재료 과학 및 가공에 딥러닝 기술을 적용하여 재료 특성 예측 및 공정 최적화를 위한 고급 신경망을 개발합니다."
  },
  "projects.mldiscovery.title": {
    en: "ML for Materials Discovery",
    ko: "재료 발견을 위한 ML"
  },
  "projects.mldiscovery.description": {
    en: "Phase segmentation by SSL algorithm, active learning combined with autonomous lab for accelerated materials discovery and characterization.",
    ko: "SSL 알고리즘에 의한 상 분할, 자율 실험실과 결합된 능동 학습을 통한 가속화된 재료 발견 및 특성 분석."
  },
  "projects.mltest.title": {
    en: "ML for New Material Testing",
    ko: "신소재 시험을 위한 ML"
  },
  "projects.mltest.description": {
    en: "AI-based indentation test for measuring sheet metal anisotropy and developing intelligent testing methodologies for material characterization.",
    ko: "판재 이방성 측정을 위한 AI 기반 압입 시험 및 재료 특성 분석을 위한 지능형 시험 방법론 개발."
  },
  "projects.mlprocess.title": {
    en: "ML for Process Design",
    ko: "공정 설계를 위한 ML"
  },
  "projects.mlprocess.description": {
    en: "FLD prediction by GAN and CNN, GNN based FEM for advanced process modeling and design optimization.",
    ko: "GAN과 CNN에 의한 FLD 예측, 고급 공정 모델링 및 설계 최적화를 위한 GNN 기반 FEM."
  },
  "projects.autonomouslab.title": {
    en: "Autonomous Lab for Materials Discovery",
    ko: "재료 발견을 위한 자율 실험실"
  },
  "projects.autonomouslab.description": {
    en: "Development of autonomous laboratory for materials and processing, integrating robotics, AI, and high-throughput experimentation.",
    ko: "로봇 공학, AI 및 고처리량 실험을 통합한 재료 및 가공을 위한 자율 실험실 개발."
  },
  "projects.multiscale.title": {
    en: "Multiscale, Multi-physics Simulation",
    ko: "다중스케일, 다중물리 시뮬레이션"
  },
  "projects.multiscale.description": {
    en: "Forming Limit Diagram prediction by CPFE-VPSC method, cellular automata modeling of metallurgical phenomena such as phase transformation, static recrystallization, strain induced dynamic transformation.",
    ko: "CPFE-VPSC 방법에 의한 성형한계도 예측, 상변태, 정적 재결정, 변형 유도 동적 변태와 같은 야금학적 현상의 셀룰러 오토마타 모델링."
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
  
  // // Team member roles
  // "team.positions.Principal Investigator": {
  //   en: "Principal Investigator",
  //   ko: "수석 연구원"
  // },
  // "team.positions.Postdoctoral Researcher": {
  //   en: "Postdoctoral Researcher",
  //   ko: "박사후 연구원"
  // },
  // "team.positions.PhD Candidate": {
  //   en: "PhD Candidate",
  //   ko: "박사 과정"
  // },
  // "team.positions.MS-PhD Integrated Course": {
  //   en: "MS-PhD Integrated Course",
  //   ko: "석박사 통합과정"
  // },
  // "team.positions.MS Candidate": {
  //   en: "MS Candidate",
  //   ko: "석사 과정"
  // },
  // "team.positions.Post-Master": {
  //   en: "Post-Master",
  //   ko: "석사 후 연구원"
  // },
  // "team.positions.Integrated Student": {
  //   en: "Integrated Student",
  //   ko: "통합과정 학생"
  // },
  
  // Team member names
  "team.members.hwlee.name": {
    en: "Ho Won Lee Ph.D",
    ko: "이호원 박사"
  },
  "team.members.hwlee.position": {
    en: "Professor|Department of Advanced Materials Engineering|University of Science and Technology (UST)||Director, Principal Researcher|Materials Data and Analysis Research Division|Korea Institute of Materials Science (KIMS)",
    ko: "교수|첨단소재공학과|과학기술연합대학원대학교(UST)||소장, 수석연구원|재료데이터 해석연구본부|한국재료연구원(KIMS)"
  },
  "team.members.hwlee.contact": {
    en: "797 Changwondaero, Changwon, Gyeongnam, 51508, Republic of Korea\nTel: +82-55-280-3843\nE-mail: h.lee@kims.re.kr",
    ko: "경상남도 창원시 창원대로 797, 51508, 대한민국\n전화: +82-55-280-3843\n이메일: h.lee@kims.re.kr"
  },
  "team.members.hwlee.experience": {
    en: "• Professor, Department of Advanced Materials Engineering, University of Science and Technology (Mar 2023 ~ Present)\n• Director, Materials Data & Analysis Research Division, Korea Institute of Materials Science (Jun 2024 ~ Present)\n• Principal Researcher/Senior researcher, Department of Materials AI & Big Data, Korea Institute of Materials Science (Dec 2011 ~ Present)\n• Visiting Researcher, ICAMS, Ruhr-Universität Bochum (Apr 2013 ~ Jun 2013)\n• Postdoctoral Researcher, KAIST Mechanical Engineering Institute, KAIST (Sep 2011 ~ Dec 2011)\n• Scientist, Max-Planck Institute for Iron Research, Germany (Sep 2010 ~ Aug 2011)\n• Postdoctoral Researcher, KAIST Mechanical Engineering Institute, KAIST (Feb 2010 ~ Aug 2010)",
    ko: "• 교수, 첨단소재공학과, 과학기술연합대학원대학교 (2023년 3월 ~ 현재)\n• 소장, 재료데이터 해석연구본부, 한국재료연구원 (2024년 6월 ~ 현재)\n• 수석연구원/선임연구원, 재료AI빅데이터연구실, 한국재료연구원 (2011년 12월 ~ 현재)\n• 방문연구원, ICAMS, 루르대학교 보훔 (2013년 4월 ~ 2013년 6월)\n• 박사후연구원, KAIST 기계공학연구소, KAIST (2011년 9월 ~ 2011년 12월)\n• 연구원, 막스플랑크 철강연구소, 독일 (2010년 9월 ~ 2011년 8월)\n• 박사후연구원, KAIST 기계공학연구소, KAIST (2010년 2월 ~ 2010년 8월)"
  },
  "team.members.hwlee.education": {
    en: "• Ph.D., School of Mechanical, Aerospace and Systems Engineering, KAIST (Jan 2010)\n• B.Sc., Department of Mechanical Engineering, KAIST (Feb 2003)",
    ko: "• 박사, 기계항공시스템공학부, KAIST (2010년 1월)\n• 학사, 기계공학과, KAIST (2003년 2월)"
  },
  "team.members.hwlee.dissertation": {
    en: "Prediction of Microstructure by Multi-scale Modeling of Recrystallization based on Cellular Automata and Finite Element Method, Advisor: Prof. Yong-Taek Im",
    ko: "셀룰러 오토마타와 유한요소법 기반 다중스케일 재결정 모델링을 통한 미세구조 예측, 지도교수: 임용택 교수"
  },
  "team.members.hwlee.interests": {
    en: "Research Topics:\n\nDeep learning for materials and Processing\n• ML for Materials discovery (cf. phase segmentation by SSL algorithm, active learning combined with autonomous Lab)\n• ML for new material test (cf. AI-based indentation test for measuring sheet metal anisotropy)\n• ML for Process Design (cf. FLD prediction by GAN and CNN, GNN based FEM)\n\nAutonomous Lab for materials Discovery\n• Development of autonomous lab for materials and processing\n\nMultiscale, Multi-physics Simulation of Materials Processing\n• Forming Limit Diagram prediction by CPFE-VPSC method\n• Cellular automata modeling of metallurgical phenomena such as phase transformation, static recrystallization, strain induced dynamic transformation",
    ko: "연구 주제:\n\n재료 및 공정을 위한 딥러닝\n• 재료 발견을 위한 ML (SSL 알고리즘에 의한 상 분할, 자율랩과 결합된 능동학습)\n• 신소재 시험을 위한 ML (판재 이방성 측정을 위한 AI 기반 압입시험)\n• 공정 설계를 위한 ML (GAN과 CNN에 의한 FLD 예측, GNN 기반 FEM)\n\n재료 발견을 위한 자율랩\n• 재료 및 공정을 위한 자율랩 개발\n\n재료 가공의 다중스케일, 다중물리 시뮬레이션\n• CPFE-VPSC 방법에 의한 성형한계도 예측\n• 상변태, 정적 재결정, 변형 유도 동적 변태와 같은 야금학적 현상의 셀룰러 오토마타 모델링"
  },
  "team.members.hwlee.service": {
    en: "• Editorial Committee, Transactions of Materials Processing, Korean Society of Technology of Plasticity (2023 ~ Present)\n• Organizing committee of the 14th Asia-Pacific Symposium on Engineering Plasticity and its Applications (2018)\n• Organizing committee of International Cold Forging Group (ICFG) - 48th plenary meeting (2015)\n• Conference Secretary of International Conferences on Advances in Materials and Processing Technologies (2007)\n\nMemberships:\n• Member of The Korean Institute of Metals and Materials (KIM)\n• Member of Korea Society for Technology of Plasticity (KSTP)\n• Member of Korea Society of Mechanical Engineers (KSME)\n• Member of Korea Society of Precision Engineers (KSPE)\n• Member of Korean Artificial Intelligence Association (KAIA)",
    ko: "• 편집위원회, 소성가공학회지, 한국소성가공학회 (2023년 ~ 현재)\n• 제14회 아시아태평양 공학소성 및 응용 심포지엄 조직위원회 (2018년)\n• 국제냉간단조그룹(ICFG) - 제48회 총회 조직위원회 (2015년)\n• 재료가공기술 발전 국제회의 학회 간사 (2007년)\n\n학회 소속:\n• 대한금속재료학회(KIM) 회원\n• 한국소성가공학회(KSTP) 회원\n• 대한기계학회(KSME) 회원\n• 한국정밀공학회(KSPE) 회원\n• 한국인공지능학회(KAIA) 회원"
  },
  "team.members.hwlee.awards": {
    en: "• Young Engineer Award, Korea Society for Technology of Plasticity (October 2017)\n• Best Poster Paper Award, Korea Society for Technology of Plasticity conference (May 2012)\n• Max-Planck Scholarship, Max-Planck Institute for Iron Research (Sep 2010 ~ Aug 2011)\n• Excellent Teaching Assistant Award from Department of Mechanical Engineering, KAIST",
    ko: "• 젊은 공학자상, 한국소성가공학회 (2017년 10월)\n• 우수 포스터 논문상, 한국소성가공학회 학술대회 (2012년 5월)\n• 막스플랑크 장학금, 막스플랑크 철강연구소 (2010년 9월 ~ 2011년 8월)\n• 우수 조교상, KAIST 기계공학과"
  },
  "team.viewMoreDetails": {
    en: "View More Details",
    ko: "자세히 보기"
  },
  "team.viewLessDetails": {
    en: "View Less",
    ko: "간단히 보기"
  },
  "team.professionalExperience": {
    en: "Professional Experience",
    ko: "경력사항"
  },
  "team.education": {
    en: "Education",
    ko: "학력"
  },
  "team.dissertation": {
    en: "Dissertation",
    ko: "학위논문"
  },
  "team.researchInterests": {
    en: "Research Interests",
    ko: "연구 관심분야"
  },
  "team.professionalService": {
    en: "Professional Service/Memberships",
    ko: "학회활동/소속"
  },
  "team.awards": {
    en: "Awards/Grants",
    ko: "수상/연구비"
  },
  "team.members.ykim.name": {
    en: "Yong-Nam Kim, Ph.D",
    ko: "김용남 박사"
  },
  "team.members.mtran.name": {
    en: "Minh Tien Tran, Ph.D",
    ko: "민 티엔 트란 박사"
  },
  "team.members.phcuong.name": {
    en: "Phan Hoang Cuong",
    ko: "Phan Hoang Cuong"
  },
  "team.members.mooyeong_joo.name": {
    en: "Mooyeong Joo",
    ko: "Mooyeong Joo"
  },
  "team.members.nhnam.name": {
    en: "Nguyen Hoang Hai Nam",
    ko: "응우옌 하이 남"
  },
  "team.members.hjlee.name": {
    en: "Han-Jun Lee",
    ko: "이한준"
  },
  "team.members.sean.name": {
    en: "An Sung Eun",
    ko: "안성은"
  },
  "team.members.dhkim.name": {
    en: "Dong-Hyuk Kim",
    ko: "김동혁"
  },
  "team.members.phannguyenduchieu.name": {
    en: "Phan Nguyen Duc Hieu",
    ko: "판 응우옌 둑 히에우"
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
  },

  // Join Us Page
  "joinUs.title": {
    en: "Join Our Lab",
    ko: "연구실 지원"
  },
  "joinUs.subtitle": {
    en: "Be part of cutting-edge research in AI and materials science",
    ko: "AI와 재료과학의 최첨단 연구에 참여하세요"
  },
  "joinUs.positionTitle": {
    en: "Position Opening",
    ko: "채용 공고"
  },
  "joinUs.positionSubtitle": {
    en: "Join our team of researchers dedicated to advancing materials science through AI",
    ko: "AI를 통해 재료과학을 발전시키는 연구팀에 합류하세요"
  },
  "joinUs.descriptionTitle": {
    en: "About the Position",
    ko: "포지션 소개"
  },
  "joinUs.description": {
    en: "We are looking for a qualified student to join our lab focused on studying artificial intelligence (AI) within the field of materials and materials processing. We are seeking an individual with a strong understanding of AI principles and their application in materials science. The ideal candidate should possess a solid foundation in machine learning algorithms, data analysis, and programming languages (Python) commonly used in AI research. Their role will involve contributing to ongoing projects, conducting experiments, analyzing data, and collaborating with other research teams. If you have a passion for AI and materials, and a desire to make innovative contributions, we encourage you to apply.",
    ko: "재료 및 재료 가공 분야에서 인공지능(AI) 연구에 집중하는 저희 연구실에 합류할 자격을 갖춘 학생을 찾고 있습니다. AI 원리와 재료과학에서의 응용에 대한 강한 이해를 가진 개인을 찾고 있습니다. 이상적인 후보자는 머신러닝 알고리즘, 데이터 분석, 그리고 AI 연구에서 일반적으로 사용되는 프로그래밍 언어(Python)에 대한 탄탄한 기초를 갖추어야 합니다. 이들의 역할은 진행 중인 프로젝트에 기여하고, 실험을 수행하고, 데이터를 분석하고, 다른 연구팀과 협력하는 것을 포함합니다. AI와 재료에 대한 열정과 혁신적인 기여를 하고자 하는 의지가 있다면 지원을 권장합니다."
  },
  "joinUs.requirementsTitle": {
    en: "Requirements",
    ko: "지원 자격"
  },
  "joinUs.req1": {
    en: "Strong understanding of AI principles and machine learning",
    ko: "AI 원리와 머신러닝에 대한 깊은 이해"
  },
  "joinUs.req2": {
    en: "Solid foundation in data analysis and programming (Python)",
    ko: "데이터 분석 및 프로그래밍(Python) 기초 실력"
  },
  "joinUs.req3": {
    en: "Interest in materials science and materials processing",
    ko: "재료과학 및 재료 가공에 대한 관심"
  },
  "joinUs.req4": {
    en: "Passion for innovative research and collaboration",
    ko: "혁신적인 연구와 협업에 대한 열정"
  },
  "joinUs.responsibilitiesTitle": {
    en: "Responsibilities",
    ko: "담당 업무"
  },
  "joinUs.resp1": {
    en: "Contributing to ongoing AI and materials research projects",
    ko: "진행 중인 AI 및 재료 연구 프로젝트에 기여"
  },
  "joinUs.resp2": {
    en: "Conducting experiments and analyzing research data",
    ko: "실험 수행 및 연구 데이터 분석"
  },
  "joinUs.resp3": {
    en: "Collaborating with interdisciplinary research teams",
    ko: "학제간 연구팀과의 협력"
  },
  "joinUs.resp4": {
    en: "Developing and implementing machine learning algorithms",
    ko: "머신러닝 알고리즘 개발 및 구현"
  },
  "joinUs.contactTitle": {
    en: "Contact Information",
    ko: "연락처 정보"
  },
  "joinUs.contactText": {
    en: "Interested candidates are encouraged to apply. Please contact:",
    ko: "관심 있는 지원자는 지원을 권장합니다. 다음으로 연락주세요:"
  },
  "joinUs.benefitsTitle": {
    en: "Research Facilities & Equipment",
    ko: "연구 시설 및 장비"
  },
  "joinUs.benefitsDescription": {
    en: "Access state-of-the-art equipment and facilities for cutting-edge research in AI and materials science.",
    ko: "AI와 재료과학의 최첨단 연구를 위한 최신 장비와 시설을 이용할 수 있습니다."
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