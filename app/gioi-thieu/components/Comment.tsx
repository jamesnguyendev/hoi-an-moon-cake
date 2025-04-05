const Comment = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="flex flex-col gap-2 rounded-2xl mx-6 bg-[#fafafa] text-center shadow-2xl *:mx-6 md:w-2/3 lg:w-1/2 ">
        <h6 className="line-clamp-1 text-3xl font-semibold text-primary">Để lại bình luận</h6>
        <p className="line-clamp-1 text-sm">Địa chỉ email của bạn giữ bí mật.</p>
        <input
          type="text"
          placeholder="Tên của bạn"
          className="my-3 rounded-lg border border-gray-200 py-2 ps-3 outline-none"
        />
        <div className="flex items-center justify-center gap-2 text-sm ">
          <input type="checkbox" />
          <span className="line-clamp-1">
            Lưu tên của tôi, email, và trang website trong trình duyệt này cho lần bình luận kế tiếp
            của tôi.
          </span>
        </div>
        <textarea
          id="message"
          rows={4}
          className="my-3 block rounded-lg border border-gray-200 p-2.5 py-2 ps-3 text-sm outline-none"
          placeholder="Bình luận của bạn"
        ></textarea>

        <div className="my-3 flex items-center justify-center">
          <button className="w-40 cursor-pointer rounded-lg bg-second py-2">Gửi bình luận</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
