import React from "react";

const TimeLineExtraMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:hidden">
      <div className="flex gap-7 justify-center items-center flex-col">
        <div className="bg-primary sm:w-1/4 w-full p-2 text-center text-white text-xl rounded-lg">
          2017
        </div>
        <div className="text-sm bg-white py-5 px-8 rounded-xl">
          Ra mắt các combo bánh trung thu Hội An Mooncake, được nhiều khách hàng
          tin tưởng.
        </div>
      </div>
      <div className="flex gap-7 justify-center items-center flex-col">
        <div className="bg-primary sm:w-1/4 w-full p-2 text-center text-white text-xl rounded-lg">
          2018
        </div>
        <div className="text-sm bg-white py-5 px-8 rounded-xl">
          Ra mắt hệ thống phân phối online bánh trung thu. Tiếp cận được nhiều
          khách hàng hơn.
        </div>
      </div>
      <div className="flex gap-7 justify-center items-center flex-col">
        <div className="bg-primary sm:w-1/4 w-full p-2 text-center text-white text-xl rounded-lg">
          2019 - 2024
        </div>
        <div className="text-sm bg-white py-5 px-8 rounded-xl">
          Những năm thành công với các công ty lớn đặt sản xuất số lượng lớn làm
          quà tặng.
        </div>
      </div>
    </div>
  );
};

export default TimeLineExtraMobile;
