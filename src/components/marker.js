import React from "react";
import '../styles/marker.css';

class Marker extends React.Component {
  render() {

    // if flat selected, change color to yellow
    let classes = "marker";
    if (this.props.selected) {
      classes += " selected";
    }

    // class="marker" OR class="marker selected" <- change to yellow color
    return (
      <div className={classes}>
        {this.props.text}€
      </div>);
  }
}

export default Marker;
