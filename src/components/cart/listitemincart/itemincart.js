import { useDispatch, useSelector } from "react-redux";
import { addone, deleteone, changeqty } from "../../../actions/productcheck";
import "./itemincart.css";
const Itemincart = ({ index }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const addtocart = useSelector((state) => state.product[index].addtocart);
  return (
    <li>
      {addtocart === 0 ? (
        " "
      ) : (
        <div className="cartitem">
          <img src={product[index].imagelink} alt="image of product" />
          <div className="nameandqty">
            <p>{product[index].productname}</p>
            <p>
              <span
                onClick={() => {
                  deleteone(dispatch)(index);
                }}
              >
                {" "}
                -{" "}
              </span>
              {product[index].addtocart}
              <span
                onClick={() => {
                  addone(dispatch)(index);
                }}
              >
                {" "}
                +{" "}
              </span>
            </p>
          </div>
          <div className="priceandremove">
            <p>${product[index].price}</p>
            <a
              href="!#"
              onClick={() => {
                changeqty(dispatch)(index, 0);
              }}
            >
              remove
            </a>
          </div>
        </div>
      )}
    </li>
  );
};
export default Itemincart;
