import 'reset-css';
import './App.scss';

import { FirstView, Story, Mission, Ranking, Plan, Attention, Footer } from './components/index.js';


function App() {
  return (
    <div className="App">
        <FirstView />
        <Story />
        <Mission />
        <Ranking />
        <Plan />
        <Attention />
        <Footer />
    </div>
  );
}

export default App;
