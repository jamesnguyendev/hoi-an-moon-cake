import { getPageByPageType } from '../../../lib/saleor';
import Description from './Description';

const RelatedBlog = async ({ type }: { type: any }) => {
  const pageTypes = await getPageByPageType(type);
  function formatDate(date: any) {
    let d = new Date(date);
    return d.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return (
    <div className="">
      <span className="text-primary">Bài viết cùng chủ đề</span>
      {pageTypes.map((item, index) => (
        <div className="pt-4" key={index}>
          <a
            href={`/blog/${item.handle}`}
            className="line-clamp-2 text-second hover:text-primary hover:underline"
          >
            {item.title}
          </a>
          <span className="text-sm text-gray-500">{formatDate(item.createdAt)} | By Admin</span>
          <Description type={item.body} />
        </div>
      ))}
    </div>
  );
};

export default RelatedBlog;
