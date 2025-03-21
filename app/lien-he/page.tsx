import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: "Liên Hệ - Hội An Mooncake ",
    description: "Liên Hệ Hội An Mooncake",
  };
};

const Page = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="pt-32 flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl text-primary uppercase font-semibold">
            Liên Hệ
          </h1>
          <div className="h-1 w-16 bg-amber-400"></div>
          <h3 className="text-xl text-primary font-semibold">
            Hội An Mooncake
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 *:place-content-start my-8">
          <div className="flex flex-col justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#00246D"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-primary size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span className="mt-5 text-second text-xl">Điện Thoại</span>
            <span className="text-sm">093 650 9799</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
            <span className="mt-5 text-second text-xl">Địa Chỉ</span>
            <div className="text-sm flex flex-col text-center">
              <span>133 Nguyễn Hồng Đào, p.14, Q. Tân Bình, TP.HCM</span>
              <span>
                173 Nguyễn Công Trứ, P. Nguyễn Thái Bình, Quận 1, TP.HCM
              </span>
              <span>86 Trần Tử Bình, P.Nghĩa Tân, Q. Cầu Giấy, Hà Nội</span>
              <span>
                Tầng B2, TTTM Takashimaya: 92 – 94 Nam Kỳ Khởi Nghĩa, Quận 1
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
            <span className="mt-5 text-second text-xl">Mail Liên Hệ</span>
            <span className="text-sm">cs@tpnfoods.vn</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>{" "}
            <span className="mt-5 text-second text-xl">Mở Cửa</span>
            <span className="text-sm">Thứ 2 - Chủ Nhật: 7:30 - 20:00</span>
          </div>
        </div>
      </div>
      <div className="w-full px-6">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=133%20%C4%90.%20Nguy%E1%BB%85n%20H%E1%BB%93ng%20%C4%90%C3%A0o,%20Ph%C6%B0%E1%BB%9Dng%2014,%20T%C3%A2n%20B%C3%ACnh,%20H%E1%BB%93%20Ch%C3%AD%20Minh%2072100,%20Vi%E1%BB%87t%20Nam+(Mooncake)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">drones ireland</a>
        </iframe>
      </div>
    </section>
  );
};

export default Page;
