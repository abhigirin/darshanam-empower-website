
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Psychology Graduate",
      content: "The Advanced Diploma in Counseling Psychology completely transformed my career prospects. The hands-on approach and personalized mentoring provided by the faculty, especially by Ms. Sailaja, gave me the confidence to establish my own counseling practice.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Rahul Menon",
      role: "School Counselor",
      content: "After completing my course at Darshanam, I secured a position as a school counselor. The curriculum was comprehensive and practical, with a perfect balance of theory and real-world applications. The skills I acquired have been invaluable in my professional journey.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Anjali Krishna",
      role: "HR Professional",
      content: "The personality development program at Darshanam Mindful Edu Academy significantly improved my communication skills and confidence. This has been a game-changer in my career as an HR professional, helping me conduct better interviews and training sessions.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-16">
          Student <span className="text-accent1-600">Testimonials</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-lg border-none">
                    <CardContent className="pt-10 pb-8 px-6 md:px-12">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-100 mb-6">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <blockquote className="mb-6">
                          <p className="text-gray-700 text-lg italic">"{testimonial.content}"</p>
                        </blockquote>
                        
                        <div>
                          <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-700 hover:bg-brand-50"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-700 hover:bg-brand-50"
            aria-label="Next testimonial"
          >
            &gt;
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-brand-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
