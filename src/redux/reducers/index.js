import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import projectsReducer from './projectsReducer';
import selectProjectReducer from './selectProjectReducer';

const rootReducer = history =>
  combineReducers({
    isLoading: loadingReducer,
    projects: projectsReducer,
    error: errorReducer,
    selectedProject: selectProjectReducer,
    router: connectRouter(history)
  });

export default rootReducer;
