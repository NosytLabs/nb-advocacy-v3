'use client';

import { useState } from 'react';

interface RedditEmbedProps {
  postUrl: string;
  title?: string;
  className?: string;
}

export function RedditEmbed({ postUrl, title, className = '' }: RedditEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  
  const getEmbedUrl = (url: string): string => {
    const normalized = url.replace(/^https?:\/\/(old\.)?reddit\.com/, '');
    return `https://www.reddit.com${normalized.startsWith('/') ? normalized : '/' + normalized}embed`;
  };

  const getWidgetUrl = (url: string): string => {
    return url.includes('reddit.com') ? url : `https://reddit.com${url.startsWith('/') ? url : '/' + url}`;
  };

  return (
    <div className={`my-8 ${className}`}>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800 bg-neutral-900">
          <svg className="w-5 h-5 text-orange-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
          <span className="text-sm font-semibold text-white">Community Discussion on Reddit</span>
          {title && <span className="text-xs text-neutral-400 ml-auto hidden sm:block truncate max-w-xs">{title}</span>}
          <a 
            href={getWidgetUrl(postUrl)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-auto text-xs text-orange-500 hover:text-orange-400 font-semibold transition-colors"
          >
            View on Reddit →
          </a>
        </div>
        
        <div className="relative bg-white dark:bg-neutral-950" style={{ minHeight: loaded ? '400px' : '150px' }}>
          {!loaded ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-900">
              <p className="text-neutral-400 text-sm">Loading Reddit discussion...</p>
              <button
                onClick={() => setLoaded(true)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Load Reddit Embed
              </button>
              <p className="text-neutral-600 text-xs">Opens in privacy-friendly embed</p>
            </div>
          ) : (
            <iframe
              src={getEmbedUrl(postUrl)}
              title="Reddit discussion embed"
              className="w-full"
              style={{ minHeight: '400px', border: 'none' }}
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}
