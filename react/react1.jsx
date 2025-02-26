import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.scss';

function App() {
  console.log('react1');
  
  return (
    <div>
      <h1 className="text-[blue]">React 1!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react1'));
root.render(<App />);