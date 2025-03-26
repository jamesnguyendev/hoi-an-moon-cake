import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container py-10">
        <div className="flex items-center justify-center gap-10 max-lg:flex-wrap">
          <div className="w-[60rem]">
            <div>HỘI AN MOONCAKE – TINH HOA HỘI TỤ</div>
            <p className="mt-3 text-sm text-white/80">
              Hội An Mooncake – Bánh trung thu Hội An là thương hiệu bánh trung thu được ra đời với
              cảm hứng từ một địa danh nổi tiếng của Việt Nam, nơi mà những người dân bản địa hòa
              cùng nền văn hóa du nhập tạo nên một bản sắc độc đáo, phát triển phồn thịnh nhưng vẫn
              mang đậm vẻ đẹp truyền thống và bình dị.
            </p>
          </div>
          <Image
            alt="Logo mooncake"
            src={'/images/logo.png'}
            width={150}
            height={90}
            className="max-lg:w-1/2"
          />
          <div className="w-[60rem]">
            <div>XEM CATALOGUE BÁNH TRUNG THU</div>
            <p className="mb-6">
              Bảng giá mới nhất luôn được cập nhật. Quý khách hàng và đại lý vui lòng tham khảo nội
              dung sau, để nhận được giá tốt và chính xác nhất.
            </p>
            <Link href={'/catalogue'} className="rounded-lg bg-emerald-700 px-5 py-3">
              Xem Catalogue
            </Link>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div>Update Hằng Ngày</div>
            <div className="flex flex-col text-second">
              <Link href={'/'}>Bảng giá bánh trung thu</Link>
              <Link href="/">Hộp bánh trung thu</Link>
              <Link href="/">Sự Kiện trung thu</Link>
              <Link href="/">Thông tin chia sẻ</Link>
            </div>
            <div className="italic">Theo dõi Hội An Mooncake </div>
            <div className="flex gap-2">
              <Link href={'https://www.facebook.com/banhtrungthuhoian/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  x="0px"
                  fill="currentColor"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  className=" rounded-full bg-white  text-second"
                >
                  <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                </svg>
              </Link>
              <Link href={'https://x.com/HoiAnMooncake'}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" rounded-full bg-second text-white"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </Link>
              <Link href={'https://www.youtube.com/channel/UCw8LKIF_JBWBPBq0S8WgkVw'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className=" rounded-full bg-second text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-lg:mt-6">
            <h3>Chính Sách Kinh Doanh</h3>

            <div className="flex flex-col text-second">
              <Link href={'/'}>Chính sách hoàn trả</Link>
              <Link href={'/'}>Chính sách khách hàng</Link>
              <Link href={'/'}>Chính sách kinh doanh</Link>
              <Link href={'/'}>Chính sách thanh toán</Link>
              <Link href={'/'}>Chính sách vận chuyển</Link>
            </div>

            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbanhtrungthuhoian&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=869109495245151"
                width="340"
                height="150"
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-lg:mt-6">
            <div>Sản Phẩm Thuộc:</div>
            <div className="flex flex-col gap-1 text-sm">
              <div className="">Công Ty TNHH TMSX TÂN PHÚ NHUẬN</div>
              <div>MST: 0313117616</div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                cs@tpnfoods.vn
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Liên Hệ Đơn Vị Phân Phối:</div>
            <div>CÔNG TY TNHH TMDV SAGOMART</div>
            <div>MST: 0317314189</div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              093 650 9799
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              cs@sagogifts.vn
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7 lg:size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              173 Nguyễn Công Trứ, Quận 1, TP.HCM
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              133 Nguyễn Hồng Đào, P.14, Quận Tân Bình, TP.HCM
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              Tầng B2, Takashimaya: 92 Nam Kỳ Khởi Nghĩa, Quận 1
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              86 Trần Tử Bình, P.Nghĩa Tân, Q. Cầu Giấy, Hà Nội
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
