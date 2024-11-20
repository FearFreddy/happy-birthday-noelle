import React from 'react';
import './App.css';
import ImageArticle2024 from './components/ImageArticle2024.js';
import Header from './components/Header.js';
import TextArticle from './components/TextArticle.js';
import TripArticle from './components/TripArticle.js';
import eotf from './assets/eotf.PDF'

const App = () => (
  <div className="App">
    <Header />
    <TextArticle />
    <TripArticle 
      title="Geschenk #1 (von mir) ⛰️🥾🧢🏞️🌍"
      deadline="December 7 2024 19:00:00 GMT+0100"
      link={eotf}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.133985147407!2d9.16649531248092!3d48.77933227120185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db3825f669f7%3A0x7e63825273e57d5e!2sKultur-%20und%20Kongresszentrum%20Liederhalle!5e0!3m2!1sde!2sde!4v1732046424321!5m2!1sde!2sde"
      />
    <TripArticle 
      title="Geschenk #2 (von Mama) 🦙🤭"
      deadline="December 14 2024 14:00:00 GMT+0100"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1314.3203817827382!2d9.266963980166139!3d48.788748134092465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1732046591507!5m2!1sde!2sde"
      />
    <ImageArticle2024 />
  </div>
);

export default App;
