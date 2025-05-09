
import { Headphones, Book, GraduationCap, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Professional Training Centre",
      description: "Advanced diploma courses in counseling psychology and guidance with Bharath Sevak Samaj certification and skill card.",
      icon: GraduationCap,
    },
    {
      title: "Counseling Services",
      description: "Comprehensive counseling including family, career, individual, and group counseling with special focus on students.",
      icon: MessageSquare,
    },
    {
      title: "Speech Craft Centre",
      description: "Specialized courses designed to improve communication and public speaking skills for personal and professional growth.",
      icon: Headphones,
    },
    {
      title: "Personality Development",
      description: "Programs focused on boosting self-confidence, decision-making abilities, and problem-solving skills.",
      icon: Book,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-16">
          Our <span className="text-accent1-600">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-brand-600" />
                </div>
                <CardTitle className="text-xl text-brand-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
