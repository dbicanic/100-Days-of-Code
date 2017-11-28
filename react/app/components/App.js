var React = require('react');
var ReactDOM = require('react-dom');

class Button extends React.Component {
  state = { counter: 1 };
  
  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1 
    }));
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}
ReactDOM.render(<Button />, mountNode);