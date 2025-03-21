import Image from 'next/image';

const HeaderCart = ({ cart }: { cart: any }) => {
  function formattedNumber(number: any) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(Number(number))
      .replace(/\./g, ',');
  }
  return (
    <a
      href={'/gio-hang'}
      className="group relative inline-flex cursor-pointer items-center rounded-lg p-3 text-center text-sm font-medium text-white max-lg:ps-[1.5rem]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#f9cb4b"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 hover:opacity-80"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <div className="absolute -end-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-second text-xs font-bold text-white">
        {cart?.lines?.length ?? 0}
      </div>

      {/* Giỏ hàng hiển thị khi hover */}
      {cart?.lines?.length === 0 ? (
        <div className="pointer-events-none text-black absolute right-0 top-12 min-w-max rounded-lg border-b-2 border-amber-400 bg-white p-4 opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 max-lg:hidden">
          <div className="absolute -top-2 right-4 h-0 w-0 border-b-8 border-l-8 border-r-8 border-b-white border-l-transparent border-r-transparent"></div>
          <h1>Chưa có sản phẩm</h1>
        </div>
      ) : (
        <div className="pointer-events-none absolute right-0 top-12 min-w-max rounded-lg border-b-2 border-amber-400 bg-white p-4 opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 max-lg:hidden">
          <div className="absolute -top-2 right-4 h-0 w-0 border-b-8 border-l-8 border-r-8 border-b-white border-l-transparent border-r-transparent"></div>
          {cart?.lines.map((item: any, index: number) => (
            <a
              href={'/gio-hang'}
              className="flex items-center gap-3 border-b pb-2 text-start"
              key={index}
            >
              <Image
                width={200}
                height={100}
                src={item.merchandise.product.featuredImage.url}
                alt="Sản phẩm"
                className="h-10 w-10 rounded"
              />
              <div className="text-gray-700">
                <p className="text-sm font-semibold "> {item.merchandise.product.title}</p>
                <p className="text-xs text-gray-500">
                  {formattedNumber(item.cost.totalAmount.amount)}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </a>
  );
};
export default HeaderCart;
