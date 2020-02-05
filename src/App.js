import React from 'react';
import './App.less';

import PageRouter from "./Router";

function App() {
  
  let docEl = document.documentElement, g_rem = 20;
  g_rem = docEl.getBoundingClientRect().width / 16;
  !g_rem && (g_rem = 20);
  docEl.style.fontSize = g_rem + 'px';
  
  return (
    <PageRouter/>
  );
}

export default App;
