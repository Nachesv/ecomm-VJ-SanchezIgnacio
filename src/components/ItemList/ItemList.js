import Item from "../Item/Item"
import PropTypes from "prop-types";
import React from "react";
import "./ItemList.css";
export const ItemList = ({items=[]}) => {

    console.log(items.id)
    return (
        <div className="itemList">
            {items.map(item => <Item key={item.id}  item={item}/> )}
        </div>
    )
}

ItemList.propTypes = {
    items: PropTypes.array,
  };
  

/*
const ItemList = ({productos}) => {

    console.log(productos.length)

    

    const productosCargados = productos.map( (product) => {
        console.log(product.id)

            return <Item key={product.id} product={product} />;

    })



    return (
        <div>
        <div className="d-flex justify-content-sm-around h-75 text-decoration-none">
            {productosCargados};
        </div>
        </div>
    );
}

export default ItemList*/
