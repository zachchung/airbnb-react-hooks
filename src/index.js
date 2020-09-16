import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // import css (import at JS allows auto reload)
import App from './App';
import * as serviceWorker from './serviceWorker';

// // hello.js begin ======================
// import Hello from './components/hello';
//
// const root = <div>
//   <Hello name="Boris" />
//   <Hello name="Caio" />
// </div>;
//
// ReactDOM.render(
//     // <Hello name="Boris" />, // this.pros.name from child -> hello.js
//     root,
//   document.getElementById('root')
// );
// // hello.js end ======================

ReactDOM.render( <App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// <React.StrictMode>
// </React.StrictMode>,
