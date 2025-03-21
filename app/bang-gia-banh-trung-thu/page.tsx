import { Metadata } from 'next';
import Banner from '../../components/Banner';
import ButtonContact from '../../components/ButtonContact';
import CardBanner from '../../components/CardBanner';
import Collections from '../../components/Collections';
import ReplyComment from '../../components/ReplyComment';
import { getCollections } from '../../lib/saleor';
import Comment from '../gioi-thieu/components/Comment';
import DropdownComboProduct from './components/DropdownComboProduct';
import DropdownProduct from './components/DropdownProduct';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Bánh Trung Thu Hội An MoonCake cao cấp, chiếu khấu cao',
    description: 'Bảng giá Hội An MoonCake',
  };
};

export default async function Page({ searchParams }) {
  const collections = await getCollections();

  return (
    <div>
      <Banner
        mobile="/images/banner-mobile-ha-t7-768x1154.jpg"
        desktop="/images/banner-Hoi-An-desktop-1536x800.jpg"
      />
      <Collections collections={collections} />
      <div className="my-9 flex flex-col items-center justify-center pt-5 text-2xl font-semibold uppercase text-primary">
        <p>NHÂN BÁNH TRUNG THU</p>
        <p className="">HỘI AN MOONCAKE</p>
        <CardBanner
          firstImage="/images/HA-bang-gia-banh.jpg"
          secondImage="/images/nhan-banh-HA-08-1.png"
        />
      </div>
      <ButtonContact />{' '}
      <div className="my-9 flex flex-col items-center justify-center pt-5 text-2xl font-semibold uppercase text-primary">
        <p>NHÂN BÁNH TRUNG THU</p>
        <p className="">HỘI AN MOONCAKE</p>
        <CardBanner
          firstImage="/images/HA-bang-gia-banh.jpg"
          secondImage="/images/nhan-banh-HA-08-1.png"
        />
      </div>
      <DropdownProduct searchParams={searchParams} />
      <ButtonContact />
      <div className="">
        <div className="my-9 flex flex-col items-center justify-center pt-5 text-4xl font-semibold uppercase text-primary">
          <p>NHÂN BÁNH TRUNG THU</p>
          <p className="">HỘI AN MOONCAKE</p>
        </div>
      </div>
      <DropdownComboProduct searchParams={searchParams} />
      <ButtonContact />
      <section className="container ">
        <p className="my-5 border-s-4 border-gray-400 py-2 ps-5">
          Hè sang Thu, một mùa Tết Trung Thu nữa lại về. Nhà nhà sum họp, ngồi quây quần bên nhau,
          uống tách trà nóng, thưởng thức bánh thơm ngon và kể nhau nghe bao chuyện vui trong cuộc
          sống. Hơn nữa Trung thu còn là dịp, là cơ hội để bày tỏ tình cảm, tình yêu thương gắn kết
          với người thân, đồng nghiệp, đối tác kinh doanh thông qua những hộp bánh Trung thu ý nghĩa
          – gửi gắm lời chúc tốt đẹp về cuộc sống viên mãn, tròn đầy.
        </p>
      </section>
      <ReplyComment />
      <Comment />
    </div>
  );
}
