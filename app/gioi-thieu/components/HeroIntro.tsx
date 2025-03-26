import Image from "next/image";
import React from "react";

const HeroIntro = () => {
  return (
    <section className="container mb-5">
      <div className="pt-28 flex flex-col justify-center items-center gap-2">
        <div className="text-3xl text-primary font-semibold">GIỚI THIỆU</div>
        <div className="h-1 w-16 bg-amber-400"></div>
        <div className="text-xl text-primary font-semibold">
          Hội An Mooncake - Tinh Hoa Hội Tụ
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
        <div className="text-sm flex flex-col gap-4">
          <div className="text-xl text-primary font-semibold">
            HỘI AN MOONCAKE
          </div>
          <span>
            <span className="text-second font-semibold">Hội An Mooncake</span> –
            Là thương hiệu
            <span className="text-second font-semibold">
              {" "}
              bánh trung thu
            </span>{" "}
            được lấy cảm hứng từ Hội An, một địa danh nổi tiếng của Việt Nam,
            nơi mà những người dân bản địa hòa cùng nền văn hóa du nhập tạo nên
            một bản sắc độc đáo, phát triển phồn thịnh nhưng vẫn mang đậm vẻ đẹp
            truyền thống và bình dị.
          </span>

          <span>
            Hội An Mooncake là một trong những thương hiệu bánh trung thu uy tín
            – chất lượng hiện nay, chúng tôi luôn tạo ra những sản phẩm mang
            tính đột phá và riêng biệt, vừa mang nét văn hóa truyền thống, vừa
            có nét độc đáo, mới lạ theo xu hướng hiện đại, đem đến cho người
            tiêu dùng những giá trị thực và những cảm xúc thăng hoa. Trải qua
            quá trình hình thành và phát triển, chúng tôi không ngừng vươn cao,
            từng bước khẳng định vị thế của mình trên thị trường bánh trung thu
            Việt Nam.
          </span>

          <span>
            Sản phẩm của chúng tôi đa dạng với nhiều loại nhân bánh đặc biệt
            được sản xuất từ những nguyên liệu cao cấp, độc lạ mà còn tốt cho
            sức khỏe như cua huỳnh đế, tôm hùm, bào ngư, vi cá,… kết hợp cùng
            hạt dinh dưỡng như hạt macca, hạt hạnh nhân, hạt óc chó,… Vỏ bánh
            mềm, xốp, vị bánh có độ ngọt thanh, vừa thơm ngon, vừa bổ dưỡng. Hộp
            bánh với thiết kế sang trọng, bắt mắt, ấn tượng mang đậm âm hưởng lễ
            hội mùa thu. Hội An Mooncake với sản phẩm cao cấp, được ưa chuộng
            nhất khi mùa trung thu đến, là món quà thể hiện tình thân, là phần
            quà để các đơn vị thể hiện tình cảm với đối tác, đồng nghiệp, bạn bè
            thân hữu tạo không khí ấm áp và giúp tình cảm ngày tốt đẹp hơn.
          </span>
        </div>
        <Image
          src={"/images/N-Tra-xanh-HN-1.jpg"}
          width={600}
          height={300}
          quality={100}
          alt="tra xanh hn 1"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HeroIntro;
