import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';



export const AuthContext = new createContext(null);


const AuthProvider = ({children}) => {
    // firebase integration done
    const auth = getAuth(app);

    // for google signIn
    const googleProvider = new GoogleAuthProvider();
    
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    // creating user
    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // login user
    const login = (email,password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout method
    const logout = () =>{
        setLoader(true);
        return signOut(auth);
    }
    // google signin
    const googleSignin = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        });
        return () => { unSubscribe();}
    },[])
    // this object will be passed as value
    const authInfo = {
        user,
        createUser,
        login,
        logout,
        loader,
        googleSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;