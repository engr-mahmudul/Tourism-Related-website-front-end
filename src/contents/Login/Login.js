import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user, error, isLoading, isLogIn,
        setUser, setError, setIsLoading, setIsLogIn, signInWithGoogle, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user)
                setError('');
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                setError(error.message);
            });
    }
    return (
        <div className='login-page'>
            <div>
                <h4 className='my-5 text-center'>Please Sign In</h4>
                <div className='pb-4 my-5'>
                    <button className='btn px-5' style={{ backgroundColor: '#1B92AA', color: 'white', fontWeight: "700" }}
                        onClick={handleGoogleSignIn}
                    > Google Sign in</button>
                </div>
            </div>
        </div >
    );
};

export default Login;