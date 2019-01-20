import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/index';
import { Header } from './components/common';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <Header headerText = "Tech Stack"/>
    </Provider>
  )
};

export default App;