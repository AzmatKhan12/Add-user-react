/** @format */

import React,{useState,Fragment} from "react";
import "./App.css";
import UsersList from "./components/formsComponents/UsersList";
import NewFormItems from "./components/formsComponents/NewFormItems";

const dummyData =[
{
  id: 'id 1',
  name : 'Azmat',
  Age : 27
},
{ 
  id: 'id 2',
  name : 'Kashif',
  Age : 28
  }
]
const App = ()=> {
 const [addInput, setAddInput]= useState(dummyData)
  
 const addHandler = (Uname,Uage) =>{
  setAddInput(preValue =>{
    const updatedValue =[...preValue]
    updatedValue.unshift({
      name: Uname,
      Age: Uage,
      id: Math.random().toString(),
    });
      
    return updatedValue;
  })
 }

  return (
    <Fragment>
      <NewFormItems onAddUser={addHandler} />
      <UsersList users={addInput} />
    </Fragment>
  );
}

export default App;
