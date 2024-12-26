import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Container from "../Container";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  const handleClickLeft = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({
        left: -testimonialRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleClickRight = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({
        left: testimonialRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-full margin-bottom bg-opacity-30 bg-base-200  min-h-[60vh] flex items-center justify-center">
      <Container className="p-3">
        <h1 className="mb-4 text-center heading-home md:mb-6">
          Clients Testimonials
        </h1>

        {/* Testimonial Slider Buttons */}
        <div className="flex items-center my-3">
          <div className="flex items-center gap-3">
            <button
              className="btn btn-outline btn-primary btn-circle btn-sm"
              onClick={handleClickLeft}
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              className="btn btn-outline btn-primary btn-circle btn-sm"
              onClick={handleClickRight}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="flex gap-3 overflow-hidden" ref={testimonialRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className="min-w-[100%] sm:min-w-[300px] min-h-[200px] bg-base-100 rounded-md border border-base-300 p-2 px-4 flex flex-col justify-between "
              key={index}
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center mb-2">
                  <MdStar className="text-yellow-400 size-5" />
                  <MdStar className="text-yellow-400 size-5" />
                  <MdStarHalf className="text-yellow-400 size-5" />
                  <MdStarOutline className="text-yellow-400 size-5" />
                  <MdStarOutline className="text-yellow-400 size-5" />
                </div>

                {/* Testimonial Text */}
                <blockquote>
                  <q className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos quae, iure, quidem quia, tempore quos quod quibusdam
                    quas quae
                  </q>
                </blockquote>
              </div>

              {/* Client Details */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-10 border rounded-full border-base-300">
                      <img
                        src="https://randomuser.me/api/portraits/lego/1.jpg"
                        alt="Client"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold">John Doe</h1>
                    <p className="text-[10px]">CEO, Company Name</p>
                  </div>
                </div>

                {/* Quotation Mark */}
                <FaQuoteLeft className="size-10 text-neutral-content/40" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
