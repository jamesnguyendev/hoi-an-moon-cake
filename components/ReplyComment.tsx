import React from "react";

const ReplyComment = () => {
  return (
    <div className="my-10 container">
      {" "}
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-4">
        <h1 className="text-xl font-bold text-blue-900">10 BÌNH LUẬN</h1>
        <h2 className="text-xl font-bold text-blue-900">ĐỂ LẠI BÌNH LUẬN</h2>
      </div>
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-blue-900">leduan849@gmail.com</p>
              <p className="text-gray-500 text-sm">12/08/2024 at 16:46</p>
            </div>
            <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">
              Trả lời
            </button>
          </div>
          <p className="mt-2">
            mình muốn mua khoảng 12-13 hộ loại Hoa Viên 05 thì có thể in logo
            được không ạ?
          </p>
        </div>
        <div className="border-b border-gray-200 pb-4 ps-24">
          <div className="flex items-center justify-between">
            <div className="">
              <p className="font-bold text-blue-900">honganht</p>
              <p className="text-gray-500 text-sm">13/08/2024 at 10:02</p>
            </div>{" "}
            <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">
              Trả lời
            </button>
          </div>
          <p className="mt-2">
            Cảm ơn bạn đã quan tâm đến Hội An Mooncake. Bạn vui lòng liên hệ
            hotline 093 650 9799 để được tư vấn chi tiết nhé!
          </p>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <div className="">
              {" "}
              <p className="font-bold text-blue-900">Minh</p>
              <p className="text-gray-500 text-sm">24/08/2024 at 11:37</p>{" "}
            </div>{" "}
            <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">
              Trả lời
            </button>
          </div>
          <p className="mt-2">
            Mình muốn đặt bánh trung thu số lượng lớn cho công ty, có chiết khấu
            gì không ạ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
