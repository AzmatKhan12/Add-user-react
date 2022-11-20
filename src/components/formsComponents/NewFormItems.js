import React ,{useState,useRef} from "react";
import './NewFormItems.css';
import Wrapper from "../Helper/Wrapper";
import Error from "../UI/Error";
import Button from "../UI/Button";

const NewFormItems = props => {
  const EnterdUSerInput = useRef();
  const EnterdAgeInput = useRef();

  const [error,setError]=useState();
 
  

  const formSubmitHandler = (event)=>{
    event.preventDefault();
    const CurrentUser = EnterdUSerInput.current.value;
    const CurrentAge = EnterdAgeInput.current.value;
    if (CurrentUser.trim().length === 0 || CurrentAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter valid Name and age (non-Empty values)",
      });
      return;
    }
    if (+CurrentAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter valid age (>0)",
      });
      return;
    }
    props.onAddUser(CurrentUser, CurrentAge);
    console.log(CurrentUser, CurrentAge);
    EnterdUSerInput.current.value = '';
    EnterdAgeInput.current.value = '';
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
             
              ref={EnterdUSerInput}
            ></input>
          </div>
          <div>
            <label> User Age</label>
            <input
              type="number"
             
              ref={EnterdAgeInput}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Wrapper>
  );
}
export default NewFormItems;