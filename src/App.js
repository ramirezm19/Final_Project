import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import HHList from "./Components/Restaurants/HHList/HHList";
import AddHH from "./Components/Restaurants/AddHH/AddHH";
import ViewHH from "./Components/Restaurants/ViewHH/ViewHH";
import EditHH from "./Components/Restaurants/EditHH/EditHH";

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/Restaurants/HHList'} /> } />
        <Route path={'/Restaurants/HHList'} element={<HHList />} />
        <Route path={'/Restaurants/add'} element={<AddHH />} />
        <Route path={'/Restaurants/view/:restaurantId'} element={<ViewHH />} />
        <Route path={'/Restaurants/edit/:restaurantId'} element={<EditHH />} />
      </Routes>

    </React.Fragment>
  );
}

export default App;
