import './item.css'
import ItemCount from '../ItemCount/index'

const Item = ({ product }) => {

    console.log(product.id + 'ITEM')

  return (    
    <div className="card card-tienda " id="store-card" data-id={product.id}>
      {/* <img src={require(product.imagen)} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <p className="card-text" id="tituloProducto">
          {product.nombre}
        </p>
        <p className="card-text" id="precioProducto">
          {product.precio}
        </p>
        <button
          className="btn btn-primary btn-sm botonTienda"
          id="botonTienda"
          type="button"
        >
          Agregar al carrito
        </button>
        <ItemCount stock="6" initial="2" />
      </div>
    </div>
  );
};

export default Item;


