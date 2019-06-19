import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { loadProjects, selectProductForView } from '../../redux/actions';
import './ProjectsGrid.css';

import { push } from 'connected-react-router';

const Loading = () => <div className="loading">Loading...</div>;

class ProjectsGrid extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  viewProject = project => {
    this.props.selectProductForView(project);
    this.props.pushOnHistory('/project');
  };

  render() {
    const { projects, error, isLoading } = this.props;
    return (
      <div className="content">
        {isLoading ? (
          <Loading />
        ) : (
          <section className="grid">
            {projects.map(project => (
              <div key={project.id} className="item">
                <img
                  src={project.owner.avatar_url}
                  alt={project.owner.login}
                  className="item__img"
                />
                <div className="item__details">
                  <div className="item__name" onClick={() => this.viewProject(project)}>
                    {project.name}
                  </div>
                  <div className="item__desc">{project.description}</div>
                </div>
                <div className="item__absolute">
                  <div className="item__absolute__capsule">
                    <span className="item__absolute__capsule__1">Last Updated</span>
                    <div className="item__absolute__capsule__2">
                      {new Date(project.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="item__absolute__capsule">
                    <span className="item__absolute__capsule__1">
                      <FontAwesomeIcon icon={faCodeBranch} />
                    </span>
                    <div className="item__absolute__capsule__2">{project.forks}</div>
                  </div>
                  <div className="item__absolute__capsule">
                    <span className="item__absolute__capsule__1">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    <div className="item__absolute__capsule__2">{project.watchers}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, projects, error }) => ({
  isLoading,
  error,
  projects
});

const mapDispatchToProps = dispatch => ({
  loadProjects: () => dispatch(loadProjects()),
  pushOnHistory: route => dispatch(push(route)),
  selectProductForView: project => dispatch(selectProductForView(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsGrid);
