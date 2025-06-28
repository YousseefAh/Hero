import { UseModalContext } from "../../contexts/ModalContext";

function CTA() {
  const { setCurrentModal } = UseModalContext();

  const handleWhatsApp = () => {
    window.open('https://wa.me/201120920078', '_blank');
  };

  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-16 max-w-[90rem]">
      <div className="relative flex flex-col items-center bg-primary-500 px-8 py-16 sm:py-24 lg:py-28 rounded-2xl overflow-hidden">
        <div className="top-0 absolute bg-accent-500 w-1/5 h-2" />
        <div className="lg:left-[4%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[50rem] h-28 -rotate-45" />
        <div className="lg:visible lg:left-[35%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[40rem] h-28 invisible -rotate-45" />

        <h3 className="mb-4 font-bold text-[2rem]/[2.5rem] text-center text-white sm:text-4xl md:text-5xl/[4rem] xl:text-[3.5rem]/[4rem] tracking-tight">
          Engage without limits
        </h3>
        <p className="pb-10 text-center text-white xl:text-lg tracking-tight">
          Join a growing community and talk directly with your favorite creators
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => setCurrentModal("more-information")}
            className="bg-accent-500 hover:bg-accent-600 px-8 py-4 rounded-2xl text-white text-lg transition-all duration-200 flex items-center gap-2"
          >
            More Information
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <button
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#128C7E] px-8 py-4 rounded-2xl text-white text-lg transition-all duration-200 flex items-center gap-2"
          >
            WhatsApp Message
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
