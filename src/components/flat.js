import React from "react";
import "../styles/flat.css";
// API: https://github.com/lewagon/flats-boilerplate/blob/master/flats.json

const Flat = ({flat, selectFlat}) => {
  const title = `${flat.price} ${flat.priceCurrency} - ${flat.name}`;

  const style = {
    backgroundImage: `url('${flat.imageUrl}')`
  }; // backgroundImage instead of background-image

  const handleClick = () => {
    // handleClick -> center marker when clicked
    // call the parent method selectFlat ???????????
    selectFlat(flat);
  } // onclick?????

  return (
    <div className="flat" onClick={handleClick}>
      <div className="flat-picture" style={style}></div>
      <div className="flat-title">
        {title}
      </div>
    </div>
  );
}

export default Flat;



// // ============================= NO HOOKS =============================
// class Flat extends React.Component {
//   render() {
//     const title = `${this.props.flat.price} ${this.props.flat.priceCurrency} - ${this.props.flat.name}`;

//     const style = {
//       backgroundImage: `url('${this.props.flat.imageUrl}')`
//     }; // backgroundImage instead of background-image

//     return (
//       <div className="flat" onClick={this.handleClick}>
//         <div className="flat-picture" style={style}></div>
//         <div className="flat-title">
//           {title}
//         </div>
//       </div>
//     ); // use className instead of class (class is a reserved word)
//   } // className for css

//   handleClick = () => {
//     // handleClick -> center marker when clicked
//     // call the parent method selectFlat ???????????
//     this.props.selectFlat(this.props.flat);
//   }
// } // onclick?????

// export default Flat;
