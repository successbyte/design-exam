import React from "react";
import bg from "@/assets/bg.svg";

import Card from "@/components/ui/Card";
import Content from "@/components/ui/Content";
import HeroImage from "@/components/ui/HeroImage";

import { heroContent, heroImage, heartCards } from "@/data/hero";

export default function Home() {
  return (
    <main className="relative w-full md:h-screen mx-auto z-0 ">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <section
        aria-label="Homepage hero"
        className="relative lg:p-28 sm:16 p-10 z-10 w-full h-full min-h-full flex md:justify-between md:items-start md:flex-row flex-col items-center md:gap-8 gap-12"
      >
        <Content
          title={heroContent.title}
          description={heroContent.description}
          btnLabel={heroContent.btnLabel}
        />

        <HeroImage
          mainImage={heroImage.src}
          mainAlt={heroImage.alt}
          decorative={heroImage.decorative}
        />
      </section>

      <div
        className="md:absolute md:bottom-4 xl:bottom-8 md:left-4 xl:left-14 flex flex-col sm:flex-row p-4 md:p-0 items-center gap-4 xl:gap-6 xl:mt-0 !z-10"
        aria-hidden="true"
      >
        {heartCards.map((heart, i) => (
          <Card
            key={i}
            HeartIcon={heart?.src}
            alt={heart?.alt}
            text={heart?.cardText}
          />
        ))}
      </div>
    </main>
  );
}
