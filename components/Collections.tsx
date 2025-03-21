import Image from 'next/image';

const Collections = async ({ collections }) => {
  return (
    <section>
      <div className="my-9 flex flex-col items-center justify-center text-4xl font-semibold uppercase text-primary">
        <p>Hội an mooncake</p>
        <p className="font-mono">collection 2024</p>
      </div>
      <div className="container grid grid-cols-1 gap-1 lg:grid-cols-3">
        {collections.map((item, index) => (
          <Image
            key={index}
            src={item.backgroundImage ?? '/images/noimg.png'}
            alt="ha-1"
            width={500}
            unoptimized={true}
            height={100}
            className="w-full border border-primary bg-primary"
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
