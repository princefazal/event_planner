import React from "react";
import { auth , signOut ,  onAuthStateChanged } from "../firebase";


const Logout =()=>{

    const logout =()=>{
        signOut(auth).then(()=>{
            console.log('sign out hogya')
        }).catch((err)=>{
           console.log("sign out nhi hwa " , err)
        })

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              console.log('not signed out')
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
              console.log('signed out')
            }
          });
    }


    return( 
        <>

        <button onClick={logout}> Logout</button>
        
        
        
        
        </>

    )
}

export default Logout                       