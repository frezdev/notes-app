import React from 'react';

const Note = ({ title, body }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}

export default Note;