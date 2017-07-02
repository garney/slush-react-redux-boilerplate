import { CHANGED } from './hello-world-actions';

const initialState = {
  hello: '<%= authorName %>'
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGED:
      return Object.assign({}, state, {
        hello: action.payload
      });
		default:
	}

  return state;
}
