import { useState } from 'react';

import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';

import { ThemeContext } from './contexts/context';

function App() {
  const [theme] = useState('light');

  return (
    <ThemeContext.Provider value={ theme }>
      <div className={ `App ${theme}` }>
        <Sidebar theme={ theme } />
        <Main theme={ theme } />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
