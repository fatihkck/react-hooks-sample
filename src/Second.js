import react, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ageContext, nameContext } from "./Store";

function Second() {
  const [age1] = useContext(ageContext);
  const [name, setName] = useContext(nameContext);
  return (
    <div>
      <h1>Yaş : {age1}</h1>
      <button onClick={() => setName("Ali" + age1)}>İsmi değiştir</button>
    </div>
  );
}

export default Second;
