import './item.css'
import ItemCount from '../ItemCount/index'
import { Link } from "react-router-dom";

const Item = ({ item }) => {

  console.log('ITEM IMAGE ' + item.image)
    
  return (    
    <div className="card card-tienda h-20 text-decoration-none"  id="store-card" data-id={item.id}>
      
        <img src={item?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text" id="tituloProducto">
            {item?.title}
          </p>
          <p className="card-text" id="precioProducto">
            {item?.price}
          </p>
          <Link to={`/item/${item?.id}`} className="inline-flex">
          <ItemCount stock={item?.stock} initial="2" />
          </Link>

        </div>
 
    </div>
  );
};

export default Item;


