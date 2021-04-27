import { useState, useEffect} from 'react';

import firebase from './firebase';


function UseData(){
const [times, setTimes] = useState([]);

useEffect(()=>{

  firebase
    .firestore()
    .collection('times')
    .onSnapshot((snapshot) =>{
        const  newTimes = snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }))

        setTimes(newTimes);
    })

}, [])



return times
}


const getData = () =>{

  const times = UseData()
return(
  <div>
  <h1>submitted notes are shown below</h1>
  <div className="flexy">
    {times.map((time)=>
      <div key={time.id} className="card">
        <h4>{time.title}</h4>
        <p>{time.textdata}</p>
      </div>
    )}
  </div>
  </div>
)
}

export default getData;