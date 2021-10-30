import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div >
            <Spinner style={{ margin: "100px 50%" }} animation="border" variant="success" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children :
                <Redirect
                    to={{
                        pathname: "/login",

                        state: { from: location }
                    }}
                />
            }
        >

        </Route>
    );
};

export default PrivateRoute;