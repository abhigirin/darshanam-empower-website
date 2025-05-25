
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import EnrollmentDialog from "./EnrollmentDialog";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
    { name: "Services", href: "#services", isExternal: false },
    { name: "Courses", href: "#courses", isExternal: false },
    { name: "Gallery", href: "/gallery", isExternal: true },
    { name: "Testimonials", href: "#testimonials", isExternal: false },
    { name: "Contact", href: "#contact", isExternal: false },
  ];

  const handleEnrollClick = () => {
    setEnrollmentDialogOpen(true);
  };

  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=916282505782&text=Hello", "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-brand-700">
              Darshanam <span className="text-accent1-600">Mindful</span> Edu
              Academy
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-brand-600 hover:bg-brand-700 text-white"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  item.isExternal ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-brand-600 border-b"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-brand-600 border-b"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <div className="p-4">
                  <Button 
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <EnrollmentDialog 
        open={enrollmentDialogOpen} 
        onOpenChange={setEnrollmentDialogOpen} 
      />
    </>
  );
}
