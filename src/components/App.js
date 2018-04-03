import React, { Component } from 'react'
import { handleInitialData } from "../actions/shared";
import { connect } from 'react-redux';
import Dashboard from './Dashboard'

class App extends Component {
	componentWillMount () {
		const {dispatch} = this.props;
		dispatch(handleInitialData());
	}
	
	render () {
		return (
			<div>
				{this.props.loading === true
					? <div>is loading</div>
					: <Dashboard/>}
			</div>
		)
	}
}

function mapStateToProps ({authedUser}) {
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App);
