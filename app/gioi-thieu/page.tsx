import { Metadata } from 'next';
import HoverCard from '../../app/components/HoverCard';
import CustomerPartner from '../../components/CustomerPartner';
import Comment from './components/Comment';
import HeroIntro from './components/HeroIntro';
import TimeLine from './components/TimeLine';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Giới thiệu Hội An Mooncake | Thương hiệu bánh trung thu',
    description: 'Giới thiệu Hội An Mooncake | Thương hiệu bánh trung thu',
  };
};

const imagedata: string[] = [
  '/images/Combo_cao-cap-Phu-Quy-02.jpg',
  '/images/Combo_cao-cap-Tam-Giao-03.jpg',
  '/images/Combo-banh-trung-thu-cao-cap_Hoa-Vien-03.jpg',
  '/images/combo-cao-cap-pho-co.jpg',
];
const imageMagazin: string[] = [
  '/images/Gioi-thieu-hoi-an-moon-cake-bao-dan-tri.jpg',
  '/images/Bao-24h.com_.vn_-600x600.jpeg',
  '/images/Bao-danviet.vn_-600x600.jpeg',
  '/images/Gioi-thieu-hoi-an-moon-cake-bao-van-hien.jpg',
];

const Page = () => {
  return (
    <div className="-z-20">
      <HeroIntro />
      <TimeLine />
      <section className="container my-6">
        <div className="mb-12 flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-primary">KHỞI NGUỒN SÁNG TẠO</h1>
          <div className="relative h-1 w-full bg-primary">
            <div className="absolute start-0 h-1 w-20 bg-gray-300"></div>
          </div>
          <p className="text-sm">
            Không nổi tiếng là hãng bánh trung thu có bề dày lịch sử, Hội An Mooncake chọn hướng đi
            riêng cho sự nghiệp của chính mình với tư cách là một thương hiệu bánh trẻ, sẵn sàng
            sáng tạo và dấn thân trên hành trình khám phá những trải nghiệm mới lạ trong ngành bánh.
            Chắt lọc tinh hoa cổ truyền trong từng chiếc bánh trung thu xưa cũ, kết hợp công thức
            phối vỏ và nhân độc đáo khởi nguồn từ gu ẩm thực đương đại, các nghệ nhân trên 25 năm
            tuổi nghề của Hội An Mooncake đã thành công trong việc tạo nên những chiếc bánh trung
            thu tròn vị thanh khiết, dịu ngọt tự nhiên. Từng mẻ bánh dẻo, bánh nướng thơm lừng cứ
            thế ra đời và đến tay biết bao người Việt như một món quà trân quý, một lời chúc đoàn
            viên thịnh vượng - Đó chính là động lực tuyệt vời để Hội An Mooncake tự tin bước tiếp
            trên chặng đường sáng tạo, nhằm lưu giữ những mẻ bánh mang đậm cổ vị xưa quyện trong
            chất tươi mới đến từ các nguyên liệu mang hơi thở thời đại.
          </p>
        </div>{' '}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-primary">
            Lễ hộp Bánh Trung thu 2024 - Tinh hoa hội tụ
          </h1>
          <div className="relative h-1 w-full bg-gray-300">
            <div className="absolute start-0 h-1 w-20 bg-amber-400"></div>
          </div>
          <p className="text-sm">
            Hội An Mooncake hiểu rằng bánh trung thu không chỉ là một thức quà truyền thống, mà còn
            gói ghém bên trong các giá trị văn hóa – tinh thần được lưu giữ qua mọi thế hệ, mọi
            thăng trầm thời cuộc. Để lan tỏa các thông điệp nhân văn và khẳng định nét đẹp trong
            ngày hội Trung Thu của người Việt, các nhà thiết kế Hội An Mooncake luôn dày công nghiên
            cứu, miệt mài sáng tạo để ra mắt những Bộ Lễ hộp độc đáo qua từng năm, với phác họa ấn
            tượng và kỹ thuật gia công điêu luyện. Tết Đoàn Viên, Bộ sưu tập Lễ hộp bánh trung thu
            chủ đề “Cảnh sắc mùa thu” vừa chính thức trình làng. Mỗi Lễ hộp là một diễn họa tinh tế
            về phong cảnh thu sương tuyệt đẹp của nước Việt, với hình ảnh cánh bướm vờn hoa cúc,
            chim bói cá chao liệng dưới tán hoa sen, là phố cổ trống lân rộn rã, là đêm trăng ấm
            cúng sum vầy,… Hãy chọn Lễ hộp phù hợp ước nguyện để dâng cúng gia tiên và chọn riêng
            những mẫu thiết kế ý nghĩa tặng gia đình thân hữu, khách hàng, đối tác. Sẽ không có món
            quà nào gắn kết tình thân, kết nối cảm xúc tuyệt vời bằng Bộ Lễ hộp bánh trung thu cao
            cấp của Hội An Mooncake – do chính tay bạn dụng công lựa chọn.
          </p>
        </div>
        <div className="">
          <HoverCard imagedata={imagedata} />
        </div>{' '}
        <div className="my-6 flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-primary">
            Nhân bánh hảo hạng - Mỹ thực nhân gian
          </h1>
          <div className="relative h-1 w-full bg-gray-300">
            <div className="absolute start-0 h-1 w-20 bg-amber-400"></div>
          </div>
          <p className="text-sm">
            Thiên đường ẩm thực không ở đâu xa mà đang hiện diện rất gần bạn, ngay trên từng chiếc
            bánh Hội An Mooncake mới ra lò ấm nóng với hương thơm thanh khiết ngọt ngào. Rằm tháng 8
            năm nay, nếu muốn trải nghiệm những mẻ bánh trung thu tuyệt đỉnh nhân gian, đừng bỏ lỡ
            các loại nhân bánh độc đáo vừa được Hội An Mooncake chính thức “trình làng”. Với nguồn
            nguyên liệu được tuyển chọn kỳ công kết hợp công thức trộn nhân độc đáo, dung hòa giữa
            truyền thống (đậu xanh, hạt sen, hạt dưa, mứt bí, lá chanh…) và hiện đại (hạnh nhân,
            macca, hạt chia, cua huỳnh đế, tôm hùm, rượu vang, yến sào…), mỗi chiếc bánh trung thu
            thành phẩm dường như chứa trọn cả tinh túy đất trời. Đây chính là sự khác biệt giữa Hội
            An Mooncake và các thương hiệu khác, khi hãng dành toàn bộ tâm huyết để làm nên những
            chiếc bánh trọn vị với đa dạng các loại nhân mới lạ, mà không sản xuất đại trà nhân bánh
            phổ thông. Bởi chúng tôi biết trên thị trường đã có quá nhiều thương hiệu làm tốt điều
            đó và sứ mệnh của hãng bánh trẻ như Hội An Mooncake chính là sáng tạo.
          </p>
          <p className="text-sm">
            Ngoài nhân bánh hảo hạng, Hội An Mooncake còn đề cao vấn đề dinh dưỡng và hướng đến sức
            khỏe người dùng, đáp ứng xu hướng “Sống Xanh – Sống Sạch” đang được cộng đồng quan tâm
            hiện nay. Nếu bạn muốn thưởng thức một chiếc bánh trung thu kết hợp cổ vị và phá cách,
            quyện hòa giữa vị ngon & dinh dưỡng, các loại nhân mới nhất được Hội An Mooncake giới
            thiệu dưới đây chính là các gợi ý hoàn hảo:
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-primary">
            Tiêu chuẩn an toàn - Chất lượng tối ưu
          </h1>
          <div className="relative h-1 w-full bg-gray-300">
            <div className="absolute start-0 h-1 w-20 bg-amber-400"></div>
          </div>
          <p className="text-sm">
            Bánh trung thu Hội An Mooncake được sản xuất theo quy trình nghiêm ngặt, đáp ứng các
            tiêu chuẩn ISO 22000, HACCP, GMP Halal và đảm bảo 100% ATVSTP, đủ điều kiện lưu hành
            chính thức trên thị trường nội địa và quốc tế. Tự hào phục vụ hơn 100.000 khách hàng
            trong và ngoài nước vào mỗi mùa Rằm Tháng 8 âm lịch, Hội An Mooncake hy vọng sẽ được Quý
            khách trao cơ hội hợp tác trong mùa Trung thu năm nay và những năm tiếp nữa, để những
            chiếc bánh sạch thơm của chúng tôi trở thành món quà ý nghĩa, thay mặt bạn gửi đến những
            người trân quý, đối tác thân hữu…
          </p>
        </div>
        <div className="my-5 flex  flex-col">
          <h1 className="text-xl font-semibold text-primary">THÔNG TIN LIÊN HỆ</h1>
          <HoverCard imagedata={imageMagazin} />
        </div>
        <div className="my-5 flex flex-col">
          <h1 className="text-xl font-semibold text-primary">
            Tiêu chuẩn an toàn - Chất lượng tối ưu
          </h1>
          <div className="relative mt-2 h-1 w-full bg-gray-300">
            <div className="absolute start-0 h-1 w-20 bg-amber-400"></div>
          </div>
          <div className="my-3 flex flex-col gap-2 text-sm">
            <div>
              Chân thành cám ơn sự quan tâm của quý khách dành cho Hội An Mooncake. Để phản hồi về
              sản phẩm hoặc hợp tác xin vui lòng liên hệ qua các kênh sau. Chúc quý khách có một mùa
              trung thu đầy ý nghĩa.
            </div>

            <div className="font-bold">Sản Phẩm Thuộc:</div>
            <div className="font-bold">Công Ty TNHH TMSX TÂN PHÚ NHUẬN</div>
            <div>MST: 0313117616</div>
            <div>Email: cs@tpnfoods.vn</div>
            <div className="font-bold">Liên Hệ Đơn Vị Phân Phối:</div>
            <div className="font-bold">CÔNG TY TNHH TMDV SAGOMART</div>
            <div>Holine: 093 650 9799</div>
            <div>Email: cs@sagogifts.vn</div>
            <div>Địa chỉ:</div>
            <ul className="list-disc ps-10">
              <li>173 Nguyễn Công Trứ, P.Nguyễn Thái Bình, Quận 1, TP.HCM</li>
              <li>133 Nguyễn Hồng Đào, P.14, Quận Tân Bình, TP.HCM</li>
              <li>Tầng B2, TTTM Takashimaya: 92 – 94 Nam Kỳ Khởi Nghĩa, Quận 1</li>
              <li>86 Trần Tử Bình, P.Nghĩa Tân, Q. Cầu Giấy, Hà Nội</li>
            </ul>
          </div>
        </div>
        <CustomerPartner />
        <Comment />
      </section>
    </div>
  );
};

export default Page;
