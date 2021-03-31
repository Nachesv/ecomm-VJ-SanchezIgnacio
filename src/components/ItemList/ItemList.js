import Item from "../Item/Item"



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

export default ItemList
