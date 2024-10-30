'use client'
import React, { useState }  from 'react'
import MarkdownPreview from './OutputMarkdown';

export default function MarkdownPage() {
    const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  return (
    <div>
   
    <div className='mt-12' >
      <textarea
       style={{ width: '100%', resize:"none" }} 
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows={5}
        cols={50}
      />
     
    </div>
    <div className='mt-8'>
        <MarkdownPreview content={markdown} />
      
    </div>
    </div>
    
  )
}
