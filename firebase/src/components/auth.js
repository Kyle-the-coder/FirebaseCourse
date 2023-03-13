import { auth, googleProvider } from "../config/Firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from "react"

import e from "cors"

export const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(auth?.currentUser?.email)
    const signIn = async () =>{
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            
        } catch (error) {
            console.log(error)
        }
    }
    const signInWithGoogle = async () =>{
        try {
            await signInWithPopup(auth, googleProvider)
            
        } catch (error) {
            console.log(error)
        }
    }
    const logout = async () =>{
        try {
            await signOut(auth)
            
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <div>
        <div>   
            <input placeholder="Email..." onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="Password.." onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
        </div>
        <button onClick={signInWithGoogle}>sign in with google</button>
        <button onClick={logout}>logout</button>

        </div>
    )
}