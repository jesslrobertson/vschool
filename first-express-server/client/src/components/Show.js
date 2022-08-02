import React, {useState} from "react";
import AddShowForm from "./AddShowForm";

export default function Show(props) {
  const { title, genre, _id } = props;
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="show">
      { !editToggle ?
      <>
        <h1> Title: {title}</h1>
        <p>{genre}</p>
        <button 
          className="delete-btn" 
          onClick={() => props.deleteShow(_id)}>
          Delete
        </button>
        <button 
        className="edit-btn"
        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
          Edit
        </button>
      </>
      :
      <>
        <AddShowForm 
          title={title} 
          genre={genre} 
          _id={_id}
          btnText="Submit Edit" 
          submit={props.editShow}
        />
        <button
        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
          Close
        </button>
      </>
      }
    </div>
  );
}
