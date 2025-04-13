import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Feature() {
  return (
    (<div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-center  gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2
                className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                This is the start of something new
              </h2>
              <p
                className="text-lg  max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground  text-left">
             Running a business is tough—don’t let outdated systems hold you back. We build modern websites, apps, and web solutions to streamline operations and drive growth effortlessly.
                ever.
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-6">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                   <video className="background-video" autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius:"24px" }}>
            <source src="https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMlw32j8I5NUyXCf3eTH4wrh0KA7G86ZnBFzaj" type="video/mp4" />
            
          </video>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>)
  );
}

export { Feature };
