import React, { useState } from 'react';
import { marked } from 'marked';
import './Previewer.css';

function Previewer() {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div id='Previewer'>
      <div id='container'>
        <div id='editor-container'>
          <div id='editor-top-bar'>
            <div className='top-bar-icons'>
              <img className='fcc-icons' src='./flame_icon.png' alt='freeCodeCamp Flame Icon' />Editor
            </div>
            <div>
              <img className='quit-icons' src='./cross.png' alt='Quit Icon' />
            </div>
          </div>
          <textarea
            id='editor'
            value={markdown}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div id='preview-container'>
          <div id='preview-top-bar'>
            <div className='top-bar-icons'>
              <img className='fcc-icons' src='./flame_icon.png' alt='freeCodeCamp Flame Icon' />Previewer
            </div>
            <div>
              <img className='quit-icons' src='./cross.png' alt='Quit Icon' />
            </div>
          </div>
          <div
            id='preview'
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Previewer;
