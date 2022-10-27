import style from './App.module.scss';
import Header from './components/Header';
import LogIn from "./components/LogIn";
import { useState, createContext } from "react";

export const LoginContext = createContext();
export const UserContext = createContext();
export const LogContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [log, setLog] = useState(false);

  return (
    <LogContext.Provider value={{ log, setLog }}>
      <UserContext.Provider value={{ user, setUser }}>
        <LoginContext.Provider value={{login, setLogin}}>
          <div className={style.App}>
            <Header/>
            {log ? <LogIn /> : null}
          </div>
        </LoginContext.Provider>
      </UserContext.Provider>
    </LogContext.Provider>
  );
}

export default App;
