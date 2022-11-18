import React from "react";
import './Error.css';
import Button from './Button';

const Error = props =>{
    return (
      <div>
        <div className="back-drop" onClick={props.onConfirm}>
          <div className="modal">
            <header className="header">
              <h2>{props.title} </h2>
            </header>
            <div className="content">
              <p>{props.message}</p>
            </div>
            <footer className="action">
              <Button onClick={props.onConfirm}>okey</Button>
            </footer>
          </div>
        </div>
      </div>
    );
}

export default Error;