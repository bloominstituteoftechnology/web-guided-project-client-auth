import React from "react";
import { Route, Redirect} from "react-router-dom";

/*
1. it renders a <Route /> and passes all the props through to it
2. it checks if the user is authenticated! if they are it renders the "component" prop
3. if the user is not authenticated, redirects the user to /login
*/

const PrivateRoute = ({component: Component, ...rest}) => {
    console.log("route props", rest) //route props
    return <Route {...rest} //route props
            render={(props) => {
                if (localStorage.getItem('token')) {
                    //user is authenticated - render the component
                    return <Component {...props} {...rest}/>;
                } else {
                    //user is NOT authenticated - redirect to login
                    return <Redirect to="/login"/>
                }
            }} 
            />
}

export default PrivateRoute;