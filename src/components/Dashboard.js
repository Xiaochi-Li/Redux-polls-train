import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
	render () {
		return (
			<div>
				Dashboard
			</div>
		)
	}
}

function mapStateToProps ({authedUser, polls, users}) {
	debugger;
	return {
	}
}

export default connect(mapStateToProps)(Dashboard);
