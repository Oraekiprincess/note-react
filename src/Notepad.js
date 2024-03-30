// src/Notepad.js

import React, { useState } from 'react';

function Notepad() {
  const [text, setText] = useState('');
  const [fontFamily, setFontFamily] = useState('Arial');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFontChange = (event) => {
    setFontFamily(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="fontFamily">Choose a font: </label>
        <select id="fontFamily" value={fontFamily} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{ fontFamily: fontFamily, width: '100%', height: '300px' }}
      />
    </div>
  );
}

export default Notepad;

