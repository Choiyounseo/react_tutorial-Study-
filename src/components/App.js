import React from 'react';
 // var React = require('react'); 와 의미 동일!
import Contact from './Contact';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          name : ''
      }
      this.addMore = this.addMore.bind(this);
  }

  addMore(){
      this.setState({
      name : 'Younseo'
      });
  }
  render(){

      return (
        <div>
              <Contact/>
        </div>
      );
  }
}

export default App;
