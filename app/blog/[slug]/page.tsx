import { getArticleBySlug } from 'lib/cms';
import MainBlog from '../components/MainBlog';
import RelatedBlog from '../components/RelatedBlog';

export default async function Page({ params }) {
  const page = await getArticleBySlug({ params });

  return (
    <div className="container grid grid-cols-1 gap-6 py-[9rem] lg:grid-cols-4">
      <div className="col-span-3 p-5 ring-2 ring-primary">
        <MainBlog page={page} />
      </div>
      <RelatedBlog type={page[0].category} />
    </div>
  );
}
