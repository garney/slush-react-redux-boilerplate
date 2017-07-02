import { combineReducers } from 'redux';
import reloadReducer from './reload-reducer';
import helloWorldReducer from '../hello-world/hello-world-reducer';

const ReloadCombinedReducers = combineReducers({
	reloadReducer,
	helloWorldReducer
});

export default ReloadCombinedReducers;
