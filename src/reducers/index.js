import polls from './polls';
import users from './user';
import authedUser from './authedUser'

import { combineReducers } from 'redux';

export default combineReducers({
	polls,
	users,
	authedUser,
})
