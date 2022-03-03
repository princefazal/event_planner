import React, { useState } from "react";
import {auth, signInWithEmailAndPassword} from '../firebase'


const Singin =()=>{
    const [email , setemail] = useState()
    const [password ,setpassword] = useState()


    const changeemail=(e)=> setemail(e.target.value)
    const getpass=(e)=> setpassword(e.target.value)


    const login =()=>{
        signInWithEmailAndPassword(auth , email ,password).then(()=>{
            console.log('sing in')
        }).catch((err)=>{
            console.log(err)
        })

    }

    return(
        <>
        <input type="text"  placeholder="Email" value={email} onChange={changeemail}/>
        <input type="text"  placeholder="Password" value={password} onChange={getpass}/>
        <button onClick={login}> Login</button>
        
        </>
    )
}

export default Singin