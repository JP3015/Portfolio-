import './App.css'
import './scripts/script.js'
import Music from './assets/ambient-1.mp3'

function App() {
  return (
    <body>
      <div id="container">
        <div id='title'></div>
        <img id="background"/>
        <div id='story'></div>
        <div id='choices'></div>
        <div id="sound">
        <audio id="bgMusic" loop>
          <source src={Music} type="audio/mpeg" />
        </audio>
        <button id="musicToggle"></button>
      </div>
      </div>
    </body>
  )
}

export default App;
