import React from 'react';
import './App.css';

import Search from './components/Search/Search';

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='max-w-6xl m-auto'>
        <Search />
      </div>
    </main>
  );
}

export default App;
