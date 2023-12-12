import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = new createContext(null);


const AuthProvider = ({children}) => {
    // firebase integration done
    const auth = getAuth(app);
    
    const [user, setUser] = useState(null);

    // creating user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // login user
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout method
    const logout = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => { unSubscribe();}
    },[])
    // this object will be passed as value
    const authInfo = {
        user,
        createUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;