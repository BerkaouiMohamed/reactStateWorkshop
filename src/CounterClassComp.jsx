import React, { Component } from "react";

export default class CounterClassComp extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
    console.log("constractor");
  }
  componentDidMount() {
    console.log("component did mount")
  }
  componentDidUpdate(){
    console.log("component did update")

  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
    //this.setState(this.state.count+=1) //error
  };
  render() {
    console.log("render");

    return (
      <div>
        <button onClick={this.inc}>+</button>
        <h1>{this.state.count}</h1>
        <button>-</button>
      </div>
    );
  }
}
