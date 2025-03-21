import Image from "next/image";
import React from "react";

const CardBanner = ({
  firstImage,
  secondImage,
  border = false,
}: {
  firstImage: string;
  secondImage: string;
  border?: boolean;
}) => {
  return (
    <section className="mt-9 mb-6">
      <div
        className={`container grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 ${
          border ? "*:border-2 *:border-gray-300" : ""
        }`}
      >
        <Image
          src={firstImage}
          alt="ha-1"
          width={900}
          height={100}
          quality={100}
          className="w-full"
        />
        <Image
          src={secondImage}
          alt="ha-1"
          width={900}
          height={100}
          quality={100}
          className="w-full "
        />
      </div>
    </section>
  );
};

export default CardBanner;
