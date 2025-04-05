import { getComments } from 'lib/cms';
import DescriptionComment from './DescriptionComment';

const ReplyComment = async () => {
  const data = await getComments();

  function formatDate(date: any) {
    let d = new Date(date);
    return d.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <div className="container my-10">
      <div className="mb-4 flex items-center justify-between border-b-2 border-gray-200 pb-2">
        <div className="text-xl font-bold text-blue-900">10 BÌNH LUẬN</div>
        <div className="text-xl font-bold text-blue-900">ĐỂ LẠI BÌNH LUẬN</div>
      </div>
      <div className="space-y-8">
        {data.map((item: any, index: number) => (
          <div className=" border-b border-gray-200 pb-4" key={index}>
            <div className=" flex items-center justify-between py-4">
              <div>
                <p className="font-bold text-blue-900">{item.title}</p>
                <p className="text-sm text-gray-500">{formatDate(item.createdAt)}</p>
              </div>
              <button className="mt-2 rounded bg-blue-900 px-4 py-2 text-white">Trả lời</button>
            </div>
            <DescriptionComment richText={item.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReplyComment;
