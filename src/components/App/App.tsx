import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import style from './App.module.scss';
import logo from './logo.png'

import Nav from '../Nav';
import Footer from '../Footer';
// mport header from './header.png';

import { TextQA as TextQAru, ODQA as ODQAru, NER as NERru, Sentiment } from '../skills/ru';
import { TextQA as TextQAen, ODQA, Ranking, NER, Intent, Insult } from '../skills/en';
import { TextQA as TextQAml, NER as NERml } from '../skills/mu';

class App extends Component {

  render () {
    return (
      <HashRouter>
        <header className={style.header}>
          <div className={style.brandwrapper}>
            <img src={logo} alt='brand' className={style.brand}></img>
            <p className={style.title}>
              demo.fastlaw.io
          </p>
          </div>
          <Nav />
        </header>
        <main className={style.main}>
          <Switch>
            <Route path="/ru/textqa" exact component={TextQAru}/>
            <Route path="/ru/odqa" exact component={ODQAru}/>
            <Route path="/ru/ner" exact component={NERru}/>
            <Route path="/ru/sentiment" exact component={Sentiment}/>
            <Route path="/en/textqa" exact component={TextQAen}/>
            <Route path="/en/odqa" exact component={ODQA}/>
            <Route path="/en/ranking" exact component={Ranking}/>
            <Route path="/en/ner" exact component={NER}/>
            <Route path="/en/intent" exact component={Intent}/>
            <Route path="/en/insult" exact component={Insult}/>
            <Route path="/mu/textqa" exact component={TextQAml}/>
            <Route path="/mu/ner" exact component={NERml}/>
          </Switch>
        </main>
        <Footer/>
      </HashRouter>
    );
  }
}

export default App;
