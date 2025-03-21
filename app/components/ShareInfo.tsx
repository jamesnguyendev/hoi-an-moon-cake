import Image from "next/image";
import React from "react";

const ShareInfo = () => {
  return (
    <section className="container my-6">
      <h1 className="text-primary text-center text-2xl font-semibold mb-7">
        THÔNG TIN CHIA SẺ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
        <div className="text-center flex flex-col gap-3">
          <div className="ring-2 ring-[#00246D] hover:ring-amber-400 hover:duration-300">
            <Image
              src={"/images/hoi-an-mooncake.jpg"}
              alt="mooncake"
              width={200}
              height={200}
              className="w-full p-1"
            />
          </div>
          <h2 className="text-primary text-xl font-semibold">
            Hội An Mooncake khai trương gian hàng bánh trung thu tại Takashimaya
          </h2>
          <span className="font-thin text-md">
            Ngày 1/8 vừa qua, Takashimaya đã trở nên rộn ràng hơn bao giờ hết
            với sự xuất hiện của cửa [...]
          </span>
          <div className="text-center justify-center flex flex-col items-center">
            <div className="h-1 w-13 bg-amber-400"></div>
            <div className="flex items-center justify-center gap-3 mt-3 text-sm">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span> honganh</span>
              </div>
              <div className="border-x px-3 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span> 06/08/2023</span>
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
                <span className="line-clamp-1"> No Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col gap-3">
          <div className="ring-2 ring-[#00246D] hover:ring-amber-400 hover:duration-300">
            <Image
              src={"/images/chuong-trinh-ai-cung-co-banh-ngon.jpg"}
              alt="mooncake"
              width={200}
              height={200}
              className="w-full p-1"
            />
          </div>
          <h2 className="text-primary text-xl font-semibold">
            Chương Trình Thu 2019 “Ai cũng có bánh ngon – Ai cũng có quà đẹp”
            (1-10/09/2019)
          </h2>
          <span className="font-thin text-md">
            Chương Trình Thu 2019 “Ai cũng có bánh ngon – Ai cũng có quà đẹp”
            của Hội An Mooncake (1-10/09/2019) [...]
          </span>
          <div className="text-center justify-center flex flex-col items-center">
            <div className="h-1 w-13 bg-amber-400"></div>
            <div className="flex items-center justify-center gap-3 mt-3 text-sm">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span> honganh</span>
              </div>
              <div className="border-x px-3 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span> 06/08/2023</span>
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
                <span className="line-clamp-1"> No Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col gap-3">
          <div className="ring-2 ring-[#00246D] hover:ring-amber-400 hover:duration-300">
            <Image
              src={"/images/Tien-tuu-thuc-than (1).jpg"}
              alt="mooncake"
              width={200}
              height={200}
              className="w-full p-1"
            />
          </div>
          <h2 className="text-primary text-xl font-semibold">
            Đêm hội âm nhạc “Ánh Trăng Nhiệm Màu”
          </h2>
          <span className="font-thin text-md">
            Hòa trong không khí trung thu rộn rã ba miền, dự kiến tối ngày
            30/09/2020, Hội An Mooncake sẽ tổ [...]
          </span>
          <div className="text-center justify-center flex flex-col items-center">
            <div className="h-1 w-13 bg-amber-400"></div>
            <div className="flex items-center justify-center gap-3 mt-3 text-sm">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span> honganh</span>
              </div>
              <div className="border-x px-3 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span> 06/08/2023</span>
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
                <span className="line-clamp-1"> No Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareInfo;
