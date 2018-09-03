import React from 'react'
import { connect } from 'react-redux';

function Leaderboard(props) {
  return (
    <ul>
      {props.users.map((user) => (
        <li className='user' key={user.id}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`}></img>
          <div>
            <h1>{user.name}</h1>
            <p>{user.pollsCount} Polls</p>
            <p>{user.answersCount} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((userName) => {
      const { id, name, avatarURL, polls, answers } = users[userName]
      return {
        id,
        name,
        avatarURL,
        pollsCount: polls.length,
        answersCount: polls.length
      }
    })
      .sort((a, b) => b.pollsCount + b.answersCount > a.pollsCount + a.pollsCount)
  }
}

export default connect(mapStateToProps)(Leaderboard)