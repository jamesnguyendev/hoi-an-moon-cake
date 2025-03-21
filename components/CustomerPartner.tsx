import Image from "next/image";
import React from "react";

const CustomerPartner = () => {
  return (
    <section className="container my-8">
      <div>
        <h1 className="text-primary text-center text-2xl font-semibold">
          KHÁCH HÀNG – ĐỐI TÁC
        </h1>
        <Image
          src={"/images/logo-khach-hang-DN-pc-1536x900.png"}
          width={900}
          height={900}
          className="w-full"
          alt="logo khách hàng dn pc"
        />
      </div>
    </section>
  );
};

export default CustomerPartner;
