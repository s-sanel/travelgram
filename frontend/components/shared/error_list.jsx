import React from 'react';

export default function ErrorList({ errors }) {
  if (!errors) return null;

  const errorItems = errors.map(error =>
    <li key={ error }>{ error }</li>
  );

  debugger

  return (
    <ul className="red-text">
      { errorItems }
    </ul>
  );
}
