import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, hasPermission, updateActivePage, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props: any) => {
                if (hasPermission) {
                    return (<Component {...props.location} updateActivePage={updateActivePage} />);
                } else {
                    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
                }
            }}
        />
    );
};