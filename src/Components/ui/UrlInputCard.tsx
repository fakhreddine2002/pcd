import React from 'react';
import { HoverBorderGradient } from './hover-border-gradient';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';

const UrlInputCard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
      <h2 className="text-stone-200 text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-wide drop-shadow-lg">
        Put the URL here
      </h2>
      <br />
      <br />
      <PlaceholdersAndVanishInput
        placeholders={[
          "Type a news headline...",
          "Paste a URL to verify...",
          "Is it fake or real?",
        ]}
        
      />
      {/* <input
        type="text"
        placeholder="Paste your URL here..."
        className="w-full max-w-md p-5 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 transition mb-6"
      /> */}
      {/* <div className="flex items-center justify-center bg-slate-950">
        <HoverBorderGradient className="cursor-pointer">
          Analyze
        </HoverBorderGradient>
      </div> */}
    </div>
  );
};

export default UrlInputCard;
