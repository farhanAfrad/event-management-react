import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = new createContext(null);


const AuthProvider = ({children}) => {
    // firebase integration done
    const auth = getAuth(app);
    
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
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;