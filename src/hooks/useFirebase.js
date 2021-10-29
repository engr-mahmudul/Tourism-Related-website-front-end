import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // -------------------------Google Sign in Authentication-----------------------
    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);

    }
    // -----------------------------------sign out--------------------------- 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    // -------------------------state ovserber of firebase------------------ 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        });
    }, [])
    return {
        user, error, isLoading, isLogIn,
        setUser, setError, setIsLoading, setIsLogIn, signInWithGoogle, logOut
    }

}
export default useFirebase;