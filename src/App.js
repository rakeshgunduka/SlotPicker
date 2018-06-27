import React, { Component } from 'react';
import Selector from './components/Selector';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Selector data={this.props.data} title={this.props.title}/>
      </div>
    );
  }
}

App.defaultProps = {
  data: {}
}

export default App;
