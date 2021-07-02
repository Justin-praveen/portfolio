import React from 'react';
import Header from './contant/Header';
import Jumbotron1 from './contant/Jumbotron1';
import About from './contant/About';
import Skill from './contant/Skill';
import Certificate from './contant/Certificate';
import Contact from './contant/Contact';

export default class App extends React.Component {
  render() {
      return (
          <div>
              <Header/>
              <Jumbotron1/>
              <About/>
              <Skill/>
              <Certificate/>
              <Contact/>

          </div>
      );
  }
}