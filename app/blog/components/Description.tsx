'use client';

import { useEffect, useState } from 'react';
import { parseEditorJsToHtml } from '../../../lib/saleor/editorjs';

const Description = ({ type }: { type: any }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    setHtmlContent(parseEditorJsToHtml(type || ''));
  }, [type]);

  return (
    <div className=" py-5 text-black">
      <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default Description;
