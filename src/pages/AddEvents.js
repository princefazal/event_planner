import React , {useState}from "react";
import { Link,  useNavigate } from 'react-router-dom'
import { addDoc , eventRef } from "../firebase";



const AddEvent = ()=>{
    const navigate =  useNavigate()

    const [name ,  setname] = useState()
    const [place ,  setplace] =  useState()
    const [time ,  settime] = useState()
    const [date ,  setdate] = useState()
    


    const hanname = (e)=> setname(e.target.value)
    const hanplace = (e)=> setplace(e.target.value)
    const hantime= (e) =>settime(e.target.value)
    const handate = (e)=> setdate(e.target.value)

    const additem =()=>{
        let obj={
            name ,
            place,
            time,
            date,
        }
        addDoc(eventRef, obj).then(()=>{
            console.log('added to data base')
            navigate('/')
        }).catch(()=>{
            console.log('not added')
        })
        
    }


    return (
        <>

<button>
            <Link to={'/'}>
                   Home
             </Link>
             </button>



             <button>
             <Link to={'/MyEvents'}>
                     My MyEvents
             </Link>
             </button>


             <button>
             <Link to={'/AddEvents'}>
                      Add Events
             </Link>
             </button>

             
         <h1> hello from add events</h1>




         <br/>

        < input type='text' placeholder="Event name" value={name} onChange={hanname} />
        < input type='text' placeholder="Event place" value={place} onChange={hanplace} />
        < input type='text' placeholder="Event date" value={date} onChange={handate} />
        < input type='text' placeholder="Event time" value={time} onChange={hantime} />
        <button onClick={additem}> Add Event</button>


        
        
        
        </>
    )
}

export default AddEvent