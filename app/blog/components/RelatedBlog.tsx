import Image from 'next/image';
import Link from 'next/link';

const RelatedBlog = () => {
  return (
    <div>
      <div className="">
        <span className="text-primary">Bài viết cùng chủ đề</span>
        <div className="">
          <Link href={'/'}>
            <Image
              src={'/images/banh-trung-thu-buu-yen-5-600x601.jpg'}
              alt="Related blog"
              width={300}
              height={300}
              className="w-full"
            />
          </Link>
          <Link href={'/'} className="line-clamp-2 text-second hover:text-primary hover:underline">
            Cuộc Thi Ảnh “Đệ Nhất Bánh Trung Thu” Lần Thứ I
          </Link>
          <span className="text-sm text-gray-500">06/07/2020</span>
          <p className="text-black line-clamp-2">Hội An Mooncake chính thức khởi động Cuộc thi ảnh</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
