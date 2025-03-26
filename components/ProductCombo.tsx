import CardMoonCakeCombo from './CardMoonCakeCombo';

const ProductCombo = async ({
  title = true,
  ComboProduct,
}: {
  title?: boolean;
  ComboProduct: any[];
}) => {
  return (
    <section className="container my-10">
      <div className="text-center text-3xl font-semibold text-primary">
        {title ? (
          <>
            <div>COMBO BÁNH TRUNG THU</div>
            <div>HỘI AN MOONCAKE</div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className=" my-7 grid grid-cols-1 gap-7 md:grid-cols-2">
        {ComboProduct.map((item, index) => (
          <div key={index}>
            <CardMoonCakeCombo
              slug={item.handle}
              title={item.title}
              newPrice={parseFloat(item.variants[0]?.price.amount ?? '0')}
              oldPrice={parseFloat(item.variants[1]?.price.amount ?? '0')}
              firstImage={item.images[0]?.url as string}
              secondImage={item.images[1]?.url as string}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCombo;
