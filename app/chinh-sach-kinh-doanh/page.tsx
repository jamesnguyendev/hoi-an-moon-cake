import { getPolicies } from 'lib/cms';
import Description from './Description';

const Page = async () => {
  const data = await getPolicies();

  return (
    <section className="container mb-5 ">
      <div className="flex flex-col items-center justify-center gap-2 pt-32">
        <div className="text-3xl font-semibold text-primary">Chính sách kinh doanh</div>
        <div className="h-1 w-16 bg-amber-400 s"></div>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-2xl font-semibold text-primary ">
        {data.map((item: any, index: number) => (
          <div className="mb-20" key={index}>
            <div className="">{item.title}</div>
            <Description richText={item.body} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
