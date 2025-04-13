
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Interested in our research or potential collaborations? Get in touch with us.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Whether you're interested in collaborating, joining our team, or just have questions about our research, 
              we'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-aimat-light p-3 rounded-lg text-aimat-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg">Location</h4>
                  <p className="text-gray-600">
                    AIMAT Lab, Room 456<br />
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
                  <a href="mailto:contact@aimat.kr" className="text-aimat-primary hover:underline">contact@aimat.kr</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-aimat-light p-3 rounded-lg text-aimat-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg">Phone</h4>
                  <a href="tel:+82-55-280-3000" className="text-aimat-primary hover:underline">+82-55-280-3000</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-aimat-light p-3 rounded-lg text-aimat-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                    <Input id="subject" placeholder="Message subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">Message</label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-aimat-primary hover:bg-aimat-secondary">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
