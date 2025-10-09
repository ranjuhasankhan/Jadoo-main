import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, signInAnonymously, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
    currentUser: null,
    loading: true,
    signup: () => { },
    logout: () => { },
    login: () => { },
    gmailLogin: () => { },
    githubLogin: () => { },
    anonymousLogin: () => { },
    getUserInfo: () => { },
    updateUserInfo: () => { },
    resetPassword: () => { },
})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        });

        return () => unsubscribe()
    }, [currentUser])

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Email verification sent! check your email")
                        // Email verification sent!
                        // ...
                    }).catch((err) => {
                        console.log("Verification failed");

                    })
            })


    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
    const logout = () => {
        signOut(auth)
    }

    const gmailLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential);

                // ...
            });
    }

    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;


                // The signed-in user info.
                const user = result.user;
                console.log(user.providerData[0].providerId);

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                console.log(credential);

                // ...
            });
    };

    const anonymousLogin = () => {
        signInAnonymously(auth)
            .then(() => {
                console.log(auth);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const getUserInfo = () => {
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const email = user.email;
            const displayName = user.displayName;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;

            console.log(displayName);
            console.log(email);

        }
    }

    const updateUserInfo = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }).then(() => {
            console.log("user update done");

        }).catch((error) => {
            console.log(error.message);

        });
    }
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Password reset email sent!");
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                
            });
    }





    const value = {
        currentUser,
        loading,
        signup,
        logout,
        login,
        gmailLogin,
        githubLogin,
        anonymousLogin,
        getUserInfo,
        updateUserInfo,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;

