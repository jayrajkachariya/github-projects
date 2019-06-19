import { PROJECTS } from '../constants';

const loadProjects = () => ({
  type: PROJECTS.LOAD
});

const setProjects = projects => ({
  type: PROJECTS.LOAD_SUCCESS,
  projects
});

const setError = error => ({
  type: PROJECTS.LOAD_FAIL,
  error
});

const selectProductForView = project => ({
  type: PROJECTS.VIEW,
  project
});

export { setError, setProjects, loadProjects, selectProductForView };
