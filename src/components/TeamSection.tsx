
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

type TeamMember = {
  name: string;
  position: string;
  bio: string;
  imageSrc: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Min-Seok Park",
      position: "Laboratory Director",
      bio: "Leading researcher in AI applications for materials science with over 15 years of experience in computational materials design.",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTkwNTI5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      socialLinks: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "director@aimat.kr"
      }
    },
    {
      name: "Dr. Ji-Hyun Kim",
      position: "Senior Researcher",
      bio: "Specializes in generative adversarial networks for materials design with a background in computational chemistry.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHdvbWFufHx8fHx8MTY3OTkwNTQ0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "kim@aimat.kr"
      }
    },
    {
      name: "Dr. Tae-Yeon Lee",
      position: "Research Scientist",
      bio: "Expert in machine learning algorithms for materials property prediction with a focus on 2D materials.",
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHdvbWFufHx8fHx8MTY3OTkwNTUwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "lee@aimat.kr"
      }
    },
    {
      name: "Dr. Jin-Woo Choi",
      position: "Postdoctoral Researcher",
      bio: "Works on deep learning architectures for predicting complex material behaviors and phase transitions.",
      imageSrc: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fDE2Nzk5MDU2MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "choi@aimat.kr"
      }
    },
    {
      name: "Dr. Mi-Sook Kang",
      position: "Research Scientist",
      bio: "Specializes in material synthesis guided by machine learning, with expertise in inorganic materials.",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHdvbWFufHx8fHx8MTY3OTkwNTgxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "kang@aimat.kr"
      }
    },
    {
      name: "Dr. Young-Jun Park",
      position: "Postdoctoral Researcher",
      bio: "Developing reinforcement learning algorithms for optimizing material synthesis parameters and conditions.",
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbnx8fHx8fDE2Nzk5MDU2ODU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "ypark@aimat.kr"
      }
    }
  ];

  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">Our Research Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Meet the interdisciplinary team of researchers driving innovation at the intersection of AI and materials science.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md card-hover">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={member.imageSrc} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                <CardDescription className="text-aimat-primary font-medium">{member.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
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
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-semibold mb-4">Join Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented researchers, postdocs, and graduate students to join our team.
            If you're passionate about AI and materials science, we'd love to hear from you.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-aimat-primary text-white rounded-lg font-medium hover:bg-aimat-secondary transition"
          >
            Apply to Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
