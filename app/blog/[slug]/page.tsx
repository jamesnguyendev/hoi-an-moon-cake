import { getPage } from '../../../lib/saleor';
import MainBlog from '../components/MainBlog';
import RelatedBlog from '../components/RelatedBlog';

export default async function Page({ params }) {
  const page = await getPage(params.slug);

  return (
    <div className="container grid grid-cols-1 gap-6 py-[9rem] lg:grid-cols-4">
      <div className="col-span-3 p-5 ring-2 ring-primary">
        <MainBlog page={page} />
      </div>
      <RelatedBlog type={page.Typeid} />
    </div>
  );
}
