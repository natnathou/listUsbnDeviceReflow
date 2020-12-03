import AppViews from '../viewInterfaces/App';
import { ReflowReactComponent } from '@mcesystems/reflow-react-display-layer';
import * as React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import { Header } from './Header';
import { DevicesList } from './DevicesList';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export class App extends ReflowReactComponent<AppViews> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div className='ui container'>
            <Header />
            <DevicesList />
          </div>
        </Provider>
      </div>
    );
  }
}
