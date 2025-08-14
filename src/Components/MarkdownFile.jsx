import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import ReactMarkdown from 'react-markdown';

export default function MarkdownFile({ src, className }) {
  const [text, setText] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    let alive = true;
    setErr('');
    setText('');
    fetch(src, { cache: 'no-cache' })
      .then(r => (r.ok ? r.text() : Promise.reject(`${r.status} ${r.statusText}`)))
      .then(md => alive && setText(md))
      .catch(e => alive && setErr(String(e)));
    return () => { alive = false; };
  }, [src]);

  if (err) return <div className={className}><em>Failed to load markdown: {err}</em></div>;
  if (!text) return <div className={className}><Skeleton variant="rectangular" height={120} /></div>;

  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            if (inline) {
              return (
                <code
                  style={{
                    whiteSpace: 'break-spaces',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere'
                  }}
                  className={className}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            // fenced code blocks
            return (
              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowWrap: 'anywhere',
                  overflowX: 'hidden',
                  margin: '1rem 0',
                  padding: '.75rem 1rem',
                  borderRadius: 6,
                  background: '#0f0f0f0d'
                }}
              >
                <code className={className} {...props}>{children}</code>
              </pre>
            );
          }
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
