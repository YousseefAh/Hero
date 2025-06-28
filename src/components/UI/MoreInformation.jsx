import { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { UseModalContext } from "@/contexts/ModalContext";

function CustomAlert({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl">
        <div className="flex items-center gap-3">
          {type === 'success' ? (
            <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <p className="text-lg text-primary-500 font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
}

function MoreInformation() {
  const { setCurrentModal } = UseModalContext();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const handleWhatsApp = () => {
    window.open('https://wa.me/201120920078', '_blank');
  };

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });

  function updateInputs(e) {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async () => {
    if (!inputs.email || !inputs.name) {
      setAlert({
        show: true,
        message: 'Please fill in all fields',
        type: 'error'
      });
      return;
    }
    
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Team",
          from_name: inputs.name,
          from_email: inputs.email,
          message: inputs.message || "No additional message provided",
          reply_to: inputs.email
        }
      );
      setAlert({
        show: true,
        message: 'Thank you! We will get back to you soon.',
        type: 'success'
      });
    } catch (error) {
      console.error('Email error:', error);
      setAlert({
        show: true,
        message: 'Sorry, there was an error. Please try again later.',
        type: 'error'
      });
    }
    setLoading(false);
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, show: false });
    if (alert.type === 'success') {
      setCurrentModal("");
    }
  };

  return (
    <>
      <div className="relative bg-primary-500 p-6 sm:p-8 md:p-12 lg:p-16 rounded-t-xl text-white">
        <Image
          src="/tweleve-dots.svg"
          alt="12 dot graphic"
          width={60}
          height={60}
          className="left-0 absolute h-10 w-auto md:h-14 lg:h-16"
        />
        <Image
          src="/tweleve-dots.svg"
          alt="12 dot graphic"
          width={60}
          height={60}
          className="right-0 absolute h-10 w-auto md:h-14 lg:h-16"
        />

        <h2 className="mb-3 md:mb-4 font-bold text-xl/[1.5rem] sm:text-3xl/[2.25rem] md:text-4xl/[3rem] lg:text-5xl/[3.75rem] tracking-tight">
          <span className="block bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 text-transparent">
            Supercharge
          </span>
          your business
        </h2>
        <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl tracking-tight max-w-2xl">
          Interested in learning more about how we can grow your small business?
        </p>
      </div>
      <div className="relative flex flex-col gap-y-3 md:gap-y-4 mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-4 sm:my-6 md:my-8 lg:my-10">
        <input
          type="text"
          name="name"
          placeholder="Jane Doe"
          className="bg-white-shade px-4 md:px-6 rounded-lg md:rounded-xl w-full h-11 md:h-14 text-sm sm:text-base md:text-lg placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg placeholder-primary-50"
          value={inputs.name}
          onChange={updateInputs}
        />
        <input
          type="email"
          name="email"
          placeholder="janedoe@gmail.com"
          className="bg-white-shade px-4 md:px-6 rounded-lg md:rounded-xl w-full h-11 md:h-14 text-sm sm:text-base md:text-lg placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg placeholder-primary-50"
          value={inputs.email}
          onChange={updateInputs}
        />
        <textarea
          name="message"
          placeholder="Your message (optional)"
          className="bg-white-shade px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl w-full h-11 md:h-14 text-sm sm:text-base md:text-lg placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg placeholder-primary-50 resize-none"
          value={inputs.message}
          onChange={updateInputs}
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4 w-full">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-accent-500 hover:bg-accent-600 px-4 md:px-6 rounded-lg md:rounded-xl h-11 md:h-14 text-sm sm:text-base md:text-lg text-white tracking-tight transition-all duration-200 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send a Message'}
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] px-4 md:px-6 rounded-lg md:rounded-xl h-11 md:h-14 text-sm sm:text-base md:text-lg text-white tracking-tight transition-all duration-200 flex items-center justify-center gap-2"
          >
            Contact us on WhatsApp
            <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </div>
      </div>

      {alert.show && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={handleAlertClose}
        />
      )}
    </>
  );
}

export default MoreInformation;
