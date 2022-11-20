import React ,{useState} from "react";
import './NewFormItems.css';
import Wrapper from "../Helper/Wrapper";
import Error from "../UI/Error";
import Button from "../UI/Button";

const NewFormItems = props => {
  const [inputValue, setInputValue]= useState('');
  const [inputAge, setAgeValue]= useState('');
  const [error,setError]=useState();
   
  const inputChangeHandler = event =>{
   
    setInputValue(event.target.value);
  }

 const ageChangeHandler = event =>{
  
    setAgeValue(event.target.value)
  }
  

  const formSubmitHandler = (event)=>{
    event.preventDefault();
    if (inputValue.trim().length === 0 || inputAge.trim().length=== 0){
       setError({
         title: "Invalid Input",
         message: "Please Enter valid Name and age (non-Empty values)",
       });
      return;
    }
    if(inputAge < 1){
      setError({
        title: "Invalid Age",
        message: "Please Enter valid age (>0)",
      });
      return; 
    }
    props.onAddUser(inputValue, inputAge);
    console.log(inputValue, inputAge);
    setInputValue('');
    setAgeValue('');
  }

  const errorHandler = ()=>{
    setError(null)
  }

  
  return (
   <Wrapper>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <div>
            <label> User Name</label>
            <input
              type="text"
              value={inputValue}
              onChange={inputChangeHandler}
            ></input>
          </div>
          <div>
            <label> User Age</label>
            <input
              type="number"
              value={inputAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Wrapper>
  );
}
export default NewFormItems;