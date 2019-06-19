import { PROJECTS } from '../constants';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case PROJECTS.LOAD:
      return true;

    case PROJECTS.LOAD_SUCCESS:
    case PROJECTS.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
