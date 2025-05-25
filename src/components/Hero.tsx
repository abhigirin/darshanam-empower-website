import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CourseDialog from "@/components/CourseDialog";
import EnrollmentDialog from "@/components/EnrollmentDialog";

// Array of images for the slideshow
const slideImages = [
  "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197543/photo_2025-05-25_23-55-00_pbmato.jpg",
  "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197543/photo_2025-05-25_23-54-59_kfo1oe.jpg",
  "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748196281/photo_2025-05-25_23-34-12_2_ro2qx3.jpg",
  "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748196281/photo_2025-05-25_23-34-11_tfk2tc.jpg",
  "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748196281/photo_2025-05-25_23-34-11_2_gvm7d3.jpg",
];

export default function Hero() {
  const [courseDialogOpen, setCourseDialogOpen] = useState(false);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Effect to handle automatic image sliding with cleanup
  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 3000);
    
    return () => clearInterval(slideshowTimer);
  }, []);
  
  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=916282505782&text=Hello", "_blank");
  };

  // Navigation functions for manual control
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <section id="home" className="relative pt-24 pb-32 md:pt-36 md:pb-48 bg-gradient-to-br from-brand-50 via-white to-accent1-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Lives,{" "}
              <span className="text-brand-600">Transforming</span> Futures
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Professional training center for counseling psychology, guidance, and personality development. Building confidence and transforming lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-brand-600 hover:bg-brand-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105"
                onClick={() => setCourseDialogOpen(true)}
              >
                Explore Courses
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-600 text-brand-600 hover:bg-brand-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105"
                onClick={() => setEnrollmentDialogOpen(true)}
              >
                Apply Now
              </Button>
            </div>
          </div>
          
          {/* Image/Poster Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative max-w-md w-full">
              {/* Main Image Container - Optimized for square/portrait */}
              <div className="relative bg-white p-2 sm:p-3 shadow-xl rounded-xl overflow-hidden">
                <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden rounded-lg">
                  {slideImages.map((src, index) => (
                    <img 
                      key={index}
                      src={src} 
                      alt={`Professional course poster ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-contain bg-gray-50 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-brand-600 w-6" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Certification Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-accent1-500 text-white p-3 sm:p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="font-bold text-sm sm:text-lg">UGC Certified</p>
                <p className="text-xs sm:text-sm">Professional Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      {/* Dialogs */}
      <CourseDialog open={courseDialogOpen} onOpenChange={setCourseDialogOpen} />
      <EnrollmentDialog open={enrollmentDialogOpen} onOpenChange={setEnrollmentDialogOpen} />
    </section>
  );
}