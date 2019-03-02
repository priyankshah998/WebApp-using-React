import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuExample from './MenuComponent';
import PopoverExample from './PopoverComponent';

class Main extends Component {

	render() {
		return(
			<div>
				<Switch>
        			<Route exact path="/" component={MenuExample} />
        			<Route path="/popover" component={PopoverExample} />
        			<Redirect to="/" component={MenuExample} />
        		</Switch>
        	</div>
		);
	}
}

export default Main;