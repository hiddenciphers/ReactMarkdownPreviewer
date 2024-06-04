// Previewer.js
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './Previewer.css';

marked.setOptions({
  gfm: true,       // Enable GitHub flavored markdown
  breaks: true,    // Convert carriage returns to <br> elements
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  },

});

function Previewer() {
  const [markdown, setMarkdown] = useState(`# React Markdown Previewer
---  
## I made this Markdown Previewer with React...
---
### Use it to practice your Markdown:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };
\`\`\`

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~crossing stuff out~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  const [showEditor, setShowEditor] = useState(true);
  const [showPreview, setShowPreview] = useState(true);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const toggleEditor = () => {
    setShowEditor(!showEditor);
    if (!showEditor) {
      setShowPreview(true);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
    if (!showPreview) {
      setShowEditor(true);
    }
  };

  useEffect(() => {
    // Apply syntax highlighting to code blocks
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [markdown]);

  return (
    <div id='Previewer'>
      <div id='container'>
        {showEditor && (
          <div id='editor-container' className={!showPreview ? 'full-height' : ''}>
            <div id='editor-top-bar'>
              <div className='top-bar-icons'>
                <img className='fcc-icons' src='./flame.png' alt='freeCodeCamp Flame Icon' />Editor
              </div>
              <div>
                <img className='toggle-icons' src={showPreview ? './maximize.png' : './minimize.png'} alt='Toggle Icon' id='close-editor' onClick={togglePreview} />
              </div>
            </div>
            <textarea
              id='editor'
              className={!showPreview ? 'full-height' : ''}
              value={markdown}
              onChange={handleInputChange}
            ></textarea>
          </div>
        )}
        {showPreview && (
          <div id='preview-container' className={!showEditor ? 'full-height' : ''}>
            <div id='preview-top-bar'>
              <div className='top-bar-icons'>
                <img className='fcc-icons' src='./flame.png' alt='freeCodeCamp Flame Icon' />Previewer
              </div>
              <div>
                <img className='toggle-icons' src={showEditor ? './maximize.png' : './minimize.png'} alt='Toggle Icon' id='close-preview' onClick={toggleEditor} />
              </div>
            </div>
            <div
              id='preview'
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Previewer;






