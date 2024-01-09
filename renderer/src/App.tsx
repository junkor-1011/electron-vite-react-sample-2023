import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Listener from './Listener';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} type="submit">
          count is {count}
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.electronAPI.sendExample('message from renderer: send');
          }}
          type="submit"
        >
          ipc send
        </button>
        <button
          onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const res = await window.electronAPI.invokeExample({
              message: 'invoke',
            });
            alert(res);
          }}
          type="submit"
        >
          ipc invoke
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Listener />
    </>
  );
}

export default App;
