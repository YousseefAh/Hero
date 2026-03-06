"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold text-primary-500 mb-4">حصلت مشكلة!</h2>
      <p className="text-primary-300 mb-8">نأسف، حصل خطأ غير متوقع. حاول تاني.</p>
      <button
        onClick={() => reset()}
        className="bg-accent-500 text-primary-800 font-bold px-8 py-3 rounded-2xl hover:bg-accent-400 transition-all duration-200"
      >
        حاول تاني
      </button>
    </div>
  );
}
