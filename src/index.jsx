import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './scss/index.scss';

import App from './App';
import Firebase, {FirebaseContext} from "./components/Firebase";
import '@google/model-viewer/dist/model-viewer-legacy';


ReactDOM.render(

    <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase()}>

            <App />

          {/*</LeapProvider>*/}
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial --- use if need firebase

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
