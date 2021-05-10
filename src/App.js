import "./styles.css";
// import Senddata from './send';
import Auth from "./auth";
// import Retrieve from './retrieve';
// import firebase from "./firebase";

export default function App() {
  return (
    <div className="App">
      <h1>Notes app</h1>
      <Auth />
      {/* <Senddata />
      <Retrieve /> */}
    </div>
  );
}
