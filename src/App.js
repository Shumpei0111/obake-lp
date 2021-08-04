import './App.scss';
import 'reset-css';

import { FirstView, Footer } from './components/index.js';


function App() {
  return (
    <div className="App">
        <FirstView />
        <Footer />
    </div>
  );
}

export default App;
