import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


// this is used as general context
export const AuthContext = new createContext(null);

// this context is used to share data between service details and user profile component
export const AuthArrayContext = new createContext([]);


const AuthProvider = ({children}) => {
    // firebase integration done
    const auth = getAuth(app);

    // for google signIn
    const googleProvider = new GoogleAuthProvider();
    
    const [user, setUser] = useState(null);

    // this state is used to fixing the problem realted private route and other reloading issue
    const [loader, setLoader] = useState(true);

    // this state is used for collecting selected services from service details page
    const [selectedService, setSelectedService] = useState([]);

    const setService = (name) =>{           
            const newArray = [...selectedService,name]
            setSelectedService(newArray);        
    }

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

    // onAuthState is noramally used in the useEffect
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
        googleSignin,
        setService,
        
    }
    // this is passed to userProfile
    const autharray = {
        selectedService
    }

    return (
        <AuthContext.Provider value={authInfo}>
            <AuthArrayContext.Provider value={autharray}>
                {children};
            </AuthArrayContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;