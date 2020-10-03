import React, {lazy,Suspense} from 'react';

import './App.css';

const Landing = lazy(()=>import('./Landing/landing'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={'Loading ...'}>
      <Landing />
      </Suspense>
  
    </div>
  );
}

export default App;
