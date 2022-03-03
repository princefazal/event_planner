import React, { useState } from 'react'
import { link ,  useNavigate  } from 'react-router-dom'
import Conatiner from '../components/header'
import {createUserWithEmailAndPassword, auth , provider ,  onAuthStateChanged, userRef , addDoc ,signInWithPopup, GoogleAuthProvider }from '../firebase'




const Register =()=>{
    const [email , setemail] = useState()
    const [ password , setpassword]= useState()
    const [phone , setphone]= useState()
    const [nickname ,setnickname] = useState()
 
    const handleemail =(e)=> setemail(e.target.value)
    const handlepass =(e)=> setpassword(e.target.value)
    const nick =(e)=> setnickname(e.target.value)
    const getphone =(e)=> setphone(e.target.value)

    const creatuser =()=>{
        createUserWithEmailAndPassword(auth , email , password).then((user) => {
            console.log('auth done')
            let obj = {
                uid: user.user.uid,
                nickname,
                phone,
                email,
                id : user.user.uid,
               
            }

            addDoc(userRef, obj).then(() => {
            }).catch((err) => {
               
                console.log(err)
            })

        }).catch((err) => {
            
            console.log(err)
        })

    };

    const navigate = useNavigate()


    const google =()=>{
       
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    console.log('signed in')
    const user = result.user;
    // ...
    navigate('/')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    console.log(error)
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }


    const check =()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              console.log('user singed in')
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
              console.log('signed out')
            }
          })
    }

    return(
        <>
       
        <input type="text" placeholder='Enter your email' value={email} onChange={handleemail} />
        <input type="text" placeholder='Enter your Password' value={password} onChange={handlepass} />
        <input type="text" placeholder='Nick name' value={nickname} onChange={nick} />
        <input type="text" placeholder='Phone Number' value={phone} onChange={getphone} />
         <button onClick={creatuser}>Register</button>
         <button onClick={google}>google</button>
         <button onClick={check}>Check the user</button>
        
       
        
        </>
    )
}

export default Register