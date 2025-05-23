
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CourseDialog from "@/components/CourseDialog";
import EnrollmentDialog from "@/components/EnrollmentDialog";

// Array of images for the slideshow
const slideImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
];

export default function Hero() {
  const [courseDialogOpen, setCourseDialogOpen] = useState(false);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Effect to handle automatic image sliding
  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 5000);
    
    return () => clearInterval(slideshowTimer);
  }, []);
  
  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=916282505782&text=Hello", "_blank");
  };

  return (
    <section id="home" className="relative pt-24 pb-32 md:pt-36 md:pb-48 bg-gradient-to-br from-brand-50 via-white to-accent1-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Lives,{" "}
              <span className="text-brand-600">Transforming</span> Futures
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Professional training center for counseling psychology, guidance, and personality development. Building confidence and transforming lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg"
                onClick={() => setCourseDialogOpen(true)}
              >
                Explore Courses
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-600 text-brand-600 hover:bg-brand-50 px-8 py-6 text-lg"
                onClick={() => setEnrollmentDialogOpen(true)}
              >
                Apply Now
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-3 shadow-xl rounded-lg overflow-hidden h-72 md:h-96">
                {slideImages.map((src, index) => (
                  <img 
                    key={index}
                    src={src} 
                    alt={`Education slide ${index + 1}`} 
                    className={`absolute w-full h-full object-cover rounded transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ objectPosition: "center" }}
                  />
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent1-500 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-xl">BSS Certified</p>
                <p>Professional Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <CourseDialog open={courseDialogOpen} onOpenChange={setCourseDialogOpen} />
      <EnrollmentDialog open={enrollmentDialogOpen} onOpenChange={setEnrollmentDialogOpen} />
    </section>
  );
}
