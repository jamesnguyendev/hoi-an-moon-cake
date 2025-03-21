import Image from 'next/image';

const CardMoonCakeCombo = ({
  title,
  newPrice,
  oldPrice,
  firstImage,
  secondImage,
  slug,
}: {
  title: string;
  newPrice: number;
  oldPrice: number;
  firstImage: string;
  secondImage: string;
  slug: string;
}) => {
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(price)
      .replace(/\./g, ',');
  };

  return (
    <div className="flex flex-col items-center gap-6  font-semibold">
      <div className="relative h-[550px] w-full">
        <Image
          src={firstImage}
          alt={title}
          layout="fill"
          quality={100}
          objectFit="contain"
          className="transition-opacity duration-300 hover:opacity-0"
        />
        <Image
          src={secondImage}
          alt={title}
          quality={100}
          layout="fill"
          objectFit="contain"
          className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      </div>
      <div className="flex grow flex-col items-center gap-3 font-semibold ">
        <a href={`/product/${slug}`} className="grow text-center text-2xl uppercase text-primary">
          {title}
        </a>
        <div className="flex gap-4">
          <span className="text-xl font-thin text-red-600 line-through">
            {formatCurrency(oldPrice)}
          </span>
          <span className="text-xl text-red-600">{formatCurrency(newPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMoonCakeCombo;
