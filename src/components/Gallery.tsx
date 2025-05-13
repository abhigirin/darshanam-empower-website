
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-59_lonnlr.jpg",
    alt: "Students learning in a classroom setting"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-57_2_rlcswb.jpg",
    alt: "Group counseling session"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-57_rffdhh.jpg",
    alt: "Career counseling with a student"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-59_2_mwkl9r.jpg",
    alt: "Speech and communication training"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149561/photo_2025-05-13_20-48-57_2_rlcswb.jpg",
    alt: "Personality development workshop"
  },
  {
    src: "https://res.cloudinary.com/dvsqo3kj7/image/upload/v1747149560/photo_2025-05-13_20-48-57_5_bj1epz.jpg",
    alt: "Students in a group activity"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-700 mb-16">
          Our <span className="text-accent1-600">Gallery</span>
        </h2>

        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:scale-105"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-0 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
