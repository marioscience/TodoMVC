import {compose, createStore} from 'redux';
import rootReducer from '../reducers';

import persistState, {mergePersistdState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';


