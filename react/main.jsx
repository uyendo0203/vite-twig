import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.scss';

function App() {
  console.log('react');
  
  return (
    <div>
      <h1 className="text-[blue]">React with Vite!</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log(11);
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}