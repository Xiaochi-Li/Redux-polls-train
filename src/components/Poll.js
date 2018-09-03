import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getPercentage} from '../utils/helpers'

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes']

class Poll extends Component {
  render() {
    const { poll, vote, authorAvatar } = this.props

    const totalVotes = getVoteKeys()
      .reduce((total, key) => total + poll[key].length, 0)

    if (poll === null) {
      return <p>This poll does not exist</p>
    }
    return (
      <div className='poll-container'>
        <h1 className="question">{poll.question}</h1>
        <div className='poll-author'>
          By <img src={authorAvatar} alt="Author's avatar" />
        </div>
        <ul>
          {['a', 'b', 'c', 'd'].map((key) => {
            const count = poll[key + 'Votes'].length
            return (
              <li key={key} className={`option ${vote === key[0] ? 'chosen' : ''}`}>
                {poll[key + 'Votes'] === null
                  ? poll[key + 'Text']
                  : <div className='result'>
                    <span>{poll[key + 'Text']}</span>
                    <span>{getPercentage(count,totalVotes)}% ({count})</span>
                  </div>
                }
              </li>)
          })}
        </ul>
      </div>
    )
  }
}
function mapStateToProps({ authedUser, polls, users }, { match }) {
  const { id } = match.params
  const poll = polls[id]
  if (!poll) {
    return {
      poll: null
    }
  }
  const vote = getVoteKeys().reduce((vote, key) => {
    if (vote !== null) {
      return vote[0]
    }
    return poll[key].includes(authedUser)
      ? key
      : vote
  }, null)

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  }
}
export default connect(mapStateToProps)(Poll)