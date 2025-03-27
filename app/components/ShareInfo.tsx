import { getPages } from '../../lib/saleor';
import { parseEditorJsToHtml } from '../../lib/saleor/editorjs';

const ShareInfo = async () => {
  const pages = await getPages();

  function formatDate(date: any) {
    let d = new Date(date);
    return d.toLocaleDateString();
  }
  return (
    <section className="container my-6">
      <div className="mb-10 text-center text-2xl font-semibold text-primary">THÔNG TIN CHIA SẺ</div>
      <div className="mb-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {pages.slice(0, 3).map((item, index) => (
          <div className="flex flex-col gap-3 text-center" key={index}>
            <a
              href={`/blog/${item.handle}`}
              className="line-clamp-2 text-xl font-semibold text-primary"
            >
              {item.title}
            </a>
            <span
              className="text-md line-clamp-2 font-thin"
              dangerouslySetInnerHTML={{ __html: parseEditorJsToHtml(item.body) }}
            ></span>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-13 h-1 bg-amber-400"></div>
              <div className="mt-3 flex items-center justify-center gap-3 text-sm">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span> Admin</span>
                </div>
                <div className="flex gap-1 border-x px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <span> {formatDate(item.createdAt)}</span>
                </div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                    />
                  </svg>
                  <span className="line-clamp-1"> Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShareInfo;
