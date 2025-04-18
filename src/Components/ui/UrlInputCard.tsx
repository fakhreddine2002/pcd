import React from 'react';

const UrlInputCard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
      <h2 className="text-stone-200 text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-wide drop-shadow-lg">
        Put the URL here
      </h2>
      <br />
      <br />
      <input
        type="text"
        placeholder="Paste your URL here..."
        className="w-full max-w-md p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 transition mb-4"
      />
      <button className="w-full max-w-md py-3 bg-white/20 text-white rounded-xl hover:bg-blue-500 transition font-semibold cursor-pointer">
        Analyze
      </button>
    </div>
  );
};

export default UrlInputCard;
