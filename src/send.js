import { useState } from "react";

import firebase from "./firebase";

const submitData = (userid) => {
  const [title , setTitle] = useState('');
  const [textdata, setTextdata] = useState('');
  // const [color, setColor] = useState('white');
  const uid = userid.userid;

  function formSubmit(e){
    e.preventDefault();
    firebase
      .firestore()
      .collection('times')
      .add({
        uid,
        title,
        textdata
      })
      .then(()=> {
        setTitle('')
        setTextdata('')
      })

  }

  return (
    <div className="submit">
      <form onSubmit={formSubmit}>
      <label htmlFor="" className="label-input" >Enter Notes Title & Text-Description Below</label>
      <input className="input-box" type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} placeholder="Title" required />
      <input className="input-box" type="text" value={textdata} onChange={e => setTextdata(e.currentTarget.value)} placeholder="Description" required />
      <button className="btn">Submit</button>
    </form>
    </div>
    
  );
};

export default submitData;
