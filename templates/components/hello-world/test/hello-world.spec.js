import expect from 'expect'
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '';
import HelloWorld from '../hello-world';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducers);

function setup() {
  return mount(<Provider store={store}>
    <HelloWorld />
  </Provider>);
}

describe('<HelloWorld>', () => {
  it('should have ', () => {

  });
});