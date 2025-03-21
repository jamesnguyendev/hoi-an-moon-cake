import Image from "next/image";
import React from "react";

const Programs = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Image
          src={"/images/Artboard-37-1448x2048.png"}
          width={700}
          height={700}
          alt="Artboard-37-1448x2048"
        />
        <Image
          src={"/images/Artboard-38-1448x2048.png"}
          width={700}
          height={700}
          alt="Artboard-38-1448x2048"
        />
      </div>
    </section>
  );
};

export default Programs;
