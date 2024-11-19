import React from 'react';
import { Section } from '../data/sections';

interface ContentProps {
  sections: Section[];
}

export default function Content({ sections }: ContentProps) {
  return (
    <div className="prose prose-lg max-w">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
          <div className="text-gray-700 leading-relaxed">{section.content}</div>
        </section>
      ))}
    </div>
  );
}