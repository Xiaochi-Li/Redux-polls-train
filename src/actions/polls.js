export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL= 'ADD_POLL'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}