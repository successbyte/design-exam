// All the text, image sources, and icon references for the Hero section

import ViolateHeart from "@/assets/violate-heart.svg";
import YellowHeart from "@/assets/yellow-heart.svg";
import BlueHeart from "@/assets/blue-heart.svg";
import SoftStar from "@/assets/soft-star.svg";
import StarSix from "@/assets/star6.svg";
import ImageMain from "@/assets/image.png";

// Hero text content
export const heroContent = {
  title: "We collaborate to build digital experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.",
  btnLabel: "Get started",
};

// Main hero image + decorative elements
export const heroImage = {
  src: ImageMain,
  alt: "Woman with modern style",
  decorative: [
    {
      src: SoftStar,
      position: "absolute bottom-2 right-0 w-20 xl:w-24",
    },
    {
      src: StarSix,
      position: "absolute top-8 left-6 w-12 xl:w-16 xl:left-6 xl:top-8",
    },
  ],
};

// Decorative heart cards
const cardText =
  "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.";
export const heartCards = [
  { src: ViolateHeart, alt: "Violet heart", cardText },
  { src: YellowHeart, alt: "Yellow heart", cardText },
  { src: BlueHeart, alt: "Blue heart", cardText },
];
