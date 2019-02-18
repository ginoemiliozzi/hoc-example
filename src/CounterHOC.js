import React from "react";

const withCounter = (WrappedComponent, selectData) => {
    // returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          counter: 0
        };
      }
  
      handleChange() {
        console.log("holis");
        this.setState( {
          counter: this.state.counter + 1
        });
      }
  
      render() {
        // renders the wrapped component with the fresh data
        // we can pass through any additional props
        return <WrappedComponent counter={this.state.counter} onClick={this.handleChange} {...this.props} />;
      }
    };
  }

export default withCounter;