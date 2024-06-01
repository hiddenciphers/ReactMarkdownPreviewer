import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './Previewer.css';

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  },
});

function Previewer() {
  const [markdown, setMarkdown] = useState(`
# Welcome to my Markdown Previewer!
---  
## This is a sub-heading...
---
### And here's some other cool stuff:

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
And feel free to go crazy ~~crossing stuff out~~.

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

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
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

