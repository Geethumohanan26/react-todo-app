import React from 'react'

function Header(props) {
  return (
    <div>
      <h1>Hello I am{props.data}</h1>
    </div>
  );
}

export default Header;
