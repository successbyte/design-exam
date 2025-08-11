import React from "react";
import { Button } from "./button";

function Content() {
  return (
    <div className="w-[350px] mt-6">
      <h1 className="text-5xl font-semibold">
        We collaborate to build digital experience
      </h1>
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec
        gravida ipsum pulvinar vel non.
      </p>

      <Button className="mt-6 rounded-full px-8 font-medium">
        Get started
      </Button>
    </div>
  );
}

export default Content;
