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

const rootElement = document.getElementById('react1');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}