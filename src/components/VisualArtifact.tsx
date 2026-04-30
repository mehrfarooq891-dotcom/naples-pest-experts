import { useEffect, useRef } from 'react';
import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown';

interface VisualArtifactProps {
  content: string;
}

export default function VisualArtifact({ content }: VisualArtifactProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple parser to extract SVG and HTML from the response
  // First, try to handle markdown code blocks
  const cleanContent = content.replace(/```(svg|html|xml)?\n?([\s\S]*?)```/g, '$2');
  
  const svgMatch = cleanContent.match(/<svg[\s\S]*?<\/svg>/);
  const htmlMatch = cleanContent.match(/<div[\s\S]*?<\/script>|<div[\s\S]*?<\/div>/);

  const hasVisual = svgMatch || htmlMatch;
  const visualContent = hasVisual ? hasVisual[0] : null;

  // For the text part, we use the original content but might want to hide the visual block if it's there
  const textPart = hasVisual ? content.replace(/```(svg|html|xml)?\n?([\s\S]*?)```/g, '').replace(hasVisual[0], '').trim() : content;

  return (
    <div className="flex flex-col gap-4 w-full">
      {textPart && (
        <div className="prose prose-primary max-w-none text-text-main leading-[1.7]">
          <Markdown rehypePlugins={[rehypeRaw]}>{textPart}</Markdown>
        </div>
      )}
      
      {hasVisual && (
        <div className="w-full bg-surface border border-gray-100 rounded-3xl p-8 shadow-2xl overflow-hidden min-h-[100px] backdrop-blur-sm">
          <div 
            ref={containerRef}
            className="w-full h-full flex justify-center items-center"
            dangerouslySetInnerHTML={{ __html: visualContent || '' }}
          />
        </div>
      )}
    </div>
  );
}
