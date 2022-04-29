import React from "react";

const StudentArray = ({ array, handleDelete }) => {
  return (
    <>
      <table>
        <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Email</th>
        </tr>
        {array.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <button onClick={() => {handleDelete(index)}}>X</button>
          </tr>
        ))}
      </table>
    </>
  );
};

export default StudentArray;
