import './App.css';
import Header from './components/Header';
import LogIn from "./components/LogIn";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [log, setLog] = useState(false);

  return (
    <div className="App">
      <Header
        login={login}
        setLogin={setLogin}
        user={user}
        setUser={setUser}
        setLog={setLog}
      />
      {log ? <LogIn
        setLog={setLog}
        setLogin={setLogin}
        setUser={setUser}
      /> : null}
    </div>
  );
}

export default App;
