import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ctr: 0,
    };
  }

    increamentHandleClick = e => {
      e.preventDefault();
      let ctr = this.state.ctr;
      ++ctr;
      this.setState({ ctr });
    }

    decreamentHandleClick = e => {
      e.preventDefault();
      let ctr = this.state.ctr;
      --ctr;
      this.setState({ ctr });
    }

    render() {
      return (
        <section>
          <h3 style={{ color: Math.sign(this.state.ctr) >= 0 ? 'Blue' : 'red' }}>{this.state.ctr}</h3>
          <button onClick={this.increamentHandleClick}>Click me to increase</button>
          <button onClick={this.decreamentHandleClick}>Click me to decrease</button>
        </section>
      );
    }
}

export default Main;