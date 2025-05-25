
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Extended gallery with 50+ images - you can replace these with your actual images
const allGalleryImages = [
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-59_lonnlr.jpg",
    alt: "Students learning in a classroom setting",
    category: "Classroom"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-57_2_rlcswb.jpg",
    alt: "Group counseling session",
    category: "Counseling"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-57_rffdhh.jpg",
    alt: "Career counseling with a student",
    category: "Career Guidance"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-59_2_mwkl9r.jpg",
    alt: "Speech and communication training",
    category: "Training"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149560/photo_2025-05-13_20-48-57_5_bj1epz.jpg",
    alt: "Students in a group activity",
    category: "Activities"
  },

  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197716/photo_2025-05-25_23-25-08_efhufp.jpg",
    alt: "Students in classroom discussion",
    category: "Classroom"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197716/photo_2025-05-25_23-25-08_2_u8nixt.jpg",
    alt: "Individual counseling session",
    category: "Counseling"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197715/photo_2025-05-25_23-25-06_2_zneksx.jpg",
    alt: "Group learning activity",
    category: "Activities"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197713/photo_2025-05-25_23-25-03_3_o0ivak.jpg",
    alt: "Career guidance workshop",
    category: "Career Guidance"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197715/photo_2025-05-25_23-25-04_2_m5mn2m.jpg",
    alt: "Training session in progress",
    category: "Training"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197714/photo_2025-05-25_23-25-06_zuym6p.jpg",
    alt: "Students participating in a workshop",
    category: "Activities"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197714/photo_2025-05-25_23-25-05_ez7ioi.jpg",
    alt: "Counseling session with a mentor",
    category: "Counseling"},
      //12
    {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197714/photo_2025-05-25_23-25-04_3_whztkt.jpg",
    alt: "Students engaged in a group discussion",
    category: "Classroom"
  },
    {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197713/photo_2025-05-25_23-25-03_2_tzkvjz.jpg",
    alt: "Training session in progress",
    category: "Training"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197713/photo_2025-05-25_23-25-04_eenicj.jpg",
    alt: "Students participating in a workshop",
    category: "Activities"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197713/photo_2025-05-25_23-25-03_vvmai1.jpg",
    alt: "Counseling session with a mentor",
    category: "Counseling"},
    {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197713/photo_2025-05-25_23-25-02_2_gljgco.jpg",
    alt: "Students engaged in a group discussion",
    category: "Classroom"
  },
    {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1748197712/photo_2025-05-25_23-25-02_dbnwvr.jpg",
    alt: "Training session in progress",
    category: "Training"
  }

];



export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  const categories = ["All", "Classroom", "Counseling", "Training", "Activities", "Career Guidance"];

  const filteredImages = selectedCategory === "All" 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === selectedCategory);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-50 via-white to-accent1-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-700">
              Our <span className="text-accent1-600">Gallery</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore moments from our training sessions, workshops, and student activities at Darshanam Mindful Edu Academy.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category 
                    ? "bg-brand-600 hover:bg-brand-700" 
                    : "border-brand-600 text-brand-600 hover:bg-brand-50"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {currentImages.map((image, index) => (
              <div 
                key={startIndex + index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <AspectRatio ratio={4 / 3} className="bg-muted">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-600 mb-1">{image.category}</p>
                  <p className="text-sm font-medium text-gray-800">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  className={currentPage === page ? "bg-brand-600 hover:bg-brand-700" : ""}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + imagesPerPage, filteredImages.length)} of {filteredImages.length} images
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
