
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EnrollmentForm from "./EnrollmentForm";

interface EnrollmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EnrollmentDialog({ open, onOpenChange }: EnrollmentDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-brand-700">Course Application Form</DialogTitle>
          <DialogDescription className="text-center">
            Fill in the details below to enroll in a course at Darshanam Mindful Edu Academy
          </DialogDescription>
        </DialogHeader>
        <EnrollmentForm />
      </DialogContent>
    </Dialog>
  );
}
