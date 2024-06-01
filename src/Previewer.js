import './Previewer.css';

function Previewer() {
  return (
    <div id='Previewer'>
      <div id='container'>
        <div id='editor-container'>
            <div id='editor-top-bar'>
                <div className='top-bar-icons'><img className='icons' src='./flame_icon.png' alt='freeCodeCamp Flame Icon'/>Editor</div>
                <div><img className='icons' src='./cross.png' alt='Quit Icon'/></div>
            </div>
            <textarea id='editor'></textarea>
        </div>
        <div id='preview-container'>
            <div id='preview-top-bar'>
                <div className='top-bar-icons'><img className='icons' src='./flame_icon.png' alt='freeCodeCamp Flame Icon'/>Previewer</div>
                <div><img className='icons' src='./cross.png' alt='Quit Icon'/></div>
            </div>
            <div id='preview'></div>
        </div>
      </div>
    </div>
  );
}

export default Previewer;