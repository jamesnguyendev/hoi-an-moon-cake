import Image from "next/image";
import React from "react";

const HoverCard = ({ imagedata }: { imagedata: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-7">
      {imagedata.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <Image
            src={item}
            alt="images"
            width={600}
            height={200}
            className="hover:opacity-70 hover:scale-105 hover:duration-300 w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default HoverCard;
