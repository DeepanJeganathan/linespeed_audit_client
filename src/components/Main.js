import React from "react";

export default function Main() {
  const cone = {
    color: "orange",
    fontSize: 80,
  };

  return (
    <>
      <div className=" h-100 row  ">
        <div className="col d-flex h-75 justify-content-center align-items-center">
          <h1> Under construction</h1>
          <i style={cone} class="bi bi-cone-striped"></i>
        </div>
      </div>
    </>
  );
}
