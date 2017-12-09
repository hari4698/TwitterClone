import React from 'react'
import ReactDOM from 'react-dom'
import {Sample} from './app'

const style = {
  width: 100,
  border:  'solid blue',
  display: 'inline-block',
  padding: 2,
  margin: 2
}


class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div  >
          <div >
          <h1>Hello, orld!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
                
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );