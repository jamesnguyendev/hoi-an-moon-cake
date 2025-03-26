import MainBlog from './components/MainBlog';
import RelatedBlog from './components/RelatedBlog';

const Page = () => {
  return (
    <div className="container grid grid-cols-1 gap-6 py-[9rem] lg:grid-cols-4">
      <div className="col-span-3 p-5 ring-2 ring-primary">
        <MainBlog />
      </div>
      <RelatedBlog />
    </div>
  );
};

export default Page;
