
import { Award } from "lucide-react";

export default function Team() {
  const awards = [
    "Lions Regional Award for Attapadi Moolagangal Tribal Students project",
    "Hope Foundation Award for Awareness against Drug Addiction",
    "Inner Wheel Vocational Excellence Award for Education Project"
  ];

  const expertise = [
    "Counseling Psychologist",
    "Motivation Speaker",
    "Mind Power Trainer",
    "Happiness Coach",
    "Parenting Trainer",
    "Adolescent Trainer",
  ];

  return (
    <section id="team" className="section-padding bg-brand-50">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-16">
          Meet Our <span className="text-accent1-600">Director</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149708/WhatsApp_Image_2025-05-13_at_14.50.50_putuyi.jpg" 
                  alt="M.P. Sailaja" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-full shadow-lg">
                <Award className="h-10 w-10 text-brand-600" />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-brand-800">M.P. Sailaja</h3>
            <p className="text-accent1-600 font-medium text-lg mb-6">Managing Director, Darshanam Mindful Edu Academy</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Professional Profile</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Counseling Psychologist</li>
                  <li>• Master Trainer</li>
                  <li>• International Career Counselor</li>
                  <li>• Yoga Instructor</li>
                     <li>• Nutrition Advisor</li>
                  <li>• Retired Higher Secondary Principal</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Experience</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 16 years teaching experience</li>
                  <li>• 12 years teacher training experience</li>
                  <li>• 8 years as Administrative and Academic Head</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, index) => (
                  <span 
                    key={index} 
                    className="bg-white border border-brand-200 text-brand-700 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Awards & Recognition</h4>
              <ul className="space-y-2 text-gray-700">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
