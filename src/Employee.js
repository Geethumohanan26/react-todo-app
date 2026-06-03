import React from 'react'

function Employee({name,age,place}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{place}</p>
    </div>
  );
}

export default Employee;
