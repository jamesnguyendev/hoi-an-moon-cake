import React from "react";
import TimeLineDesktop from "./TimeLineDesktop";
import TimeLineMobile from "./TimeLineMobile";

const TimeLine = () => {
  return (
    <div className="">
      <section className="py-9 bg-[#abb8c3]/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 container">
          <div className="order-2">
            <iframe
              width="1900"
              height="506"
              src="https://www.youtube.com/embed/Xk_M6yU-4fA"
              title="Bánh Trung Thu Hội An Mooncake"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <div className="max-w-4xl mx-auto py-10 order-1  ">
            <TimeLineDesktop />
            <TimeLineMobile />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeLine;
