'use client';

import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

const Description = ({ richText }: { richText: any }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const cleanHTML = DOMPurify.sanitize(richText);
    setHtmlContent(cleanHTML || '');
  }, [richText]);

  return <div className="" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

export default Description;
