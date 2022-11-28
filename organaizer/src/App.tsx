import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {Routes, Route} from "react-router";
import {routes} from "./utils/routes";
import UserPage from "./components/UserPage";
import AddTasck from "./components/AddTasck";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={routes.main} element={<MainPage/>}/>
          <Route path={routes.tasckList} element={<UserPage/>}/>
          <Route path={routes.addTasck} element={<AddTasck/>}/>
      </Routes>
    </div>
  );
}

export default App;
