import React from 'react';
import Register from './component/Register'; // ✅ Correct relative path
import Home from './component/Home';
import Admin from './component/Admin';

function App() {
  return (
    <div>
      <Admin/>
      <Home/>
    </div>
  );
}

export default App;
