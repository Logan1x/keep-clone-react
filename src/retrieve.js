import { useState, useEffect } from "react";
import { FaTimesCircle } from 'react-icons/fa';
import firebase from "./firebase";

function UseData(uid) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    var citiesRef = firebase.firestore().collection("times");

    // Create a query against the collection.
    var query = citiesRef.where("uid", "==", uid);

    query.get().then((snapshot) => {
      const newTimes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setTimes(newTimes);
    });
  }, [times]);

  return times;
}

function removeItem(itemId) {
  firebase
    .firestore()
    .collection("times")
    .doc(itemId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

const getData = (userid) => {
  const uid = userid.userid;
  const times = UseData(uid);

  const func = () => {
    // Create a reference to the cities collection
    var citiesRef = firebase.firestore().collection("times");

    // Create a query against the collection.
    var query = citiesRef.where("uid", "==", uid);

    query
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    console.log(query);
  };
  // console.log(userid.userid);
  return (
    <div>
      <h1 className="text-retrive">submitted notes are shown below</h1>
      <div className="flex-retrive">
        {times.map((time) => (
          <div key={time.id} className="card">
            <h4>{time.title}</h4>
            <p>{time.textdata}</p>
            <button className="btn-delete" onClick={() => removeItem(time.id)}> <FaTimesCircle /> </button>
            {/* <p>{time.uid}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default getData;
