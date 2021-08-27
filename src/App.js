import 'reset-css';
import './App.scss';
import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { Asobo, FirstView, Bg } from './components/index.js';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

// Lazy
const renderLoader = () => <p>読み込み中...</p>

const LazyStory     = lazy(() => import('./components/Story'));
const LazyFooter    = lazy(() => import('./components/Footer'));
const LazyMission   = lazy(() => import('./components/Mission'));
const LazyRanking   = lazy(() => import('./components/Ranking'));
const LazyPlan      = lazy(() => import('./components/Plan'));
const LazyAttention = lazy(() => import('./components/Attention'));
// Lazy


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
        {/* <Story /> */}
        <Suspense fallback={renderLoader()}>
          <LazyStory />
          <LazyMission />
          <LazyRanking />
          <LazyPlan />
          <LazyAttention />
          <LazyFooter fn={clickToTop} scrollPacks={scrollPacks} />
        </Suspense>
        {/* <Footer fn={clickToTop} scrollPacks={scrollPacks} /> */}
        <Bg />
    </div>
  );
}

export default App;
