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
      className={`max-w-[220px] rounded-2xl border border-white p-4 m-0 md:m-2 z-10 ${className}`}
    >
      <img src={HeartIcon} alt={alt} loading="lazy" className="w-auto h-auto" />
      {text && <p className="mt-6 text-sm leading-snug">{text}</p>}
    </div>
  );
}

export default Card;
