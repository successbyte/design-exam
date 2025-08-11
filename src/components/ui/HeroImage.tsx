import React from "react";

interface DecorativeItem {
  src: string;
  position: string; // Tailwind classes for positioning & sizing
}

interface HeroImageProps {
  mainImage: string;
  mainAlt: string;
  decorative?: DecorativeItem[];
  className?: string;
}

function HeroImage({
  mainImage,
  mainAlt,
  decorative = [],
  className = "",
}: HeroImageProps) {
  return (
    <div className="relative max-w-full w-[350px] xl:w-[410px] lg:-mt-10 p-8 xl:mr-8 rounded-full border border-gray-500">
      <img
        src={mainImage}
        alt={mainAlt}
        loading="lazy"
        className="w-full h-auto rounded-full object-cover"
      />

      {decorative.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt=""
          aria-hidden="true"
          className={item.position}
        />
      ))}
    </div>
  );
}

export default HeroImage;
