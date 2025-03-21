import CardMoonCake from './CardMoonCake';

export default async function ProductShowcase({ products }: { products: any[] }) {
  return (
    <section className="container my-7 ">
      <div className="grid grid-cols-2 gap-7 lg:grid-cols-3">
        {products.map((item, index) => (
          <div key={index}>
            <CardMoonCake
              firstImage={(item.images[0]?.url as string) || '/images/no-image.jpg'}
              secondImage={(item.images[1]?.url as string) || '/images/no-image.jpg'}
              discountLabel={item.images[2]?.url as string}
              soldOut={item.images[3]?.url as string}
              title={item.title}
              price={Number(item.variants[0]?.price.amount)}
              slug={item?.handle}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
