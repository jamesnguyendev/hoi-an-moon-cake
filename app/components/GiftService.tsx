import Image from "next/image";
import React from "react";

const GiftService = () => {
  return (
    <section className="mb-10">
      <div className="text-primary text-center font-semibold container">
        <h3 className="text-2xl mb-5">DỊCH VỤ QUÀ TẶNG TRUNG THU</h3>
        <div className="flex gap-6 justify-center items-center text-primary max-lg:flex-wrap">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image
              src={"/images/icon_icon-phan-tram-100x100.png"}
              alt="persent"
              width={100}
              height={100}
            />
            <h1 className="text-lg">Nhiều ưu đãi hấp dẫn</h1>
            <p className="text-black text-sm font-thin">
              Các chính sách ưu đãi hấp dẫn dành cho khách hàng của Hội An
              Mooncake.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image
              src={"/images/icon_icon-logo-100x100.png"}
              alt="persent"
              width={100}
              height={100}
            />
            <h1 className="text-lg">In logo công ty</h1>
            <p className="text-black text-sm font-thin">
              In logo cho các doanh nghiệp, phù hợp tặng quà đối tác, khách
              hàng.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image
              src={"/images/icon_icon-giao-hang-100x100.png"}
              alt="persent"
              width={100}
              height={100}
            />
            <h1 className="text-lg">Giao hàng toàn quốc</h1>
            <p className="text-black text-sm font-thin">
              Giao hàng nhanh chóng, đáp ứng yêu cầu khách hàng trong dịp trung
              thu.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/images/icon_icon-san-xuat-100x100.png"}
              alt="persent"
              width={100}
              height={100}
            />
            <h1 className="text-lg">Sản xuất theo yêu cầu</h1>
            <p className="text-black text-sm font-thin">
              Tận tâm sản xuất theo yêu cầu của doanh nghiệp, cam kết về chất
              lượng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftService;
