
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Advance Diploma in Counseling Psychology",
      duration: "12 months",
      features: [
        "Comprehensive psychological counseling techniques",
        "Bharath Sevak Samaj certification",
        "Practical case studies and hands-on training",
        "Career opportunities in various sectors",
      ],
      popular: true,
    },
    {
      title: "Advance Diploma in Guidance and Counseling",
      duration: "10 months",
      features: [
        "Specialized guidance counseling methodologies",
        "Both online and offline learning options",
        "Practical and theoretical learning aspects",
        "Professional skill development",
      ],
      popular: false,
    }
  ];

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-16">
          Our <span className="text-accent1-600">Courses</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg border ${
                course.popular ? 'border-brand-500' : 'border-gray-200'
              } relative`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-brand-500 text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-500 mb-6">Duration: {course.duration}</p>
                
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full py-6 ${
                  course.popular 
                    ? 'bg-brand-600 hover:bg-brand-700 text-white' 
                    : 'bg-secondary hover:bg-gray-200 text-gray-800'
                }`}>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Our courses are designed to equip you with the skills and knowledge needed to excel in the field of counseling and psychology.
          </p>
          <Button className="bg-accent1-500 hover:bg-accent1-600 text-white">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
