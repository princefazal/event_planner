import React , { useEffect  ,useState}from "react";
import { Link , useNavigate} from 'react-router-dom'
import { auth , onAuthStateChanged ,  getDocs, db, eventRef,  query , where} from '../firebase'




const MyEvents =()=>{

    const [eve, setEve] = useState([])
    const navigate = useNavigate()


    
    useEffect(async () => {
        onAuthStateChanged( auth , (user)=>{
          
         if (user){

         }else{
              navigate('/register')
         }
         getAllEvent()

        })
    }, [])
   

    const getAllEvent = async () => {
        const q = query(eventRef, where("uid", "==", auth.currentUser.uid))
        const querySnapshot = await getDocs(q);
        let events = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            events.push({ id: doc.id, ...doc.data() })
        });
        setEve(events)
    }


    console.log('events==>', eve)


    return(
        <>
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

             
        <h1>hello from my events</h1>

        {eve.map(( data , index)=>{
            return(
                <>
                   <div key={index}>
                         <span> {data.name}</span>
                         <span> {data.place}</span>
                         <span> {data.time}</span>
                         <span> {data.date}</span>
                   </div>
            
                
                
                
                
                 </>
            )

        })}
        

   

        </>
    )
}

export default MyEvents