export const RECEIVE_USERS = 'RECEIVE_USERS';

export function reciveUser (users) {
	return {
		type: RECEIVE_USERS,
		users,
	}
}