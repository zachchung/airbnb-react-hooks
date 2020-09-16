// test file (no use)
import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>; // this.props -> called by parents (dynamic)
  }
}

export default Hello;
