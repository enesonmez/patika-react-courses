import React from "react";

function Header({ increment }) {
  console.log("header re-rendered");
  return (
    <div>
      Header 
      <br />
      {/* <code>{JSON.stringify(data)}</code> */}
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default React.memo(Header);
