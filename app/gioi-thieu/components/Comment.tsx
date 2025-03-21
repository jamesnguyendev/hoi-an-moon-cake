import React from "react";

const Comment = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="bg-[#fafafa] text-center flex flex-col gap-2 shadow-2xl rounded-2xl w-2/3 *:mx-6">
        <h1 className="text-primary text-3xl font-semibold line-clamp-1">
          Để lại bình luận
        </h1>
        <p className="text-sm line-clamp-1">Địa chỉ email của bạn giữ bí mật.</p>
        <input
          type="text"
          placeholder="Tên của bạn"
          className="border border-gray-200 my-3 py-2 rounded-lg outline-none ps-3"
        />
        <div className="flex items-center justify-center text-sm gap-2 ">
          <input type="checkbox" />
          <span className="line-clamp-1">
            Lưu tên của tôi, email, và trang website trong trình duyệt này cho lần
            bình luận kế tiếp của tôi.
          </span>
        </div>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 text-sm border border-gray-200 my-3 py-2 rounded-lg outline-none ps-3"
          placeholder="Bình luận của bạn"
        ></textarea>

        <div className="my-3 flex justify-center items-center">
          <button className="bg-second w-40 py-2 rounded-lg cursor-pointer">
            Gửi bình luận
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
