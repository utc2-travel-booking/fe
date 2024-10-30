import React from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownPreviewProps = {
  content: string;
};

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
