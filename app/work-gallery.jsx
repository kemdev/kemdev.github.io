'use client';

import { useState } from 'react';

const categories = ['All work', 'Web apps', 'Websites', 'Developer tools'];

export function WorkGallery({ groups }) {
  const [category, setCategory] = useState(categories[0]);
  const isFiltered = category !== categories[0];
  const resultCount = isFiltered ? groups.filter((project) => project.category === category).length : groups.length;

  return (
    <>
      <div className="work-filters" role="group" aria-label="Filter selected work">
        {categories.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={category === name}
            aria-controls="selected-projects"
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{resultCount} {resultCount === 1 ? 'project' : 'projects'}</p>
      <div className={`project-grid work-grid${isFiltered ? ' filtered' : ''}`} id="selected-projects">
        {groups.map(({ name, category: projectCategory, card }) => (
          <div className="work-item" key={name} hidden={isFiltered && category !== projectCategory}>
            {card}
          </div>
        ))}
      </div>
    </>
  );
}
