import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { financRouters } from "./routes";

export const TContext = createContext(null);

function App() {
  const [tstate, setTstate] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <TContext.Provider value={{
      tstate,
      setTstate,
      count,
      setCount
    }}>
      <div className="App">

        <Routes>
          {financRouters.map(({ path, Element }) => {
            return (<Route key={path} path={path} element={<Element />} />)
          })}
        </Routes>

      </div>
    </TContext.Provider>
  );
}

export default App;
