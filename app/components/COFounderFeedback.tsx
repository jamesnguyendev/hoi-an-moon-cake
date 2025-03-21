import Image from "next/image";
import React from "react";

const COFounderFeedback = () => {
  return (
    <section className="my-10 bg-primary">
      <div className=" container flex gap-4 items-center lg:items-end text-white uppercase flex-col py-6">
        <Image
          src={"/images/Nhan-vien-hoi-an-moon-cake-uyen-huynh-1-150x150.png"}
          width={100}
          height={100}
          alt="nhân viên hội an mooncake"
          className="lg:items-end"
        />{" "}
        <p className="pt-4 lg:text-end text-center italic">
          Các ơn quý khách luôn ủng hộ hội an mooncake. chúc quý khách có một
          mùa tết trung thu ý nghĩa, hạnh phúc, đoàn viên cùng gia đình. Hội an
          mooncake luôn cố gắng từng ngày để mang đến quý khách những chiếc bánh
          chất lượng cao nhất.
        </p>
        <div
          className="h-1 w-8
     bg-white"
        ></div>
        <span>phương uyên</span>
        <span>co-founder</span>
      </div>
    </section>
  );
};

export default COFounderFeedback;
