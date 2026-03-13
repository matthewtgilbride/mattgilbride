import React, { FC, ReactNode } from 'react';
import { ContentBlock } from '../../content/resume';

type Group = { type: 'list'; items: string[] } | { type: 'single'; block: ContentBlock };

const groupBlocks = (blocks: ContentBlock[]): Group[] =>
  blocks.reduce<Group[]>((groups, block) => {
    if (block.type === 'list-item') {
      const last = groups[groups.length - 1];
      if (last?.type === 'list') {
        last.items.push(block.text);
        return groups;
      }
      return [...groups, { type: 'list', items: [block.text] }];
    }
    return [...groups, { type: 'single', block }];
  }, []);

const renderBlock = (block: ContentBlock, key: number): ReactNode => {
  switch (block.type) {
    case 'heading5':
      return <h5 key={key}>{block.text}</h5>;
    case 'heading6':
      return <h6 key={key}>{block.text}</h6>;
    case 'paragraph':
      return block.link ? (
        <p key={key}>
          {block.text}
          <a href={block.link.href}>{block.link.text}</a>.
        </p>
      ) : (
        <p key={key}>{block.text}</p>
      );
    default:
      return null;
  }
};

export const ContentBlocks: FC<{ blocks: ContentBlock[] }> = ({ blocks }) => (
  <>
    {groupBlocks(blocks).map((group, i) =>
      group.type === 'list' ? (
        <ul key={i}>
          {group.items.map((text, j) => (
            <li key={j}>{text}</li>
          ))}
        </ul>
      ) : (
        renderBlock(group.block, i)
      ),
    )}
  </>
);
