import React from "react";
import ReactDOM from "react-dom";
import './Error.css';
import Button from './Button';

const Error = props =>{

  const Backdrop = props =>{
    return <div className="back-drop" onClick={props.onConfirm}></div>
  }

  const OverlayModal = props =>{
    return (
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
    );
  }

    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          document.getElementById("backdrop-root")
        )}

        {ReactDOM.createPortal(
          <OverlayModal
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById("overlay-root")
        )}
      </React.Fragment>
    );
}

export default Error;