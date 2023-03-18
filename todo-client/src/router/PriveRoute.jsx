import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "@reactivers/hooks";
import {useEffect, useState} from "react";
import {fetchCurrentUser} from "../services/user.service.js";
import useIsMounted from "../hooks/useIsMounted.hook.js";

const PrivateRoutes = () => {
    const { token, isLoggedIn, login, logout } = useAuth();
    const [ isReady, setIsReady ] = useState(false);
    const isMounted = useIsMounted()

    useEffect(() => {
        if (isMounted()) {
            setIsReady(true);
        }
    }, [isMounted])

    useEffect(() => {
        if (token) {
            if (!isLoggedIn) {
                fetchCurrentUser().then(response => login(response.data));
            }
        } else {
            if (isLoggedIn) {
                logout();
            }
        }
    }, [token, isLoggedIn, login, logout, isReady]);

    if (!isReady) return <></>

    if (token) {
        return isLoggedIn ? <Outlet /> : <></>
    } else {
        return isLoggedIn ? <></> : <Navigate to={"/login"} />
    }
}

export default PrivateRoutes;
