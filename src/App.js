import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
