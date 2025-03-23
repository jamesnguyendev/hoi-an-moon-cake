import Image from 'next/image';
import HeaderCart from './HeaderCart';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  // const cartId = cookies()?.get('cartId')?.value || null;
  // const cart = await getCart(cartId as string);

  return (
    <div className="fixed z-40 w-full bg-primary py-3 font-semibold uppercase shadow-lg">
      <div className="container flex items-center justify-between text-second md:justify-around">
        <div className="flex gap-7 max-xl:order-3 ">
          <a href={'/'} className="hidden xl:block">
            Trang Chủ
          </a>
          <a href={'/gioi-thieu'} className="hidden xl:block">
            Giới thiệu
          </a>
          <a href={'/shop'} className="hidden xl:block">
            Sản phẩm
          </a>
          <a href={'/catalogue'} className="hidden xl:block">
            Catalogue
          </a>
          <HeaderMobile />
        </div>
        <a href={'/'} className="max-xl:order-2">
          <Image alt="Logo mooncake" src={'/images/logo.png'} width={80} height={90} />
        </a>
        <div className="flex items-center gap-7 max-xl:order-1">
          <a href={'/hop-banh-trung-thu'} className="hidden xl:block">
            Hộp Bánh
          </a>
          <a href={'/bang-gia-banh-trung-thu'} className="hidden xl:block">
            Bảng Giá
          </a>
          <a href={'/lien-he'} className="hidden xl:block">
            Liên Hệ
          </a>
          <a href={'/chinh-sach-kinh-doanh'} className="hidden xl:block">
            Chính sách
          </a>
          {/* <HeaderCart cart={cart} /> */}
          <HeaderCart />
        </div>
      </div>
    </div>
  );
}
