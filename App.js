import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './src/routes';
import store from './src/redux/store';


const App = () => {
  return (
      <Provider store={store}>
          <StackNavigator/>
      </Provider>
  )
};

export default App;
