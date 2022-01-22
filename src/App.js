
import React, {Component} from 'react';
import VoteApp from './VoteApp'

class App extends Component {

  constructor(props) {
    super(props);
  
  }

  render() {
    var persons = ["kasi", "Sid", "Surjit"];
    return (
      <div className="App">
        <VoteApp persons={persons}/>
      </div>
    );
  }
}

export default App;
