
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-16">
          Get in <span className="text-accent1-600">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand-800">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              Reach out to us for inquiries about our courses, counseling services, or to schedule a visit to our academy.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <address className="not-italic text-gray-600">
                    M.P. SAILAJA<br />
                    Navaneetham, Krishna Kananthi Colony<br />
                    Puthur, Palakkad (PO)<br />
                    Near Aryas Vegetarian Restaurant
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+919447532077" className="hover:text-brand-600">+91 94475 32077</a><br />
                    <a href="tel:+916282505782" className="hover:text-brand-600">+91 62825 05782</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@darshanam.edu" className="hover:text-brand-600">info@darshanam.edu</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-200">
                  F
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-200">
                  I
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-200">
                  T
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-200">
                  L
                </a>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-800">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="bg-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="bg-white h-32"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
