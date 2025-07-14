import Image from "next/image";
import { content } from '@/data/content';


function Testimonials() {
  const { title, subtitle, testimonialList } = content.testimonials;
  return (
    <section id="testimonials" className="bg-primary-500 -mt-[1px]">
      <div className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 max-w-[90rem]">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl text-white sm:text-4xl md:text-5xl tracking-tight">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-200">
            {subtitle}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonialList.map((testimonial) => (
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
