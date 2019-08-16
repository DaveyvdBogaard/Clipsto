import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import rootReducer from './api/reducers'
import rootSaga from './api/sagas'
import Content from './components/content/Content';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
        sagaMiddleware,
    )
)
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application
const App = () => (
  <Provider store={store}>
      <div className='mainContainer'>
        <Content />
        {/* <Content /> */}
        {/* <Footer /> */}
      </div>
  </Provider>
)

export default App;
