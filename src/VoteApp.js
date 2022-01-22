
import React, {Component} from 'react';

class VoteApp extends Component {

  constructor(props) {
    super(props);
    console.log("persons:" , this.props.persons);
    // Setting up state
    this.voteForPersonHandling = this.voteForPersonHandling.bind(this);
    this.state = {
      votedFor : "",
    }
  }

  render() {
    return (
      <div className="VoteApp">
        <h1>Election</h1>
        {this.props.persons.map((person,personIndex) => 
           <VoteForPerson 
            key={personIndex} 
            name={person}
            voteForPersonHandling={this.voteForPersonHandling}/>
        )}
      </div>
    );
  }

  voteForPersonHandling(name) {
    console.log("user voted for name:" , name);
    this.setState({votedFor:name});
  }
}

function VoteForPerson(props){
  return (
    <h3 onClick={ event => props.voteForPersonHandling(props.name)}>
      Vote for {props.name}
    </h3>
  );
}

export default VoteApp;
