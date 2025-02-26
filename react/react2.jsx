import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.scss';

function App() {
  console.log('react2');
  
  return (
    <div>
      <h1 className="text-[blue]">React 2!</h1>
    </div>
  );
}

const rootElement = document.getElementById('react2');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}