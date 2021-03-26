import Item from "../Item/Item"



const ItemList = ({productos}) => {

    console.log(productos.length)

    

    const productosCargados = productos.map( (product) => {
        console.log(product.id)
        if (product.id < 7){
            return <Item key={product.id} product={product} />;
        }
    })

    const productosCargadosSegundaFila = productos.map( (product) => {
        console.log(product.id)
        if (product.id >= 7){
            return <Item key={product.id} product={product} />;
        }
    })

    return (
        <div>
        <div className="d-flex justify-content-sm-around h-75">
            {productosCargados};
        </div>
        <div className="d-flex justify-content-sm-around h-75">
            {productosCargadosSegundaFila};
        </div>
        </div>
    );
}

export default ItemList
