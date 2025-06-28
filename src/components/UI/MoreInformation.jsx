import { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { UseModalContext } from "contexts/ModalContext";

function CustomAlert({ message, type, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl">
        <div className={`text-2xl mb-4 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {type === 'success' ? '✓' : '⚠'} 
        </div>
        <p className="text-primary-500 text-lg mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-xl transition-all duration-200 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function MoreInformation() {
  const { setCurrentModal } = UseModalContext();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  // Initialize EmailJS
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
          to_name: "Yadora Team",
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
      // Don't close modal immediately, let user see the success message
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
      <div className="relative bg-primary-500 p-12 md:p-16 lg:p-20 rounded-t-xl text-white">
        <Image
          src="/tweleve-dots.svg"
          alt="12 dot graphic"
          width={100}
          height={100}
          className="left-0 absolute h-16 w-auto md:h-auto"
        />
        <Image
          src="/tweleve-dots.svg"
          alt="12 dot graphic"
          width={100}
          height={100}
          className="right-0 absolute h-16 w-auto md:h-auto"
        />

        <h2 className="mb-6 font-bold text-[2rem]/[2.5rem] sm:text-5xl/[4rem] lg:text-7xl/[5.6rem] tracking-tight">
          <span className="block bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 text-transparent">
            Supercharge
          </span>
          your business
        </h2>
        <p className="font-light text-base sm:text-xl lg:text-2xl tracking-tight">
          Interested in learning more about how Yadora can grow your small
          business?
        </p>
      </div>
      <div className="relative flex flex-col gap-y-4 mx-6 sm:mx-12 md:mx-16 lg:mx-20 my-10 lg:my-12">
        <input
          type="text"
          name="name"
          placeholder="Jane Doe"
          className="bg-white-shade px-8 rounded-2xl w-full h-[4.5rem] text-lg placeholder:lg:text-lg placeholder:text-base placeholder-primary-50"
          value={inputs.name}
          onChange={updateInputs}
        />
        <input
          type="email"
          name="email"
          placeholder="janedoe@gmail.com"
          className="bg-white-shade px-8 rounded-2xl w-full h-[4.5rem] text-lg placeholder:lg:text-lg placeholder:text-base placeholder-primary-50"
          value={inputs.email}
          onChange={updateInputs}
        />
        <textarea
          name="message"
          placeholder="Your message (optional)"
          className="bg-white-shade px-8 py-4 rounded-2xl w-full min-h-[8rem] text-lg placeholder:lg:text-lg placeholder:text-base placeholder-primary-50 resize-none"
          value={inputs.message}
          onChange={updateInputs}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="top-2 right-2 sm:absolute bg-accent-500 hover:bg-accent-600 px-6 hover:px-8 rounded-2xl sm:h-14 text-base text-white lg:text-lg tracking-tight transition-all duration-200 basis-16 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Learn More'}
        </button>
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
