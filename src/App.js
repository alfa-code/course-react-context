import { useState } from 'react';

import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';

function App() {
  const [theme] = useState('light');

  return (
    <div className={ `App ${theme}` }>
      <Sidebar theme={ theme } />
      <Main theme={ theme } />
      <Footer />
    </div>
  );
}

export default App;
