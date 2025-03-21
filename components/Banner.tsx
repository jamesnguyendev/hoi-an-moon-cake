import Image from 'next/image';

const Banner = ({ desktop, mobile }: { desktop: string; mobile: string }) => {
  return (
    <div>
      <Image
        src={desktop}
        alt="banner-Hoi-An-desktop"
        width={1000}
        height={100}
        quality={100}
        className="pt-26 hidden w-full object-contain md:block"
      />
      <Image
        src={mobile}
        alt="banner-Hoi-An-desktop"
        width={1000}
        height={100}
        quality={100}
        className="pt-26 w-full object-contain md:hidden"
      />
    </div>
  );
};

export default Banner;
