import { createContext, useContext, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

const sessionContext = {
    isLoggedIn: sessionStorage.getItem("IsLogged-In") || false,
    isSignedIn: sessionStorage.getItem("IsSigned-In") || false,
    showSignUpForm: false,
    userLoginDetails: sessionStorage.getItem("User-Login-Details") || {},
    userSigninDetails: sessionStorage.getItem("User-SignUp-Details") || {},
    onLogin: () => { },
    onLogout: () => { },
    onSignin: () => { },
    onToggleSignIn: () => { }
};

const SessionContext = createContext(sessionContext);

export function useSessionContext() {
    return useContext(SessionContext);
}

export function SessionContextProvider({ children }) {
    const [isSignedIn, setIsSignedIn] = useSessionStorage(
        "IsSigned-In",
        sessionContext.isSignedIn
    );
    const [isLoggedIn, setIsLoggedIn] = useSessionStorage(
        "IsLogged-In",
        sessionContext.isLoggedIn
    );
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [userLoginDetails, setUserLoginDetails] = useSessionStorage(
        "User-Login-Details",
        sessionContext.userLoginDetails
    );
    const [userSigninDetails, setUserSigninDetails] = useSessionStorage(
        "User-SignUp-Details",
        sessionContext.userSigninDetails
    );
    function onToggleSignIn() {
        setShowSignUpForm((prevState) => !prevState);
    }

    function onLogin(details) {
        setIsLoggedIn(true);
        setUserLoginDetails(details);
    }
    function onLogout() {
        setIsLoggedIn(false);
        setUserLoginDetails(false);
    }
    function onSignin(details) {
        setIsSignedIn(true);
        setUserSigninDetails(details);
    }
    return (
        <SessionContext.Provider
            value={{
                isSignedIn,
                isLoggedIn,
                userLoginDetails,
                userSigninDetails,
                onLogin,
                showSignUpForm,
                onLogout,
                onSignin,
                onToggleSignIn
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
