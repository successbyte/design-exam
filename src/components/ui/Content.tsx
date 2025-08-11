import React from "react";
import { Button } from "./button";

interface ContentProps {
  title: string;
  description: string;
  btnLabel: string;
  onCtaClick?: () => void;
  className?: string;
}

function Content({
  title,
  description,
  btnLabel,
  onCtaClick,
  className = "",
}: ContentProps) {
  return (
    <section
      className={`min-w-[330px] w-full md:w-[350px] xl:mt-2 xl:ml-8 md:block flex flex-col items-center ${className}`}
      aria-labelledby="hero-heading"
    >
      <h1 className="text-4xl font-semibold !leading-tight md:text-5xl text-center md:text-left">
        {title}
      </h1>
      <p className="mt-6 text-center md:text-left">{description}</p>

      <Button className="mt-6 rounded-full px-8 font-medium bg-neutral-700">
        {btnLabel}
      </Button>
    </section>
  );
}

export default Content;
