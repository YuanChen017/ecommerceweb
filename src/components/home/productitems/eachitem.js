import { useSelector, useDispatch } from "react-redux";
import {
  deleteproduct,
  addone,
  deleteone,
  changeqty,
  trunonqty,
  trunoffqty,
} from "../../../actions/productcheck";
import { trunondetail } from "../../../actions/productcheck";
import Itemdetails from "./itemdetails";
import "./eachitem.css";
import { checkdetail } from "../../../actions/statecheck";

const Eachitem = ({ currentpage, index }) => {
  const dispatch = useDispatch();
  const isadmir = useSelector((state) => state.states.isadmir);
  index = index + (currentpage - 1) * 8;
  const image = useSelector((state) => state.product[index].imagelink);
  const name = useSelector((state) => state.product[index].productname);
  const price = useSelector((state) => state.product[index].price);
  const addtocart = useSelector((state) => state.product[index].addtocart);
  const isaddqty = useSelector((state) => state.product[index].isaddqty);
  const isdetail = useSelector((state) => state.product[index].isdetail);
  return (
    <>
      {isdetail && <Itemdetails index={index} />}
      <div className="item">
        {isadmir ? (
          <button
            id="closebtn"
            onClick={() => {
              deleteproduct(dispatch)(index);
            }}
          >
            {" "}
            X{" "}
          </button>
        ) : (
          <></>
        )}
        <div id="image">
          <img
            src={image}
            alt={name}
            onClick={() => {
              trunondetail(dispatch)(index);
              checkdetail(dispatch(true));
            }}
          />
        </div>
        <div id="info">
          <p>{name}</p>
          <p>
            <strong>${price}</strong>
          </p>
        </div>
        <div className="btns">
          <div id="changebtn">
            {isaddqty && addtocart !== 0 ? (
              <div id="addqty">
                <p>
                  <span
                    onClick={() => {
                      if (addtocart === 1) {
                        trunoffqty(dispatch)(index);
                        deleteone(dispatch)(index);
                        changeqty(dispatch)(index, addtocart - 1);
                      } else {
                        deleteone(dispatch)(index);
                      }
                    }}
                  >
                    -
                  </span>
                  {addtocart}
                  <span
                    onClick={() => {
                      addone(dispatch)(index);
                      changeqty(dispatch)(index, addtocart + 1);
                    }}
                  >
                    +
                  </span>
                </p>
              </div>
            ) : (
              <button
                id="add"
                onClick={() => {
                  trunonqty(dispatch)(index);
                  changeqty(dispatch)(index, addtocart + 1);
                  console.log(index);
                }}
              >
                Add
              </button>
            )}
          </div>
          {isadmir ? <button id="edit">Edit</button> : <></>}
        </div>
      </div>
    </>
  );
};
export default Eachitem;
