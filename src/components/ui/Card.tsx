import React from "react";

interface CardProps {
  HeartIcon: string;
  alt?: string;
  text?: string;
  className?: string;
}

function Card({ HeartIcon, alt = "", text = "", className = "" }: CardProps) {
  return (
    <div
      className={`relative overflow-hidden max-w-[220px] rounded-2xl border border-white p-4 m-0 md:m-2 z-10 ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 to-transparent" />

      <img src={HeartIcon} alt={alt} loading="lazy" className="w-auto h-auto" />
      {text && <p className="mt-6 text-sm leading-snug">{text}</p>}
    </div>
  );
}

export default Card;
