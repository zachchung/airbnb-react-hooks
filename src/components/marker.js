import React from "react";
import '../styles/marker.css';

const Marker = ({selected, text}) => {
  // if flat selected, change color to yellow
  // debugger
  let classes = "marker";
  if (selected) {
    classes += " selected";
  }

  // class="marker" OR class="marker selected" <- change to yellow color
  return (
    <div className={classes}>
      {text}€
    </div>
  );
}

export default Marker;


// // ============================= NO HOOKS =============================
// class Marker extends React.Component {
//   render() {

//     // if flat selected, change color to yellow
//     let classes = "marker";
//     if (this.props.selected) {
//       classes += " selected";
//     }

//     // class="marker" OR class="marker selected" <- change to yellow color
//     return (
//       <div className={classes}>
//         {this.props.text}€
//       </div>);
//   }
// }

// export default Marker;
