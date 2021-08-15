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

  const duration = 0.4;

  const clickToTop = () => {
    gsap.to( window, {
        scrollTo: 0,
        duration: duration,
    } )
  };

  const clickToStory = () => {
    gsap.to( window, {
      scrollTo: document.getElementById( "story" ),
      duration: duration,
    } )
  };

  const clickToMission = () => {
    gsap.to( window, {
      scrollTo: document.getElementById( "mission" ),
      duration: duration
    } )
  };

  const clickToRanking = () => {
    gsap.to( window, {
      scrollTo: document.getElementById( "ranking" ),
      duration: duration
    } )
  };

  const clickToPlan = () => {
    gsap.to( window, {
      scrollTo: document.getElementById( "plan" ),
      duration: duration
    } )
  };

  const clickToAttention = () => {
    gsap.to( window, {
      scrollTo: document.getElementById( "attention" ),
      duration: duration
    } )
  };

  const scrollPacks = {
    toTop:       clickToTop,
    toStory:     clickToStory,
    toMission:   clickToMission,
    toRanking:   clickToRanking,
    toPlan:      clickToPlan,
    toAttention: clickToAttention
  }

  return (
    <div className="App">
        <Asobo />
        <FirstView scrollPacks={scrollPacks} />
        <Story />
        <Mission />
        <Ranking />
        <Plan />
        <Attention />
        <Footer fn={clickToTop} scrollPacks={scrollPacks} />
        <TicketLink />
        <Bg />
    </div>
  );
}

export default App;
