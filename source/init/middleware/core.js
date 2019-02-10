import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { customThunk } from './custom';
import createSagaMiddleWare from 'redux-saga';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    }
  });
  
  const sagaMeddleWare = createSagaMiddleWare();
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = __DEV__ && devtools ? devtools : compose;
  const middleware = [sagaMeddleWare, customThunk];
  
  if (__DEV__) {
    middleware.push(logger);
  }
  
  const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

  export { enhancedStore, sagaMeddleWare };