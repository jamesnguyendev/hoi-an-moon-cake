import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="container mb-5">
      <div className="pt-32 flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl text-primary font-semibold">
          Chính sách kinh doanh
        </h1>
        <div className="h-1 w-16 bg-amber-400"></div>
      </div>
      <div className="flex flex-col text-2xl text-primary mt-4 font-semibold gap-2">
        <Link href={"/"}>✓ Chính sách hoàn trả</Link>
        <Link href={"/"}>✓ Chính sách khách hàng</Link>
        <Link href={"/"}>✓ Chính sách thanh toán</Link>
        <Link href={"/"}>✓ Chính sách vận chuyển</Link>
      </div>
    </section>
  );
};

export default Page;
