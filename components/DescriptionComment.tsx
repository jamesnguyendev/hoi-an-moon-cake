'use client';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

const DescriptionComment = ({ richText }: { richText: any }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const cleanHTML = DOMPurify.sanitize(richText);
    setHtmlContent(cleanHTML || '');
  }, [richText]);

  return <div className=" w-full" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

export default DescriptionComment;
