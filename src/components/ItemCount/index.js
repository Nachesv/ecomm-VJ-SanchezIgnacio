  
import React, { useState } from "react";

export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  // useEffect(() => {
  //   setCount(parseInt(initial));
  //   return;
  // }, [initial]);

  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };

  return (
    <div className=" flex-column align-self-end flex-wrap">
      <div className=" d-flex flex-row justify-content-around align-items-stretch border-secondary border rounded ">
        <button
          disabled={count <= 0}
          className="btn btn-outline-primary"
          type="button"
          onClick={removeHandle}
        >
          -
        </button>
        <div>{count}</div>
        <button
          disabled={count >= stock}
          className="btn btn-outline-primary"
          type="button"
          onClick={addHandle}
        >
          +
        </button>
      </div>
      <button className="btn btn-primary btn-sm botonTienda mt-auto" type="button" onClick={()=>onAdd(count)}>
          Agregar carrito
        </button>
    </div>
  );
}

export default ItemCount;