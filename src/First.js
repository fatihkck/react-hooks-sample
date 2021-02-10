import react, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { nameContext, ageContext } from "./Store";

function First() {
  const [name1] = useContext(nameContext);
  const [ages, setAges] = useContext(ageContext);
  return (
    <div>
      <button onClick={() => setAges(age + 1)}>Yaş Artır</button>
      <h1>İsim : {name1}</h1>
    </div>
  );
}

export default First;
