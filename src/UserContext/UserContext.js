import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Authcontext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser] = useState(null)

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        })

        return () =>{
            unsubscribe();
        }
    },[])

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    

    const authInfo = {user, createUser, signIn,providerLogin,logOut}
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default UserContext;