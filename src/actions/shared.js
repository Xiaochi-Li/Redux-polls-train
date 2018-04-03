import { getInitialData } from "../utils/api";
import { reciveUser } from "./users";
import { receivePolls } from "./polls";
import { setAuthedUser } from "./authedUser";

const RECEIVE_DATA = 'RECEIVE_DATA';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({users, polls}) => {
				dispatch(setAuthedUser(AUTHED_ID));
				dispatch(reciveUser(users));
				dispatch(receivePolls(polls));
			})
	}
}