import 'reset-css';
import './App.scss';

import { useEffect } from 'react';
import { Asobo, FirstView, Story, Mission, Ranking, Plan, Attention, Footer, TicketLink, Bg } from './components/index.js';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
// import { ScrollTrigger } from 'gsap/all';

function App() {

  useEffect( () => {
    gsap.registerPlugin(ScrollToPlugin);
  }, [] );

  const clickToTop = () => {
    gsap.to( window, {
        scrollTo: 0,
        duration: 0.3,
    } )
  };

  return (
    <div className="App">
        <Asobo />
        <FirstView />
        <Story />
        <Mission />
        <Ranking />
        <Plan />
        <Attention />
        <Footer fn={clickToTop} />
        <TicketLink />
        <Bg />
    </div>
  );
}

export default App;
