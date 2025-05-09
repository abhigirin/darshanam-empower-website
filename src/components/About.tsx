
import { Award, Book, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-12">
          About <span className="text-accent1-600">Darshanam</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
              alt="Darshanam Mindful Edu Academy" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-800">Our Mission</h3>
            <p className="text-gray-700 mb-6 text-lg">
              At Darshanam Mindful Edu Academy, we are dedicated to increasing self-confidence, 
              empowering participants, and promoting positive life changes through our specialized 
              counseling programs and educational courses.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              Located in Palakkad Town near Victoria College, our academy provides a serene, 
              accessible environment for learning and personal growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <Award className="h-10 w-10 text-brand-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">Excellence</h4>
                <p className="text-gray-600">Award-winning programs</p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg text-center">
                <Book className="h-10 w-10 text-brand-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">Experience</h4>
                <p className="text-gray-600">16+ years teaching</p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg text-center">
                <Users className="h-10 w-10 text-brand-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">Community</h4>
                <p className="text-gray-600">Supportive learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
