import logger from './logger';
import thunk from 'redux-thunk';
import { applyMiddleware ,compose} from 'redux';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = composeEnhancers(
  applyMiddleware(thunk, logger),
  // other store enhancers if any
);
export default middleware;