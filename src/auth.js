import "./styles.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";

import Retrieve from "./retrieve";
import Send from "./send";

export default function Auth() {
  const [uname, setUname] = useState([]);
  const [login, setLogin] = useState(false);
  const [userid, setUserid] = useState('');

  const handleOnClickGoogle = () => {
    //function to login using google
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user, user.displayName);

        // setUname(user.displayName);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleOnClickGithub = () => {
    //function to login using google
    var provider = new firebase.auth.GithubAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        // console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const userSignout = () => {
    //function to signout
    firebase
      .auth()
      .signOut()
      .then(() => {
        // console.log("sign-out succesfull")
        setLogin(false);
      })
      .catch((error) => {
        console.log("we have error signing you out");
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // console.log("user signed in");
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.

          const test = [name, email, photoUrl];

          setUserid(uid);

          setUname(test);

          setLogin(true);
        }
      }
    });
  }, [login]);

  return (
    <div className="App">
      {login ? (
        <div >
          <div className="flexy">
            <Send userid={userid} />
            <Retrieve userid={userid} />
          </div>
          <button className="btn" onClick={userSignout}>Signout</button>
        </div>
      ) : (
        <div className="signin">
          <h2>
            looks like you are not signed in, please sign in using below options
          </h2>
          <button className="btn-auth" onClick={handleOnClickGithub}>Sign In With Github</button>
          <div>Or</div>
          <button className="btn-auth" onClick={handleOnClickGoogle}>Sign In Using Google</button>
        </div>
      )}
      <footer>
        <p>
          Developed by <a href="https://logan1x.github.io">@logan1x</a>
        </p>
      </footer>
    </div>
  );
}
