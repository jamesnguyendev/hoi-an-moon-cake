import Banner from '../components/Banner';
import ButtonContact from '../components/ButtonContact';
import CardBanner from '../components/CardBanner';
import Collections from '../components/Collections';
import CustomerPartner from '../components/CustomerPartner';
import ProductCombo from '../components/ProductCombo';
import ProductShowcase from '../components/ProductShowcase';
import { getCollections, getProducts } from '../lib/saleor';
import COFounderFeedback from './components/COFounderFeedback';
import GiftService from './components/GiftService';
import HeroGallery from './components/HeroGallery';
import Programs from './components/Programs';
import ShareInfo from './components/ShareInfo';
import VideoIntro from './components/VideoIntro';

export const runtime = 'edge';

export default async function HomePage() {
  const products = await getProducts({ productTypes: process.env.ID_MOONCAKE });
  const comboProducts = await getProducts({ productTypes: process.env.ID_COMBO_MOONCAKE });
  const collections = await getCollections();

  return (
    <div className="">
      <Banner
        mobile="/images/banner-mobile-ha-t7-768x1154.jpg"
        desktop="/images/banner-Hoi-An-desktop-1536x800.jpg"
      />
      <Collections collections={collections} />
      <div className="my-9 flex flex-col items-center justify-center pt-5 text-2xl font-semibold uppercase text-primary">
        <p>NHÂN BÁNH TRUNG THU</p>
        <p className="">HỘI AN MOONCAKE</p>
        <CardBanner
          border
          firstImage="/images/HA-bang-gia-banh.jpg"
          secondImage="/images/nhan-banh-HA-08-1.png"
        />
      </div>

      <ProductShowcase products={products} />

      <ButtonContact />
      <ProductCombo ComboProduct={comboProducts} />
      <Programs />
      <HeroGallery />
      <ButtonContact />
      <COFounderFeedback />
      <GiftService />
      <ButtonContact />
      <VideoIntro />
      <CustomerPartner />
      <ShareInfo />
    </div>
  );
}
