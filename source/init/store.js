import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

import { enhancedStore, sagaMeddleWare } from './middleware/core'

export const store = createStore(rootReducer, enhancedStore);

sagaMeddleWare.run(rootSaga);