let React = require('react');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');

function getAppState(){
	return {

	}
}

let App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		return(
			<div>
				MY APP
			</div>
		);
	},

	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;