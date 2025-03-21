import Image from 'next/image';

const CardMoonCake = ({
  title,
  price,
  firstImage,
  secondImage,
  soldOut,
  discountLabel,
  slug,
}: {
  title: string;
  price: number;
  firstImage: string;
  secondImage: string;
  soldOut: string;
  discountLabel: string;
  slug: string;
}) => {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
    .format(price)
    .replace(/\./g, ',');

  return (
    <div className="flex h-full flex-col items-center gap-6 font-semibold">
      <div className="relative h-[150px] w-full md:h-[350px]">
        <Image
          src={firstImage}
          alt={title}
          layout="fill"
          quality={100}
          objectFit="contain"
          className="  transition-opacity duration-300 hover:opacity-0 md:object-cover"
        />
        <Image
          src={secondImage}
          alt={title}
          quality={100}
          layout="fill"
          objectFit="contain"
          className="absolute left-0 top-0 object-contain opacity-0 transition-opacity duration-300 hover:opacity-100 md:object-cover"
        />
        {soldOut ? (
          <Image
            src={soldOut}
            alt={title}
            width={300}
            height={100}
            quality={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-300 md:object-cover  "
          />
        ) : null}

        {discountLabel ? (
          <Image
            src={discountLabel}
            alt={title}
            quality={100}
            width={90}
            height={100}
            className="absolute right-0 top-0 object-contain transition-opacity duration-300 md:object-cover  "
          />
        ) : null}
      </div>
      <div className="flex grow flex-col items-center gap-6 font-semibold">
        <a
          href={'/product/' + slug}
          className="line-clamp-2 grow text-center text-2xl uppercase text-primary"
        >
          {title}
        </a>
        <span className="text-xl text-red-600">{formattedPrice}</span>
      </div>
    </div>
  );
};

export default CardMoonCake;
