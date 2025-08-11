import React from "react";
import SoftStar from "@/assets/soft-star.svg";
import StarSix from "@/assets/star6.svg";
import Image from "@/assets/image.png";

function HeroImage() {
  return (
    <div className="relative w-[420px] -mt-10 p-8 rounded-full border border-gray-500">
      <img src={Image} alt="woman with nice style" />
      <img
        src={SoftStar}
        alt="Soft star"
        className="absolute bottom-2 right-0 w-24"
      />
      <img src={StarSix} alt="Soft 6" className="absolute top-8 left-6 w-16" />
    </div>
  );
}

export default HeroImage;
