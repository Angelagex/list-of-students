import React, { useState } from "react";
import StudentArray from "./StudentArray";

const ListOfStudents = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  };

  const addLastName = (e) => {
    setLastName(e.target.value);
  };

  const addEmail = (e) => {
    setEmail(e.target.value);
  };

  const onAddStudent = (event) => {
    event.preventDefault();
    if (name && lastName && email) {
      const student = {
        name,
        lastName,
        email,
      };
      setList([...list, student]);
    }
  };

  const handleDelete = (idx) => {
    let aux = [...list];
    aux.splice(idx, 1);
    setList(aux);
  };

  return (
    <div>
      <h1>Hello from the list of students</h1>
      <form className="form">
        <div className="labels">
          <label>Name</label>
          <input onChange={addName} type="text" name="name" />
        </div>
        <div className="labels">
          <label>Lastname</label>
          <input onChange={addLastName} type="text" name="lastName" />
        </div>
        <div className="labels">
          <label>Email</label>
          <input onChange={addEmail} type="text" name="email" />
        </div>
        <button onClick={onAddStudent}>add student</button>
      </form>
      <StudentArray array={list} handleDelete={handleDelete} />
    </div>
  );
};

export default ListOfStudents;
