import React, { Children } from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{props.children}</div>
    </div>
  );
}
