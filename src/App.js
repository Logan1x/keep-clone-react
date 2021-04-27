import "./styles.css";
import Senddata from './send';
import Retrieve from './retrieve';
import firebase from './firebase';




export default function App() {
  return (
    <div className="App">
      <h1>Notes app</h1>
      <Senddata />
      <Retrieve />
    </div>
  );
}
