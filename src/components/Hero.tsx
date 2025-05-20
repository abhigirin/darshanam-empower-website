
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CourseDialog from "@/components/CourseDialog";
import EnrollmentDialog from "@/components/EnrollmentDialog";

export default function Hero() {
  const [courseDialogOpen, setCourseDialogOpen] = useState(false);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
  
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
              <div className="bg-white p-3 shadow-xl rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                  alt="Students learning" 
                  className="w-full h-auto rounded" 
                />
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
