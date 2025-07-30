import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container-section">
        {/* <h2 className="section-heading">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Feel free to reach out if you're interested in collaborating or have any questions about our research.
        </p> */}

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg overflow-hidden" style={{ paddingLeft: '6rem' }}>
            <div className="grid grid-cols-10 items-stretch">
              <div className="col-span-3 relative h-full flex items-center justify-center">
                <img 
                  src="/images/contact.png" 
                  alt="Contact us" 
                  className="max-w-[100%] min-h-[160%] absolute inset-0 w-full h-full object-cover "
                />
              </div>
              <CardContent className="col-span-7 p-8">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-aimat-light p-3 rounded-lg text-aimat-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-lg">Location</h4>
                      <p className="text-gray-600">
                        AIMAT Lab,<br />
                        Korea Institute of Materials Science<br />
                        797 Changwon-daero, Seongsan-gu<br />
                        Changwon, 51508, Republic of Korea
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-aimat-light p-3 rounded-lg text-aimat-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-lg">Email</h4>
                      <a href="mailto:contact@aimat.kr" className="text-aimat-primary hover:underline">h.lee@kims.re.kr</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
