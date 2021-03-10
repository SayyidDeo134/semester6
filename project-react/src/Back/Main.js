import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router';
import Content from './Content';

function Main() {

    const { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${path}/:isi`} component={Content} />
            </Switch>
        </div>
    )
}

export default Main;