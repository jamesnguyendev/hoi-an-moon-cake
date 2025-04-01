import Image from 'next/image';
import { getArticleByTheSameTopic } from '../../../lib/cms';

const RelatedBlog = async ({ type }: { type: any }) => {
  const pageTypes = await getArticleByTheSameTopic(type);
  console.log(pageTypes);

  function formatDate(date: any) {
    let d = new Date(date);
    return d.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return (
    <div className="">
      <span className="text-primary">Bài viết cùng chủ đề</span>
      {pageTypes
        .slice(0, 10)
        .reverse()
        .map((item: any, index: number) => (
          <div className="pt-4" key={index}>
            <Image
              alt={item.title && 'No image'}
              width={500}
              height={500}
              src={item.image}
              className="h-full w-full"
            />
            <a
              href={`/blog/${item.handle}`}
              className="line-clamp-2 text-second hover:text-primary hover:underline"
            >
              {item.title}
            </a>
            <span className="text-sm text-gray-500">
              {formatDate(item.createdAt)} | By {item.authorName || 'Admin'}
            </span>
            <div className=" py-5 text-black">
              <div className="line-clamp-2">{item.description || ''}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RelatedBlog;
