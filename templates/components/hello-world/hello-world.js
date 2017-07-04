import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/core.scss';
import css from './hello-world.scss';
import { changeName } from './hello-world-actions';

const logo = require('../../assets/react_logo.png');

@styleable(css)
class HelloWorld extends Component {
  static propTypes= {
    changeName: React.PropTypes.func,
    helloWorldReducer: React.PropTypes.object
  };

  componentWillUpdate() {}

  render() {
    return (
      <div className={css.component} >
        <img src={(logo)} alt="logo" />
        <h1>Hello { this.props.helloWorldReducer.hello } </h1>
        <input onChange={(e) => { this.props.changeName(e.target.value); }} placeholder="Change Name Here" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    helloWorldReducer: state.helloWorldReducer
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeName
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
