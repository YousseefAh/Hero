import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah L., CPT",
    title: "Fitness Coach",
    quote: "I went from 20 clients and 60-hour weeks to 150 clients and working ON my business, not IN it. Pro-G gave me my life back and 10X'd my revenue. The automation is a complete game-changer.",
    image: "/testimonials/testimonial-1.webp",
  },
  {
    id: 2,
    name: "Mike D., Gym Owner",
    title: "Peak Performance Gym",
    quote: "The White-Label feature allowed me to launch a branded digital experience for my gym members. Retention is up 40%, and we've created a new, high-margin revenue stream. Pro-G is the backbone of our digital strategy.",
    image: "/testimonials/testimonial-2.webp",
  },
  {
    id: 3,
    name: "Jessica P., Online Trainer",
    title: "Nutrition & Fitness Expert",
    quote: "Onboarding used to be a 2-hour call. Now it's a 15-minute intelligent quiz that gives me more insight than I ever had before. My clients are impressed, and I'm saving hundreds of hours a month.",
    image: "/testimonials/testimonial-3.webp",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary-500 -mt-[1px]">
      <div className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 max-w-[90rem]">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl text-white sm:text-4xl md:text-5xl tracking-tight">
            From Freelancer to Empire Builder
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-200">
            Don't just take our word for it. Hear from coaches who have transformed their businesses with Pro-G.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary-600 p-8 rounded-2xl shadow-lg flex flex-col">
              <div className="flex-grow">
                <p className="text-lg text-white leading-relaxed">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-primary-300">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
