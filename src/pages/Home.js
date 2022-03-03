import React ,{useEffect , useState}from 'react'
// import { Head } from './components/header'
import { Link, useNavigate } from 'react-router-dom'
import {auth , eventRef , getDocs ,db ,doc, deleteDoc , onAuthStateChanged} from '../firebase'





const Home =()=>{
    const [ allevent , setallevent] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        if (auth.currentUser == null) {
            navigate('/register')
        }
        getAllEvent()

    }, [])





    const getAllEvent = async ()=>{
        const querySnapshot = await getDocs(eventRef);
        let events = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            events.push({ id: doc.id, ...doc.data() })
        });
        setallevent(events)
    }


 
    const deleteitem = async(id)=>{
        const deleted = await deleteDoc(doc(db, "event", id));
    }




    return(
        <>
        <h1>hello from home page</h1>
            <button>
            <Link to={'/'}>
                   Home
             </Link>
             </button>



             <button>
             <Link to={'/myEvents'}>
                     My MyEvents
             </Link>
             </button>


             <button>
             <Link to={'/add'}>
                      Add Events
             </Link>
             </button>
             
             <button>
             <Link to={'/myEvents'}>
                     My MyEvents
             </Link>
             </button>

             <br/>

             {
                 allevent.map((data , index )=>{
                     return(
                         <div key={index}> 
                         <span> {data.name}</span>
                         <span> {data.place}</span>
                         <span> {data.time}</span>
                         <span> {data.date}</span>
                         <button onClick={()=>deleteitem(data.id)}> delete</button>
                         </div>
                     )
                 })
             }




        
        
        </>
    )
}



export default Home 