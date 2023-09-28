import { useState } from 'react';

import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';

import { ThemeContext, SignContext } from './contexts/context';

function App() {
  const [theme, setTheme] = useState('light');
  const [isSing, setSing] = useState(false);

  return (
    <SignContext.Provider value={{ isSing, setSing }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`App ${theme}`}>
          <Sidebar />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </SignContext.Provider>
  );
}

export default App;
