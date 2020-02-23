import React from 'react';
import Header from './modules/Header.js'
import Footer from './modules/Footer.js'
import Main from './modules/Main.js'
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;