import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Form from "./Form/Form";
import "./App.css";
import Card from './Card';
import SinglePage from './SinglePage/SinglePage';
import DataCreate from './Data Create/DataCreate';
import Admin from './Admin/Admin';
const App = () => {
  return (
    <>
      <Routes>
        <Route path ="/" element={<Form/>}/>
        <Route path ="/card" element={<Card/>}/>
        <Route path ="/:id" element={<SinglePage/>}/>
        <Route path ="/createData" element={<DataCreate/>}/>
        <Route path ="/createData/:id" element={<DataCreate/>}/>
        <Route path ="/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
};

export default App;
