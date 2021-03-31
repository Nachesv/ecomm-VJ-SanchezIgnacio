import './item.css'
import ItemCount from '../ItemCount/index'
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    console.log(product.id + 'ITEM')
    
  return (    
    <div className="card card-tienda h-20 text-decoration-none"  id="store-card" data-id={product.id}>
      <Link to={`/item/${product?.id}`} className="inline-flex">
        <img src={process.env.PUBLIC_URL + product?.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text" id="tituloProducto">
            {product?.nombre}
          </p>
          <p className="card-text" id="precioProducto">
            {product?.precio}
          </p>

          <ItemCount stock="6" initial="2" />

          <button
            className="btn btn-primary btn-sm botonTienda mt-auto"
            id="botonTienda"
            type="button"
          >
            Agregar al carrito
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Item;


