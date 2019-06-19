import { PROJECTS } from '../constants';

const errorReducer = (state = null, { type, error }) => {
  switch (type) {
    case PROJECTS.LOAD_FAIL:
      return error;

    case PROJECTS.LOAD:
    case PROJECTS.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
