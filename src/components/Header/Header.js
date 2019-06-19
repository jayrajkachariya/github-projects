import React, { Component } from 'react';

import './Header.css';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router';

class Header extends Component {
  onHome = () => {
    this.props.pushOnHistory('/');
  };

  render() {
    return (
      <header>
        <div className="btn" onClick={this.onHome}>
          Github Projects
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  pushOnHistory: route => dispatch(push(route))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
