import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home/Home';
import MembersPage from '../../pages/Members/Members';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/members" component={MembersPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
