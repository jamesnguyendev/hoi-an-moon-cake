'use client';

import { CalendarIcon, ChatBubbleOvalLeftIcon, FolderIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Comment from '../../../app/gioi-thieu/components/Comment';
import { parseEditorJsToHtml } from '../../../lib/saleor/editorjs';
import CEOPost from './CEOPost';

export default function MainBlog({ page }: { page?: any }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    setHtmlContent(parseEditorJsToHtml(page?.body || ''));
  }, [page]);

  function formatDate(date: any) {
    let d = new Date(date);
    return d.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary">{page?.title}</h1>
      <div className="mt-5 flex gap-3 border-y py-4 text-sm capitalize">
        <div className="flex gap-2">
          <CalendarIcon className="size-5 text-second" />
          <span>{formatDate(page?.createdAt || new Date())}</span>
        </div>
        <div className="flex gap-2">
          <FolderIcon className="size-5 text-second" />
          <span>{page?.nameType}</span>
        </div>
        <div className="flex gap-2">
          <ChatBubbleOvalLeftIcon className="size-5 text-second" />
          <span>bình luận</span>
        </div>
      </div>
      <div className="">
        {htmlContent ? (
          <p className="py-5" dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
        ) : (
          <p className="py-5">Đang tải...</p>
        )}
      </div>
      <CEOPost />
      <Comment />
    </div>
  );
}
