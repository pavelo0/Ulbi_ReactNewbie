import {Navigate, Route, Routes} from "react-router";
import {privateRouter, publicRouter} from "../router/index.js";
import {useContext} from "react";
import {AuthContext} from "../context/index.js";
import Loader from "../UI/Loader/Loader.jsx";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return isAuth ? (
        <Routes>
            {privateRouter.map((route) => {
                if (route.redirect) {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Navigate to={route.redirect} replace />}
                        />
                    );
                }

                const Component = route.component;
                const element = route.props
                    ? <Component {...route.props} />
                    : <Component />;

                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={element}
                    />
                );
            })}
        </Routes>
    ) : (
        <Routes>
            {publicRouter.map((route) => {
                if (route.redirect) {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Navigate to={route.redirect} replace />}
                        />
                    );
                }

                const Component = route.component;
                const element = route.props
                    ? <Component {...route.props} />
                    : <Component />;

                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={element}
                    />
                );
            })}
        </Routes>
    );
};

export default AppRouter;
