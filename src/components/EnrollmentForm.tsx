import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarIcon, User, FileText, MapPin, Phone, GraduationCap, Users, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  courseName: z.string().min(1, { message: "Course name is required" }),
  studentName: z.string().min(1, { message: "Student name is required" }),
  address: z.string().min(5, { message: "Address is required and must be at least 5 characters" }),
  mobile: z.string().min(10, { message: "Mobile number is required" })
    .regex(/^[0-9]{10}$/, { message: "Please enter a valid 10-digit mobile number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  dob: z.date({ required_error: "Date of birth is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  education: z.string().min(1, { message: "Educational qualification is required" }),
  guardian: z.string().min(1, { message: "Guardian name is required" }),
  courseType: z.enum(["ugc", "bss"], { required_error: "Course type is required" }),
  declaration: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function EnrollmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Course lists from CourseDialog
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

  // Get all courses for the dropdown
  const [availableCourses, setAvailableCourses] = useState<string[]>([]);
  
  // Update available courses when course type changes
  const updateAvailableCourses = (type: string) => {
    if (type === "ugc") {
      setAvailableCourses(ugcCourses);
    } else {
      setAvailableCourses(bssCourses);
    }
  };
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: "",
      studentName: "",
      address: "",
      mobile: "",
      email: "",
      age: "",
      education: "",
      guardian: "",
      courseType: "ugc",
      declaration: false,
    },
  });

  // Initialize available courses on component mount
  useState(() => {
    updateAvailableCourses(form.getValues("courseType"));
  });

  // Watch for course type changes to update available courses
  const courseType = form.watch("courseType");
  useState(() => {
    updateAvailableCourses(courseType);
  }, [courseType]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format the data for Google Sheets
      const formattedData = {
        ...data,
        dob: format(data.dob, "yyyy-MM-dd"),
        declaration: data.declaration ? "Yes" : "No",
        timestamp: new Date().toISOString(),
      };
      
      console.log("Form data to submit:", formattedData);
      
      // Here you would normally make a fetch request to your Google Sheets API endpoint
      // For demonstration, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your enrollment application. We will contact you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-brand-700 mb-2">Darshanam Mindful Edu Academy</h2>
        <p className="text-sm text-gray-600">Affiliated by BHARAT SEVAK SAMAJ</p>
        <p className="text-sm text-gray-600">(National Development Agency Established in 1952 Planning Commission, Govt. of India)</p>
        <h3 className="text-xl font-semibold mt-4">APPLICATION FOR COURSE</h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="courseType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Course Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        updateAvailableCourses(value);
                      }}
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ugc" id="ugc" />
                        <label htmlFor="ugc" className="font-medium cursor-pointer">
                          UGC Approved
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bss" id="bss" />
                        <label htmlFor="bss" className="font-medium cursor-pointer">
                          Central Govt Approved BSS
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="courseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the Course</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4 text-gray-500" />
                          <SelectValue placeholder="Select a course" />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableCourses.map((course, index) => (
                        <SelectItem key={index} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the Student</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input className="pl-10" placeholder="Enter your full name" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Textarea 
                        className="pl-10 min-h-[100px]" 
                        placeholder="Enter your full address" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input 
                          className="pl-10"
                          placeholder="10-digit mobile number" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="yourname@example.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={`w-full pl-3 text-left font-normal ${
                              !field.value ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Your current age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Educational Qualification</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input 
                        className="pl-10"
                        placeholder="Your highest educational qualification" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guardian"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of Parent / Guardian</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input 
                        className="pl-10"
                        placeholder="Enter parent/guardian name" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="border-t pt-4 mt-6">
              <FormField
                control={form.control}
                name="declaration"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Declaration</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        I hereby declare that all entries made above are true to the best of my knowledge and belief. 
                        I agree to abide by the rules and regulations of the Institute and in case of any misconduct 
                        I am aware that I am liable for punishment including removal from the course.
                      </p>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              type="submit"
              className="bg-brand-600 hover:bg-brand-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isSubmitting}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
