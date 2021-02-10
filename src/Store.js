import React, { useState } from "react";

export const nameContext = React.createContext();
export const ageContext = React.createContext();

function Store({children}) {
  const [name, setName] = useState('Fatih');
  const [age, setAge] = useState(1);

  return (
    <nameContext.Provider value={[name, setName]}>
        <ageContext.Provider value={[age, setAge]}>
            {children}
        </ageContext.Provider>
    </nameContext.Provider>
  );
}

export default Store;
