import { PROJECTS } from '../constants';

const projectsReducer = (state = [], { type, projects }) => {
  if (type === PROJECTS.LOAD_SUCCESS) {
    return [...projects];
  }
  return state;
};

export default projectsReducer;
