import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './delete-me.scss';
import { deleteNow } from './delete-me-actions';

const logo = require('../../assets/react_logo.png');

@styleable(css)
class DeleteMe extends Component {
  static propTypes= {
    deleteNow: PropTypes.func,
    deleteMe: PropTypes.string
  };

  componentWillUpdate() {}

  render() {
    return (
      <div className={css.component} >
        <h1>{this.props.deleteMe}</h1>
        <button onClick={() => this.props.deleteNow()}>Delete</button>
        <img src={(logo)} alt="logo" />
      </div>
    );
  }
}

function mapStateToProps({ deleteMe }) {
  return {
    deleteMe
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteNow
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMe);
