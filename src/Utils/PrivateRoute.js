import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from './Auth';

const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.defaultProps = { redirect: '/login' }

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string,
}


export default PrivateRoute;