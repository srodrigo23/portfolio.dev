'use client'

import { useState } from 'react';
import type { SystemNode } from '../data/cv';

type NodeId = SystemNode['id'];

/* Node centers as % of the diagram box; lines and buttons share them. */
const pos: Record<NodeId, { x: number; y: number }> = {
  web: { x: 25, y: 13 },
  mobile: { x: 75, y: 13 },
  api: { x: 50, y: 50 },
  data: { x: 25, y: 87 },
  cloud: { x: 75, y: 87 },
};

const edges: [NodeId, NodeId][] = [
  ['web', 'api'],
  ['mobile', 'api'],
  ['api', 'data'],
  ['api', 'cloud'],
];

/**
 * The hero's thesis: the stack as a system. Select a layer to see the roles
 * and tools behind it. Hover and focus preview, click pins (touch-friendly).
 */
export default function SystemDiagram({
  nodes,
  caption,
}: {
  nodes: SystemNode[];
  caption: string;
}) {
  const [active, setActive] = useState<NodeId>('web');
  const current = nodes.find((n) => n.id === active)!;

  return (
    <div className='rounded-lg border border-line bg-panel p-4 sm:p-5'>
      <p className='font-mono text-xs text-muted'>{caption}</p>

      <div className='relative mx-auto mt-4 aspect-[4/3] w-full max-w-md'>
        <svg
          aria-hidden='true'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          className='absolute inset-0 h-full w-full'
        >
          {edges.map(([a, b]) => {
            const on = active === a || active === b;
            return (
              <line
                key={`${a}-${b}`}
                x1={pos[a].x}
                y1={pos[a].y}
                x2={pos[b].x}
                y2={pos[b].y}
                strokeWidth={on ? 2 : 1}
                strokeDasharray={on ? undefined : '3 3'}
                vectorEffect='non-scaling-stroke'
                className={`transition-colors duration-300 ${
                  on ? 'stroke-accent' : 'stroke-line'
                }`}
              />
            );
          })}
        </svg>

        {nodes.map((node) => {
          const on = node.id === active;
          return (
            <button
              key={node.id}
              type='button'
              aria-pressed={on}
              onClick={() => setActive(node.id)}
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              style={{ left: `${pos[node.id].x}%`, top: `${pos[node.id].y}%` }}
              className={`absolute w-[38%] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-md border px-2 py-2 text-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                on
                  ? 'border-accent bg-accent-solid text-accent-fg'
                  : 'border-line bg-background hover:border-accent'
              }`}
            >
              <span className='block font-display font-stretch-expanded text-sm font-bold sm:text-base'>
                {node.label}
              </span>
              <span
                className={`block font-mono text-[10px] sm:text-xs ${
                  on ? 'text-accent-fg' : 'text-muted'
                }`}
              >
                {node.hint}
              </span>
            </button>
          );
        })}
      </div>

      <div aria-live='polite' className='mt-4 border-t border-line pt-4 sm:min-h-52'>
        <p className='font-mono text-xs text-accent'>{`// ${current.label.toLowerCase()}`}</p>
        <ul className='mt-2 flex flex-col gap-1.5 text-sm'>
          {current.where.map((line) => (
            <li key={line} className='flex gap-2'>
              <span aria-hidden='true' className='mt-2 size-1.5 shrink-0 bg-accent-2' />
              {line}
            </li>
          ))}
        </ul>
        <p className='mt-3 font-mono text-xs text-muted'>{current.stack.join(' · ')}</p>
      </div>
    </div>
  );
}
