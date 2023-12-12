import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = new createContext(null);


const AuthProvider = ({children}) => {
    // firebase integration done
    const auth = getAuth(app);
    // creating user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // login user
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // this object will be passed as value
    const authInfo = {
        createUser,
        login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;