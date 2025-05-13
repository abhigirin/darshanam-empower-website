
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CourseDialog({ open, onOpenChange }: CourseDialogProps) {
  const ugcCourses = [
    "Certified Skill Diploma in Counseling Psychology (6 months)",
    "Certified Skill Diploma in Pre Primary Teachers Training (6 months)",
    "Certification in Mind Tuning Practioner and Counselor (3 months)",
    "Certification in Train the Trainer (3 months)",
  ];

  const bssCourses = [
    "Advance Diploma in Counseling Psychology (1 year)",
    "Advance Diploma in Guidance and Counseling (1 year)",
    "Advance Diploma in Learning Disability (1 year)",
    "Advance Diploma in Counseling Psychology",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-brand-700">Our Courses</DialogTitle>
          <DialogDescription>
            Explore our range of professional courses designed to transform your career.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="ugc" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ugc">UGC Approved</TabsTrigger>
            <TabsTrigger value="bss">Central Govt Approved BSS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ugc" className="mt-4">
            <div className="bg-brand-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg text-brand-700 mb-3">UGC Approved Courses</h3>
              <ul className="space-y-3">
                {ugcCourses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-brand-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="bss" className="mt-4">
            <div className="bg-accent1-100 rounded-lg p-4">
              <h3 className="font-semibold text-lg text-accent1-600 mb-3">Central Govt Approved BSS Courses</h3>
              <ul className="space-y-3">
                {bssCourses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-accent1-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
