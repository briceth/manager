import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import firebase from 'firebase';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyAhukCEQdIpea8jU-j-N8_84Iq5zxPD038',
     authDomain: 'manager-9a48b.firebaseapp.com',
     databaseURL: 'https://manager-9a48b.firebaseio.com',
     storageBucket: 'manager-9a48b.appspot.com',
     messagingSenderId: '404472988812'
   };
   firebase.initializeApp(config);
  }

  render() {
    const storeWithMiddleware = createStore(reducers, applyMiddleware(ReduxThunk));

    return (
      <Provider store={storeWithMiddleware}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
