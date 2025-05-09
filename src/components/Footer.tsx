
export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Darshanam Mindful Edu Academy</h3>
            <p className="mb-4 text-gray-300">
              Empowering lives and transforming futures through quality education and counseling services.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Darshanam Mindful Edu Academy. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-300 mb-4">
              Navaneetham, Krishna Kananthi Colony<br />
              Puthur, Palakkad (PO)<br />
              Kerala, India
            </address>
            <p className="text-gray-300">
              <strong>Phone:</strong> +91 94475 32077, +91 62825 05782
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> info@darshanam.edu
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>
            Designed and developed with ❤️ for Darshanam Mindful Edu Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
