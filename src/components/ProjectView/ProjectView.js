import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeBranch,
  faExclamationCircle,
  faEye,
  faClone
} from '@fortawesome/free-solid-svg-icons';

import './ProjectView.css';

class ProjectView extends Component {
  render() {
    const {
      owner,
      name,
      description,
      language,
      license,
      languages_url,
      open_issues,
      forks,
      watchers,
      clone_url,
      created_at,
      updated_at,
      html_url
    } = this.props.selectedProject;
    return (
      <div className="product_view">
        <div className="product_view__1">
          <div>
            <img src={owner.avatar_url} alt="avatar_url" className="product_view__1__img" />
          </div>
          <div>
            <a href={owner.html_url} className="product_view__1__login">
              {owner.login}
            </a>
          </div>
        </div>
        <div className="product_view__2">
          <h1 className="product_view__2_header">
            <a href={html_url}>{name}</a>
          </h1>
          <div className="product_view__2__flex">
            <div className="product_view__2__flex__date">
              <span className="mr-1">Created At: {new Date(created_at).toLocaleDateString()}</span>
              <span className="ml-1">Updated At: {new Date(updated_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="product_view__2__flex">
            <div className="item__absolute__capsule">
              <span className="item__absolute__capsule__1">
                <FontAwesomeIcon icon={faClone} />
                <span className="ml-1">Clone</span>
              </span>
              <div className="item__absolute__capsule__2">
                <a href={clone_url}>{clone_url}</a>
              </div>
            </div>
          </div>

          <p>{description}</p>

          <div className="product_view__2__flex__data mb-1">
            Language:{' '}
            <a href={languages_url} className="a">
              {language}
            </a>
          </div>

          {license && (
            <div className="product_view__2__flex__data mb-1">
              License:{' '}
              <a href={license.url} className="a">
                {license.name}
              </a>
            </div>
          )}

          <div className="product_view__2__flex">
            <div className="item__absolute__capsule">
              <span className="item__absolute__capsule__1">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span className="ml-1">Open Issues</span>
              </span>
              <div className="item__absolute__capsule__2">{open_issues}</div>
            </div>
            <div className="item__absolute__capsule">
              <span className="item__absolute__capsule__1">
                <FontAwesomeIcon icon={faCodeBranch} />
                <span className="ml-1">Forks</span>
              </span>
              <div className="item__absolute__capsule__2">{forks}</div>
            </div>
            <div className="item__absolute__capsule">
              <span className="item__absolute__capsule__1">
                <FontAwesomeIcon icon={faEye} />
                <span className="ml-1">Watchers</span>
              </span>
              <div className="item__absolute__capsule__2">{watchers}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedProject }) => ({
  selectedProject
});

export default withRouter(connect(mapStateToProps)(ProjectView));
