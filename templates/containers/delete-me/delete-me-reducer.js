import { DELETED } from './delete-me-actions';

export default function (state = 'Please Delete Me.', action) {
  switch (action.type) {
    case DELETED:
      return state.substring(0, state.length - 1);
		default:
	}

  return state;
}
