'use client';

import {
  CalendarIcon,
  ChatBubbleOvalLeftIcon,
  FolderIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import Comment from '../../../app/gioi-thieu/components/Comment';
import CEOPost from './CEOPost';

export default function MainBlog({ page }: { page?: any }) {
  const data = page[0];
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const cleanHTML = DOMPurify.sanitize(data?.body);
    setHtmlContent(cleanHTML || '');
  }, [data]);

  function formatDate(date: any) {
    let d = new Date(date);
    return d.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary">{data?.title}</h1>
      <div className="mt-5 flex gap-3 border-y py-4 text-sm capitalize">
        <div className="flex gap-2">
          <CalendarIcon className="size-5 text-second" />
          <span>{formatDate(data?.createdAt || new Date())}</span>
        </div>
        <div className="flex gap-2">
          <UserCircleIcon className="size-5 text-second" />
          <span>{data?.authorName}</span>
        </div>
        <div className="flex gap-2">
          <FolderIcon className="size-5 text-second" />
          <span>{data?.category}</span>
        </div>
        <div className="flex gap-2">
          <ChatBubbleOvalLeftIcon className="size-5 text-second" />
          <span>bình luận</span>
        </div>
      </div>
      <div className="prose min-w-full">
        {htmlContent ? (
          <div className=" py-5" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        ) : (
          <p className="py-5">Đang tải...</p>
        )}
      </div>
      <CEOPost />
      <Comment />
    </div>
  );
}
